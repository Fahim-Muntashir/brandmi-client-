"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "@/assests/profile.jpg";
import { useAuth } from "@/providers/AuthProvider";
import axiosInstance from "@/axios/axios";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const { isAuth, user } = useAuth();
  const router = useRouter();
  const { email, role, userName } = user || {};
  const handleLogout = async () => {
    try {
      const res = await axiosInstance.get("/auth/logout");
      if (res.data) {
        router.refresh();
      }
    } catch (error) {
      console.log("logout problem", error);
    }
  };
  return (
    <>
      {isAuth ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="h-10 w-10 relative cursor-pointer transition-transform duration-200 hover:scale-105 rounded-full shadow-lg">
              <Image
                src={profileImage}
                fill
                alt="user name"
                className="rounded-full "
              />
              <span className="sr-only">Open user menu</span>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userName}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <Link href={"/me"}>
              <DropdownMenuItem>My Profile</DropdownMenuItem>
            </Link>
            <Link href={`dashboard/${role}`}>
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={"/login"}>
          <Button size={"sm"}>Login</Button>
        </Link>
      )}
    </>
  );
};

export default UserMenu;
