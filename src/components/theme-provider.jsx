import { createContext, useContext, useEffect, useMemo, useState } from "react";

// Allowed values: "dark" | "light" | "system"
const DEFAULT_THEME = "system";
const STORAGE_KEY = "vite-ui-theme";

const ThemeProviderContext = createContext({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = DEFAULT_THEME,
  storageKey = STORAGE_KEY,
}) {
  // Safe read from localStorage (avoids SSR warnings)
  const getInitialTheme = () => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored || defaultTheme;
    } catch (e) {
      return defaultTheme;
    }
  };

  const [theme, setThemeState] = useState(getInitialTheme);

  // Apply theme to <html> class and persist
  useEffect(() => {
    const root = document.documentElement;
    const apply = (t) => {
      root.classList.remove("light", "dark");
      if (t === "system") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.add(isDark ? "dark" : "light");
      } else {
        root.classList.add(t);
      }
    };

    apply(theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch {}

    if (theme === "system") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      const onChange = () => apply("system");
      mql.addEventListener?.("change", onChange);
      return () => mql.removeEventListener?.("change", onChange);
    }
  }, [theme, storageKey]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (t) => setThemeState(t),
    }),
    [theme]
  );

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeProviderContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

// Optional: small toggle component (JS)
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      className="rounded-md border px-3 py-1 text-sm"
      onClick={() => setTheme(next)}
      title={`Cambiar a ${next}`}
      type="button"
    >
      {theme === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
    </button>
  );
}
