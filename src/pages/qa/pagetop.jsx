import React from "react";
import styled from "styled-components";
import backimg from "../../../src/image/page_visual4.jpg";

const PageTop = () => {
  return (
    <>
      <Div>
        <Title>고객지원</Title>
        <SubTitle>모나미는 언제가 소중한 의견에 귀 기울이겠습니다.</SubTitle>
      </Div>
    </>
  );
};

export default PageTop;

const Title = styled.h2`
  color: white;
  font-size: 34px;
  font-weight: 800;
  padding-top: 120px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 175px;
    width: 40px;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 4px;
    background-color: red;
    margin: 0 auto;
    display: block;
  }
`;

const SubTitle = styled.p`
  color: white;
  font-size: 16px;
  padding-top: 40px;
`;

const Div = styled.div`
  width: 100%;
  height: 342px;
  background-position: center;
  background-size: cover;
  background-image: url(${backimg});
  text-align: center;
`;
