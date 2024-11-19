"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/../src/assests/logo.png";
import logomain from "@/../src/assests/logomain.png";
import Link from "next/link";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logo);  // Default to light theme logo

  // This ensures the component only renders after the client-side has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update the logo source when the theme changes
  useEffect(() => {
    if (mounted) {
      setLogoSrc(theme === "dark" ? logo : logomain);
    }
  }, [theme, mounted]);

  // Avoid rendering until the component has mounted
  if (!mounted) return null;

  return (
    <Link href="/" className="flex items-center">
      <Image src={logoSrc} width={150} height={200} alt="logo" />
    </Link>
  );
};

export default Logo;
