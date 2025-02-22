import { Outlet } from "react-router";
import Header from "../header";
import { Toaster } from "../ui/sonner";

export default function HomeLayout() {
  return (
    <div className="flex flex-col h-full">
      <Header/>
      <Outlet/>
      <Toaster/>
    </div>
  )
}
