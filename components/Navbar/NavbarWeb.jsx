import Link from "next/link";
import React from "react";
import { BsList } from "react-icons/bs";
import styled from "styled-components";

const NavbarWeb = () => {
  return (
    <>
      <NavContainer
        style={{
          display: "flex",
        }}
      >
        <Logo_LinkWrapper>
          {/* 로고 */}
          <LogoContainer>
            <h1>풀소유</h1>
          </LogoContainer>
          {/* 링크 */}
          <LinkContainer>
            <Link href={"/"}>홈</Link>
            <Link href={"/review"}>부동산 리뷰</Link>
          </LinkContainer>
        </Logo_LinkWrapper>

        <OthersContainer>
          {/* 글쓰기 + 로그인 */}
          <span>글쓰기</span>
          <span>로그인</span>
        </OthersContainer>
      </NavContainer>
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

const Logo_LinkWrapper = styled.div`
  display: flex;
`;

const LogoContainer = styled.div`
  margin-right: 12px;

  h1 {
    font-size: 32px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 24px;
    margin-right: 24px;
  }
`;

const OthersContainer = styled.div`
  span {
    margin-right: 12px;
    cursor: pointer;
  }
`;

export default NavbarWeb;
