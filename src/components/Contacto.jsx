import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectTrigger, SelectContent, SelectItem, SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export const SERVICE_OPTIONS = [
  { value: "web", label: "Sitio Web" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "mantenimiento", label: "Mantenimiento / Soporte" },
  { value: "otros", label: "Otros" },
];

const initialValues = {
  firstName: "", lastName: "", email: "", phone: "", service: "", message: "",
};

export default function Contacto() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const setField = (k, v) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!values.firstName.trim()) e.firstName = "Ingresa tu nombre";
    if (!values.lastName.trim()) e.lastName = "Ingresa tu apellido";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Email inválido";
    if (values.phone && !/^[+0-9 ()-]{6,}$/.test(values.phone)) e.phone = "Teléfono inválido";
    if (!values.service) e.service = "Elige un servicio";
    if (values.message.trim().length < 10) e.message = "Cuéntanos un poco más (mín. 10 caracteres)";
    return e;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const eObj = validate();
    if (Object.keys(eObj).length) {
      setErrors(eObj);
      toast.error("Revisa los campos marcados.");
      return;
    }

    // éxito (sin backend)
    toast.success("¡Correo enviado! Te contactaremos muy pronto.");
    setValues(initialValues);
  };

  return (
    <section id="contacto" className="scroll-mt-16 py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            ¿Listo para empezar el proyecto que te llevará a otro nivel?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Contáctanos y creemos algo increíble juntos.
          </p>
        </div>

        <Card className="border bg-card">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Nombre / Apellido */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input
                    id="firstName"
                    placeholder="Jane"
                    value={values.firstName}
                    onChange={(e) => setField("firstName", e.target.value)}
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={values.lastName}
                    onChange={(e) => setField("lastName", e.target.value)}
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email / Teléfono */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tucorreo@empresa.com"
                    value={values.email}
                    onChange={(e) => setField("email", e.target.value)}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="phone">Número (opcional)</Label>
                  </div>
                  <Input
                    id="phone"
                    placeholder="+56 9 1234 5678"
                    value={values.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              {/* Servicio */}
              <div>
                <Label>Servicio</Label>
                <Select value={values.service} onValueChange={(v) => setField("service", v)}>
                  <SelectTrigger aria-invalid={!!errors.service}>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
              </div>

              {/* Mensaje */}
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="message">Mensaje</Label>
                  <span className="text-xs text-muted-foreground">{values.message.length}/600</span>
                </div>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos sobre tu proyecto, objetivos, plazos, etc."
                  value={values.message}
                  onChange={(e) => setField("message", e.target.value.slice(0, 600))}
                  rows={5}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="text-xs text-muted-foreground">Respondemos en menos de 24 horas hábiles.</p>
                <Button type="submit">Enviar mensaje</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
