import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div>로고 위치</div>
      <Link href={"/"}>홈</Link>
      <Link href={"/write"}>부동산 리뷰</Link>
    </nav>
  );
};

export default NavBar;
