import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "./Navbar";
import Image from "next/image";
import logo from "@/../src/assests/logomain.png";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const [onOpen, setOnOpen] = useState(false);
  const pathname = usePathname();
  const handleMobileMenu = () => {
    setOnOpen(true);
  };
  return (
    <Sheet open={onOpen} onOpenChange={setOnOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={handleMobileMenu}
          className=" shrink-0 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="px-4 h-screen overflow-y-auto flex flex-col items-center  "
      >
        <SheetHeader className="mb-4 ">
          <SheetTitle>
            <Link href="/" className="flex items-center mb-4">
              <Image src={logo} width={150} height={200} alt="logo" />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-[16px] font-semibold  hover:text-primary ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNavbar;
