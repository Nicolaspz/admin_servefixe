"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para adicionar o produto
    console.log("Produto adicionado!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Produto</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" type="text" required />
          </div>
          <div>
            <Label htmlFor="price">Preço</Label>
            <Input id="price" type="number" step="0.01" required />
          </div>
          <div>
            <Label htmlFor="category">Categoria</Label>
            <Input id="category" type="text" required />
          </div>
          <div>
            <Label htmlFor="stock">Estoque</Label>
            <Input id="stock" type="number" required />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}