import HistoryList from "@/components/history/history-list";
import PaginateButtons from "@/components/paginate-buttons";
import { LIMIT_PER_PAGE } from "@/constants";
import usePaginate from "@/hooks/usePaginate";
import { useHistoryStore } from "@/stores/useHistoryStore";

export default function History() {
  const { history } = useHistoryStore();

  const { currentPage, nextPage, paginatedItems, previousPage, totalPages } =
    usePaginate({ itemsPerPage: LIMIT_PER_PAGE, items: history });

  return (
    <div className="grid grid-cols-1 gap-4 container mx-auto p-4">
      <div className="w-full px-4 py-6 space-y-6">
        <h1 className="text-2xl font-bold">Historial de Ordenes</h1>

        {history.length === 0 && (
          <p className="text-center">No hay historial de ordenes</p>
        )}
        <ul className="space-y-4">
          {paginatedItems.map((item) => (
            <HistoryList key={item.id} item={item} />
          ))}
        </ul>

        <PaginateButtons
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
