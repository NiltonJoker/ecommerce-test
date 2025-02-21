import { Outlet } from "react-router";
import Header from "../header";

export default function HomeLayout() {
  return (
    <div className="flex flex-col h-full">
      <Header/>
      <Outlet/>
    </div>
  )
}
