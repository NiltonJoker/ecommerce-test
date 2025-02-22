import { Rocket } from "lucide-react";
import { Link } from "react-router";
import Sidebar from "./sidebar";
import ShoppingCart from "./cart/shopping-cart";
import { APP_ROUTES } from "@/routes/routes";

export default function Header() {
  return (
    <header className="flex items-center h-16 w-full bg-background px-4 md:px-6">
      <div className="container flex w-full items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Rocket className="h-6 w-6" />
            <span className="text-lg font-bold hidden sm:block">Tienda</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-4 md:flex">
          {
            APP_ROUTES.map(({ path, name }) => (
              <Link
                key={path}
                to={path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {name}
              </Link>
            ))
          }
        </nav>

        <div className="flex gap-1">
          <ShoppingCart />
          <Sidebar />
        </div>
      </div>
    </header>
  );
}
