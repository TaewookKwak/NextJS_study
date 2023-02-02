import { Tiro_Tamil } from "@next/font/google";
import Head from "next/head";
import React from "react";

const Seo = ({ pathname }) => {
  function convertRouteToTitle(pathname) {
    switch (pathname) {
      case "/review":
        return "부동산 리뷰";
      case "/":
        return "홈";
      default:
        break;
    }
  }

  return (
    <Head>
      <title>{convertRouteToTitle(pathname)} | 풀소유</title>
    </Head>
  );
};

export default Seo;
