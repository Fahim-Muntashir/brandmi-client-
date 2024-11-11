"use client";
import Image from "next/image";
import logo from "@/../src/assests/logomain.png";
import Link from "next/link";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/" className="flex items-center ">
      {theme === "dark" ? (
        "make a logo png where brand name color is white "
      ) : (
        <Image src={logo} width={150} height={200} alt="logo" />
      )}
    </Link>
  );
};
export default Logo;
