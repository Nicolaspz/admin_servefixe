"use client";

import { ProductsTable } from "@/components/CProduto/ProductsTabl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddProductModal } from "@/components/CProduto/modalProdut";  
import { Product } from "@/types/types"; // Defina o tipo Product em um arquivo de tipos

export default function ProdutosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Pizza Margherita",
      price: "45.00",
      category: "Massas",
      stock: 20,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Hambúrguer Artesanal",
      price: "25.00",
      category: "Lanches",
      stock: 15,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      name: "Coca-Cola",
      price: "8.00",
      category: "Bebidas",
      stock: 50,
      imageUrl: "https://via.placeholder.com/150",
    },
  ]);

  const handleSaveProduct = (product: Product) => {
    if (selectedProduct) {
      // Editar produto existente
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p))
      );
    } else {
      // Adicionar novo produto
      setProducts((prev) => [...prev, product]);
    }
    setSelectedProduct(null); // Limpa o produto selecionado
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product); // Define o produto para edição
    setIsModalOpen(true); // Abre a modal
  };

  const handleDelete = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Produtos</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Produto
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Input
          placeholder="Pesquisar produto..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <ProductsTable
        products={filteredProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null); // Limpa o produto selecionado ao fechar
        }}
        product={selectedProduct} // Passa o produto para edição
        onSave={handleSaveProduct} // Função para salvar/adicionar
      />
    </main>
  );
}