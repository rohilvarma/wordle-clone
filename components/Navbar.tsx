import MenuToggle from "./MenuToggle";
import ThemeToggle from "./ThemeToggle";
import { playfairDisplay } from "@/lib/fonts";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="py-2 shadow-md border-b border-ring_gray_light dark:border-ring_gray_dark">
      <div className="flex justify-between items-center w-[90%] mx-auto ">
        
      <MenuToggle />
      <Link href={"/"}>
        <h1 className={`${playfairDisplay.className} font-black text-3xl`}>
          Wordle
        </h1>
      </Link>
      <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
