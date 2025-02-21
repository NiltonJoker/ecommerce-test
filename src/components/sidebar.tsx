import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, PowerIcon } from "lucide-react";
import { Link } from "react-router";

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
          <Link to="#" className="flex items-center gap-2">
            <PowerIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Tienda</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
          <Link
            to="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
