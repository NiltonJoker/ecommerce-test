import type { Product } from "@/types";
import { Dispatch } from "react";
import { useSearchParams } from "react-router";

type CategoryListProps = {
  categories: Product["category"][];
  setSelectedCategory: Dispatch<React.SetStateAction<string>>;
};

export default function CategoryList({
  categories,
  setSelectedCategory,
}: CategoryListProps) {

  const [, setSearchParams] = useSearchParams();

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSearchParams(category ? { category } : {});
  }
  


  return (
    <aside className="p-4 hidden  md:block">
      <h2 className="text-lg font-bold">Categorias</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className="capitalize cursor-pointer"
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}
