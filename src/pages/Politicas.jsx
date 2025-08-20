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


export default function Politicas() {
  
  return (
    <section id="politicas" className="scroll-mt-16 py-20">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Política de Privacidad
        </h2>
      </div>
    </section>
  );
}
