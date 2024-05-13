import { useState } from "react";
import useThemeHook from "../../hooks/theme.hook";

enum NavItem {
  home,
  services,
  contact,
}

export default function Header() {
  const { theme, toggleTheme } = useThemeHook();
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(NavItem.home);

  return (
    <header className="absolute top-0 left-0 w-full">
      <div className="flex flex-wrap sm:justify-between items-center gap-2 mx-auto max-w-screen-lg px-4 py-2">
        <h2 className="icon-bug_report text-2xl flex-1 sm:flex-none text-wine"></h2>
        <nav className="relative flex gap-2 items-center">
          <button
            onClick={() => toggleTheme()}
            className={`${
              theme == "dark" ? "icon-moon" : "icon-light-up"
            } w-7 h-7 text-lg grid place-items-center sm:hidden`}
          ></button>
          <button
            onClick={() => setActiveMenu(!activeMenu)}
            className={`${
              activeMenu ? "-scale-y-100" : ""
            } transition w-7 h-7 border-none background-none icon-keyboard_arrow_down text-3xl sm:hidden grid place-items-center`}
          ></button>
          <div
            className={`${
              activeMenu ? "h-[136px]" : "h-0"
            } transition-[height] absolute right-0 top-full overflow-hidden sm:overflow-visible sm:relative sm:!h-auto`}
          >
            <div className="w-0 h-0 border-solid border-t-[16px] border-t-transparent border-r-[16px] border-r-neutral-200 dark:border-r-neutral-800 transition ml-auto translate-y-1 sm:hidden"></div>
            <ul className="bg-neutral-200 dark:bg-neutral-800 text-md sm:!bg-transparent sm:flex sm:gap-2 transition-[background] sm:transition-none">
              <li>
                <a
                  onClick={() => setSelectedNavItem(NavItem.home)}
                  className={`${
                    selectedNavItem == NavItem.home ? "text-wine" : ""
                  } h-10 grid items-center px-5 sm:h-auto sm:px-3 tracking-wider`}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => setSelectedNavItem(NavItem.services)}
                  className={`${
                    selectedNavItem == NavItem.services ? "text-wine" : ""
                  } h-10 grid items-center px-5 sm:h-auto sm:px-3 tracking-wider`}
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => setSelectedNavItem(NavItem.contact)}
                  className={`${
                    selectedNavItem == NavItem.contact ? "text-wine" : ""
                  } h-10 grid items-center px-5 sm:h-auto sm:px-3 tracking-wider`}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <button
          onClick={() => toggleTheme()}
          className={`${
            theme == "dark" ? "icon-moon" : "icon-light-up"
          } w-7 h-7 text-lg hidden sm:grid place-items-center`}
        ></button>
      </div>
    </header>
  );
}
