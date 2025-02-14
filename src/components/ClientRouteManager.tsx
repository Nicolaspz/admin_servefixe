"use client";

import Compras from "@/app/compras/page";
import Home from "@/app/page";
import Stock from "@/app/stock/page";
import { usePathname } from "next/navigation";


export function ClientRouteManager() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <Home /> ;
  }

  if (pathname === "/stock") {
    return <Stock />;
  }
  if (pathname === "/compras") {
    return <Compras />;
  }
  return <p>404 - Página não encontrada</p>; // Caso nenhuma rota corresponda
}
