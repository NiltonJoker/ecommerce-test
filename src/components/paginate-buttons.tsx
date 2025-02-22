
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginateButtonsProps = {
  currentPage: number;
  nextPage: () => void;
  previousPage: () => void;
  totalPages: number;
};

export default function PaginateButtons({
  currentPage,
  nextPage,
  previousPage,
  totalPages,
}: PaginateButtonsProps) {
  return (
    <div className="flex justify-center gap-4 items-center">
      <Button
        className="cursor-pointer"
        onClick={previousPage}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </Button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <Button
        className="cursor-pointer"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
