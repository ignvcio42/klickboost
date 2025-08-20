import { Button } from "@/components/ui/button";
import NavbarKlickBoost from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
import HeroKlickBoost from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import Politicas from "./pages/Politicas";


function App() {
  return (
    <>
      <BrowserRouter>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/politicas" element={<Politicas />} />
        </Routes>
          </ThemeProvider>
          <Toaster position="top-right" />
      </BrowserRouter>
    </>
  );
}

export default App;
