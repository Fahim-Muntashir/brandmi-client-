"use clint";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";
import profile from "@/assests/profile.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex h-16 items-center px-6 border-b">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-2.5 top-[16px] h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full appearance-none bg-background pl-8 md:w-2/3 lg:w-1/3"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative">
          <Bell className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary" />
          <span className="sr-only">Notifications</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="relative inline-block">
              <Image
                src={profile}
                alt="profile image"
                className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
              />
              <span className="sr-only">User menu</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
export default Header;
