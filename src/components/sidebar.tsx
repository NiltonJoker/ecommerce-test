import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, Rocket } from "lucide-react";
import { Link } from "react-router";
import { APP_ROUTES } from "@/routes/routes";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full md:hidden">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium p-4">
          <Link to="/" className="flex items-center gap-2">
            <Rocket className="h-6 w-6" />
            <span className="text-lg font-bold">Tienda</span>
          </Link>
          {APP_ROUTES.map(({ path, name }) => (
            <SheetClose asChild key={path}>
              <Link
                to={path}
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                {name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
