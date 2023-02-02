import React from "react";
import NavBar from "@/components/Navbar";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";
import { Inter, Noto_Sans_KR } from "@next/font/google";
import localFont from "@next/font/local";

// 구글 폰트 사용법
const inter = Inter({ subsets: ["latin"] });
// 로컬 폰트 사용법
const pretendards = localFont({
  src: "../public/fonts/Pretendard-Medium.woff2",
});

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className={pretendards.className}>
      <Seo pathname={router.pathname} />
      <NavBar />
      <main> {children}</main>
    </div>
  );
};

export default Layout;
