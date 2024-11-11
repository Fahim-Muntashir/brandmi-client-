"use client";
import Link from "next/link";

import ToggleMode from "./ToogleMode";
import MobileNavbar from "./MobileNavbar";
import UserMenu from "./UserMenu";
import { usePathname } from "next/navigation";
import logo from "@/../src/assests/logomain.png";
import Image from "next/image";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
  { href: "/dashboard", label: "dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <main>
      <header className=" w-full border-b  ">
        <div className="container mx-auto px-4 flex h-14 items-center">
          {/* logo  */}
          <div className="hidden md:flex items-center">
            <Link href="/" className="flex items-center ">
              <Image src={logo} width={150} height={200} alt="logo" />
            </Link>
          </div>
          {/* mobile view */}
          <MobileNavbar />
          {/* left side */}
          <div className="flex flex-1 items-center  space-x-6 justify-end">
            {/* desktop nav links */}
            <div className="items-center space-x-4 hidden md:block">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[16px] font-semibold  hover:text-primary ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <UserMenu />
              <ToggleMode />
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
