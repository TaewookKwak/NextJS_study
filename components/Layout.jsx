import React from "react";
import NavBar from "@/components/Navbar";
import { useRouter } from "next/router";
import Seo from "./Seo";

const Layout = ({ chlidren }) => {
  const router = useRouter();

  return (
    <>
      <Seo pathname={router.pathname} />
      <NavBar />
      <div>{chlidren}</div>
    </>
  );
};

export default Layout;
