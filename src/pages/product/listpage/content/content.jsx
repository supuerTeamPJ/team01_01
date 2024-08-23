import React from "react";
import Subtab from "./subtab";
import ItemBox from "./itembox";
import Container from "../../../../components/container";
import styled from "styled-components";

const Content = () => {

  // 전달받은 값을 아이템 박스에 전달한다. 


  // - 서브 필터 
  // 상태 하나를 생성한다. 
  // 상태를변경할수있는 셋을 서브 탭으로 보낸다. 

  // 서브탭에서 변경된 상태값을 토대로 값을 선별한다. 
  // 선별된 값을 아이템박스에 보낸다. 
  
  return (
    <>
      <Container>
        <Title>
          product <span>info</span>
        </Title>
        <Subtab />
        <ItemBox />
      </Container>
    </>
  );
};

export default Content;

const Title = styled.h2`
  padding-top: 20px;
  font-size: 38px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  margin: 100px;

  &::after {
    content: "";
    position: absolute;
    top: 700px;
    width: 40px;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 4px;
    background-color: red;
    margin: 0 auto;
    display: block;
  }
`;
