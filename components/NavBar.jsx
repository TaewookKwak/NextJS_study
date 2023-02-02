import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import NavbarMob from "@/\bcomponents/Navbar/NavbarMob";
import NavbarWeb from "./Navbar/NavbarWeb";
import useIsMobile from "@/hooks/useIsMobile";
const NavBar = () => {
  const isMobile = useIsMobile();
  return <>{isMobile ? <NavbarMob /> : <NavbarWeb />}</>;
};

export default NavBar;
