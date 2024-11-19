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
import { auth } from "@/auth/authSetup";
import React from "react";
const UserMenu = async () => {

  const session = await auth();
  const user = session?.user;
  const userInfo = {
    name: user?.name,
    email: user?.email,
    profilePhoto: user?.image,
  };
  return (
    <>
      {userInfo ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Image
                src={userInfo?.profilePhoto ?? ""}
                width={200}
                height={200}
                alt={userInfo?.name ?? ""}
                className="object-cover"
              />
              <span className="sr-only">Open user menu</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userInfo?.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {userInfo?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <Link href={"/myOrder"}>
              <DropdownMenuItem>Orders</DropdownMenuItem>{" "}
            </Link>
            <Link href={""}>
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <LogOut className="mr-2 bg-red-300 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <Button size={"sm"}>Login</Button>
        </>
      )}
    </>
  );
};
export default UserMenu;
