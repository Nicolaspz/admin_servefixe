import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MesaCardProps {
  mesaId: string;
  status: 'livre' | 'ocupada' | 'em-andamento';
  pedidosCount: number;
}

export default function MesaCard({ mesaId, status, pedidosCount }: MesaCardProps) {
  const statusColor = {
    livre: 'bg-green-500',
    ocupada: 'bg-red-500',
    'em-andamento': 'bg-yellow-500',
  };

  return (
    <Card className="w-48">
      <CardHeader>
        <CardTitle>Mesa {mesaId}</CardTitle>
        <CardDescription>
          <Badge className={`${statusColor[status]} text-white`}>
            {status}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Pedidos: {pedidosCount}</p>
      </CardContent>
    </Card>
  );
}