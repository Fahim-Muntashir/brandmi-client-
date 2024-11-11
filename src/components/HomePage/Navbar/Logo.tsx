import Image from "next/image";
import logo from "@/../src/assests/logomain.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center ">
      <Image src={logo} width={150} height={200} alt="logo" />
    </Link>
  );
};
export default Logo;
