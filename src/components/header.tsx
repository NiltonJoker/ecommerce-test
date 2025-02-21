import { PowerIcon, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import Sidebar from "./sidebar";

export default function Header() {
  return (
    <header className="flex items-center h-16 w-full bg-background px-4 md:px-6">
      <div className="container flex w-full items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <PowerIcon className="h-6 w-6" />
            <span className="text-lg font-bold hidden sm:block">Tienda</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            to="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Historial
          </Link>
        </nav>

        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full cursor-pointer"
          >
            <ShoppingCart className="h-6 w-6" />
          </Button>
          <Sidebar />
        </div>
      </div>
    </header>
  );
}
