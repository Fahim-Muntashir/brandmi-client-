"use client";
import Image from "next/image";
import logomain from "@/../src/assests/logomain.png";
import logo from "@/../src/assests/logo.png";
import Link from "next/link";
import { useTheme } from "next-themes";
const Logo = () => {
  const { theme } = useTheme();

  // Memoize the logo selection to prevent unnecessary re-renders

  const isLogo = theme === "dark" ? logomain : logo;

  return (
<<<<<<< HEAD
    <Link href="/" className="flex items-center ">
      {theme === "dark" ? (
        <Image src={logo} width={150} height={200} alt="logo" />
      ) : (
        <Image src={logomain} width={150} height={200} alt="logo" />
      )}
=======
    <Link href="/" className="flex items-center" aria-label="Home">
      <Image src={isLogo} width={150} height={200} alt="logo" />
>>>>>>> 4518d2a32d65f45a3ecc166d95dbc284d53c59a3
    </Link>
  );
};

export default Logo;
