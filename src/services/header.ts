import { NavItem } from "../components/header/header";

const sections: HTMLElement[] = [
  document.getElementById("home")!,
  document.getElementById("services")!,
  document.getElementById("contact")!,
];
let lastScroll = 0;

export const headerScroll = (header: HTMLElement) => {
  if (scrollY <= 0) {
    header.style.top = "0";
    header.style.backdropFilter = "none";
    header.style.boxShadow = "none";
    header.style.opacity = "1";
    return;
  }

  if (scrollY > lastScroll) {
    // down
    header.style.top = "-60px";
    header.style.backdropFilter = "blur(5px)";
    header.style.boxShadow = "4px 4px 6px #00000020";
    header.style.opacity = "0";
  } else if (scrollY < lastScroll) {
    // up
    header.style.top = "0";
    header.style.opacity = "1";
  }
  lastScroll = scrollY;
};

export const navScroll = (
  setSelectedNavItem: React.Dispatch<React.SetStateAction<NavItem>>
) => {
  for (let i = 0; i < sections.length; i++) {
    const size = sections[i].offsetTop + sections[i].clientHeight - 150;
    if (scrollY < size) {
      switch (sections[i].id) {
        case "home":
          setSelectedNavItem(NavItem.home);
          break;
        case "services":
          setSelectedNavItem(NavItem.services);
          break;
        case "contact":
          setSelectedNavItem(NavItem.contact);
          break;
      }
      return;
    }
  }
};
