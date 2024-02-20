import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { playfairDisplay } from "@/utils/fonts";
import { GiHamburgerMenu } from "react-icons/gi";
import { iconSize } from "@/utils/constants";

const Navbar = () => {
  return (
    <nav className="py-2 shadow-md border-b border-ring_gray_light dark:border-ring_gray_dark">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <GiHamburgerMenu size={iconSize} />
        <Link
          href={"/"}
          className={`${playfairDisplay.className} font-black text-3xl`}
        >
          Wordle
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
