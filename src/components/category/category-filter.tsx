import { ALL_ITEMS_CATEGORY } from "@/constants";
import { Product } from "@/types";
import { DialogClose } from "@radix-ui/react-dialog";
import { Dispatch, useState } from "react";
import { useSearchParams } from "react-router";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ListFilter } from "lucide-react";

type CategoryFilterProps = {
  categories: Product["category"][];
  setSelectedCategory: Dispatch<React.SetStateAction<string>>;
  selectedCategory: Product["category"];
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [, setSearchParams] = useSearchParams();
  const [currentCategory, setCurrentCategory] =
    useState<Product["category"]>(selectedCategory);

  const handleOpen = (open: boolean) => {
    setIsOpen(open);
    if (open) setCurrentCategory(selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
  };

  const handleApply = () => {
    setSelectedCategory(currentCategory);
    setSearchParams(currentCategory ? { category: currentCategory } : {});
    setIsOpen(false);
  };

  const handleRemove = () => {
    setCurrentCategory(ALL_ITEMS_CATEGORY);
    setSelectedCategory(ALL_ITEMS_CATEGORY);
    setIsOpen(false);
  };

  return (
    <div className="block md:hidden">
      <Dialog onOpenChange={handleOpen} open={isOpen}>
        <DialogTrigger asChild>
          <Button className="w-full" onClick={() => setIsOpen(true)}>
            <ListFilter /> Filtrar
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Filter Productos</DialogTitle>
            <DialogDescription>
              Selecciona la categoria para filtrar los productos
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 items-center gap-4">
              <Label htmlFor="category" className="text-left">
                Categoria
              </Label>
              <Select
                onValueChange={handleCategoryChange}
                value={currentCategory}
              >
                <SelectTrigger id="category" className="capitalize">
                  <SelectValue placeholder="Selecciona la categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className="capitalize"
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" onClick={handleApply}>
                Aplicar
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="outline" onClick={handleRemove}>
                Remover
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
