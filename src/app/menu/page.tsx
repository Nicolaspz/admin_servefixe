"use client";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const sections = [
  { id: "entrada", label: "Entradas" },
  { id: "sobremesa", label: "Sobremesa" },
  { id: "bebida", label: "Bebida" },
  { id: "comida", label: "Comida" },
  { id: "sopa", label: "Sopas" },
  { id: "vinho", label: "Vinhos" },
  { id: "cafetaria", label: "Cafetaria" }
];

export default function Menu() {
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    if (sectionRefs.current[id]) {
      sectionRefs.current[id].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 w-full">
      <Tabs defaultValue="entrada" className="w-full max-w-4xl">
        <TabsList className="w-full flex justify-center gap-4 fixed">
          {sections.map((section) => (
            <TabsTrigger key={section.id} value={section.id} onClick={() => scrollToSection(section.id)}>
              {section.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      
      <div className="w-full max-w-4xl mt-6">
        {sections.map((section) => (
          <div key={section.id} ref={(el) => (sectionRefs.current[section.id] = el)} className="py-10">
            <h2 className="text-2xl font-bold mb-4">{section.label}</h2>
            <ScrollArea className="h-60 w-full rounded-md border p-4">
              <p>Conteúdo da seção {section.label}...</p>
              <Separator className="my-2" />
            </ScrollArea>
          </div>
        ))}
      </div>
    </div>
  );
}
