import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <Link href={"/"}>홈</Link>
      <Link href={"/write"}>부동산 리뷰</Link>
    </nav>
  );
};

export default NavBar;
