import React, { useState } from "react";
import { NavLinks } from "../../landing/Navbar/data/navLinks";
import DarkMode from "./DarkMode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../../public/images/logo/logo.svg";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const toggleSubmenu = (id: number) =>
    setOpenSubmenu(openSubmenu === id ? null : id);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur bg-white/80 dark:bg-black/80 shadow-md dark:text-white duration-300">
      <div className="max-w-screen-xl mx-auto px-4 py-2 md:py-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <img src={Logo} alt="Logo" className="w-[150px] h-[70px]" />
          </a>

          {/* Menu desktop */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavLinks.map(({ id, name, link, submenu }) => (
                <li key={id} className="relative group py-6">
                  {!submenu ? (
                    <a
                      href={link}
                      className="text-sm font-medium text-gray-600 dark:text-white py-2 px-4 rounded-full hover:bg-emerald-500 hover:text-white duration-300 inline-block"
                    >
                      {name}
                    </a>
                  ) : (
                    <div className="group inline-block text-left">
                      <button className="text-sm font-medium text-gray-600 dark:text-white py-2 px-4 rounded-full hover:bg-emerald-500 hover:text-white duration-300">
                        {name}
                      </button>
                      <ul className="absolute z-20 hidden group-hover:block min-w-[200px] bg-white dark:bg-gray-900 text-black dark:text-white rounded-md shadow-lg mt-2">
                        {submenu.map((item, idx) => (
                          <li key={idx}>
                            <a
                              href={item.link}
                              className="block px-4 py-2 text-sm rounded hover:bg-emerald-500 hover:text-white transition duration-200"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              <DarkMode />
            </ul>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden flex items-center gap-4">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      {/* Responsive menu */}
      <ResponsiveMenu
        showMenu={showMenu}
        openSubmenu={openSubmenu}
        toggleSubmenu={toggleSubmenu}
        setShowMenu={setShowMenu}
      />
    </nav>
  );
};

export default Navbar;
