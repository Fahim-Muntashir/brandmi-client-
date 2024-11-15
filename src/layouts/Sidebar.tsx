"use client";
import Logo from "@/components/HomePage/Navbar/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={cn(
        `fixed inset-y left-0 z-50  border-r transition-all duration-300 ease-in-out md:relative lg:block hidden`,
        collapsed ? "w-16" : "w-48"
      )}
    >
      {/* sidebar header */}
      <div className="flex  items-center justify-between px-2 py-2">
        <h1 className={cn(` font-semibold`, collapsed && "hidden")}>
          <Logo />
        </h1>
        <Button
          variant="ghost"
          onClick={() => setCollapsed(!collapsed)}
          size="icon"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
    </aside>
  );
};
export default Sidebar;
