import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HistoryItem } from "@/types";
import HistoryProduct from "./history-product";
import dayjs from "dayjs";

type HistoryListProps = {
  item: HistoryItem;
};

export default function HistoryList({ item }: HistoryListProps) {
  const orderId = dayjs(item.date).unix();

  return (
    <li>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Orden #{orderId}</CardTitle>
            <div className=" flex items-center gap-2 flex-wrap">
              <span className="hidden md:font-medium">Fecha:</span>
              <span className="text-right text-sm md:text-base">{item.date}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <span className="font-medium">Lista de productos:</span>

          </div>
          {item.products.map((product) => (
            <HistoryProduct key={product.id} product={product} />
          ))}
          <div className="flex items-center gap-2">
            <span className="font-medium">Cantidad de productos:</span>
            <span>{item.products.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Total de la orden:</span>
            <span className="font-medium">${item.totalAmount.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>
    </li>
  );
}
