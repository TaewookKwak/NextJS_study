import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import styled from "styled-components";

const NavbarMob = () => {
  const [isActive, setActive] = useState(false);
  const onToggleMenu = () => {
    setActive(!isActive);
  };
  return (
    <>
      <NavContainer>
        {/* 로고 */}
        <LogoContainer>
          <h1>풀소유</h1>
        </LogoContainer>
        {/* 글쓰기 + 로그인 */}
        <OthersContainer>
          <span>글쓰기</span>
          <span>로그인</span>
          <span>
            <BsList size="20" onClick={onToggleMenu} />
          </span>
        </OthersContainer>
      </NavContainer>
      {/* 링크 */}
      <AnimatePresence mode="popLayout">
        {isActive ? (
          <LinkContainer
            key="Test"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <Link href={"/"}>홈</Link>
            <Link href={"/review"}>부동산 리뷰</Link>
          </LinkContainer>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  border-bottom: 2px solid grey;
`;

const LogoContainer = styled.div`
  margin-right: 12px;

  h1 {
    font-size: 32px;
  }
`;

const LinkContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-bottom: 2px solid grey;
  a {
    font-size: 20px;
    margin: 12px 0px;
    width: 100%;
    text-align: center;
  }
`;

const OthersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 12px;
    cursor: pointer;
  }
`;
export default NavbarMob;
