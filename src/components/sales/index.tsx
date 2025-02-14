import {CircleDollarSign } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";

export default function Sales() {
 return (
   <Card>
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Ultimos Pedidos
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
          
        </div>
        
     </CardHeader>
     
   </Card>
 );
}