import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import NavItems from "./NavItems";
import ToggleMode from "./ToogleMode";
import UserMenu from "./UserMenu";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
  { href: "/dashboard", label: "dashboard" },
];

export default function Navbar() {
  return (
    <main>
      <header className=" w-full border-b fixed top-0 left-0 bg-white shadow-md z-50 ">
        <div className="container mx-auto px-4 flex h-14 items-center">
          {/* logo  */}
          <div className="hidden md:flex items-center">
            <Logo />
          </div>
          {/* mobile view */}
          <MobileNavbar />
          {/* left side */}
          <div className="flex flex-1 items-center  space-x-6 justify-end">
            {/* desktop nav links */}
            <div className="hidden md:block">
              <NavItems />
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
