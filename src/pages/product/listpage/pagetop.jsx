import React from "react";
import styled from "styled-components";
import backimg from  '../../../image/page_visual_01.jpg'

const PageTop = () => {
  return (
    <>
        <Div>
          <Title>모나미 제품</Title>
          <SubTitle>모나미는 당신의 행복한 기록과 함께합니다. </SubTitle>
        </Div>
    </>
  );
};

export default PageTop;

const Title = styled.h1`
  color: white;
  font-size: 34px;
  font-weight: 800;
  padding-top: 120px;
  position: relative;

  &::after{
      content: '';
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
