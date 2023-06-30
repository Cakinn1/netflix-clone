import useAuth from "@/hooks/useAuth";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import BasicMenu from "./BasicMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="img"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        
        <BasicMenu />



        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-not-allowed">Home</li>
          <li className="headerLink cursor-not-allowed">Tv Shows</li>
          <li className="headerLink cursor-not-allowed">Movies</li>
          <li className="headerLink cursor-not-allowed">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline cursor-not-allowed transition duration-[.4s] hover:text-[#b3b3b3]" />
        <p className="hidden lg:inline cursor-not-allowed transition duration-[.4s] hover:text-[#b3b3b3]">Kids</p>
        <BellIcon className="h-6 w-6 cursor-not-allowed transition duration-[.4s] hover:text-[#b3b3b3]" />
        <Link href="/account">
          <img   
            src="https://rb.gy/g1pwyx"
            alt="img"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
