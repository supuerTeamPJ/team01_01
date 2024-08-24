import React from "react";
import Subtab from "./subtab";
import ItemBox from "./itembox";
import Container from "../../../../components/container";
import styled from "styled-components";
import {  flexAlignCenter } from "../../../../styled/common";

const Content = ({filterProduct, setfilterProduct, setCategory, selectSub,setSelctSub}) => {






  
  return (
    <>
      <Container>
        <Title>
          product <span>info</span>
        </Title>
        <Subtab filterProduct={filterProduct} setCategory={setCategory} />
        <FlexBox>
        {filterProduct.map((item) => <ItemBox item = {item} />)}
        </FlexBox>
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

const FlexBox = styled.div`
  flex-wrap: wrap;
  gap: 10px;
  ${flexAlignCenter}
`