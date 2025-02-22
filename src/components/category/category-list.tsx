import type { Product } from "@/types";
import { Dispatch } from "react";
import { useSearchParams } from "react-router";

type CategoryListProps = {
  categories: Product["category"][];
  selectedCategory: Product["category"];
  setSelectedCategory: Dispatch<React.SetStateAction<string>>;
};

export default function CategoryList({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryListProps) {

  const [, setSearchParams] = useSearchParams();

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSearchParams(category ? { category } : {});
  }
  return (
    <div className="p-4 block">
      <h2 className="text-lg font-bold">Categorias</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`capitalize cursor-pointer ${category === selectedCategory ? "font-bold" : ""}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
