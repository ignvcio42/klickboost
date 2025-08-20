// src/components/Footer.jsx
import { Facebook, Instagram, Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t text-foreground">
      <div className="container mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-4">
        {/* Logo y descripción */}
        <div className="col-span-2">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/img/logo_vfinal.png"
              alt="Klick Boost"
              className="h-10 w-auto object-contain"
            />
            <span className="text-lg font-bold">Klick Boost</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Elevamos tu presencia digital con sitios web modernos, rápidos y funcionales. Tu éxito, nuestro compromiso.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="text-base font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#proyectos" className="hover:underline">Proyectos</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            <li><a href="politicas" className="hover:underline">Politicas</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-base font-semibold mb-4">Contáctanos</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> <a href="">info.klickboost@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +56 9 1234 5678
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4" /> @klickboost
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="w-4 h-4" /> /klickboost
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> /company/klickboost
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t text-center text-xs text-muted-foreground py-4">
        © {new Date().getFullYear()} Klick Boost. Todos los derechos reservados.
      </div>
    </footer>
  );
}
