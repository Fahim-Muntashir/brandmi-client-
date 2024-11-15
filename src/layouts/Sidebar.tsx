"use client";
import AdminSidebar from "@/components/dashboard/sidebarContent/AdminSidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import LogoCollapsed from "./LogoCollapsed";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(true);
  };

  return (
    <div className="relative">
      <aside
        className={cn(
          `fixed inset-y left-0 z-50 h-full  border-r transition-all duration-300 ease-in-out md:relative lg:block hidden `,
          collapsed ? "w-16" : "w-48"
        )}
      >
        {/* sidebar fixed header */}
        <LogoCollapsed collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* sidebar content for large device*/}
        <AdminSidebar collapsed={collapsed} />
        {/* sidebar for mobile device */}
      </aside>
      {/* mobile menu button */}
      <div
        onClick={handleMobileMenu}
        className="bg-green-400 z-50 p-2 absolute top-[11px] left-[17px] lg:hidden block "
      >
        <Menu />
      </div>
      {/* mobile menu button */}
      <Sheet open={mobileMenu} onOpenChange={setMobileMenu}>
        <SheetContent side="left" className="w-64 p-0">
          <DialogTitle className="flex justify-center">
            <LogoCollapsed />
          </DialogTitle>
          <AdminSidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default Sidebar;
