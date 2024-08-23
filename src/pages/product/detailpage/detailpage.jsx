
import React from "react"
import styled from "styled-components";
import PageTop from "../listpage/pagetop";
import Container from "../../../components/container";
import ImgDeatil from "./imgDetail";
import InfoDetail from "./infoDetail";

const Detailpage = () =>{
  return(
    <>
      <Wrapper>
        <PageTop/>
          <BgArea></BgArea>
          <Container>
            <Title> product <span>info</span></Title>
            <Divflex>
              <ImgDeatil/>
              <InfoDetail/>
            </Divflex>
          </Container>
          <ButtonWrapper>
            <ListBtn>LIST</ListBtn>
          </ButtonWrapper>
      </Wrapper>
    </>
  )
}

export default Detailpage;


const Wrapper = styled.div`
  padding-top: 150px;
  position: relative;
  overflow: hidden;
  width: 100%;
`

const BgArea = styled.div`
  position: absolute;
  left: 0;
  top: 916px;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #f8f8f7;
  overflow: hidden;
`

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


const Divflex = styled.div`
    display: flex;
    justify-content: center;

`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px ; 
  padding-bottom: 200px;
`;


const ListBtn = styled.button`
  margin: 0 auto;
  width: 143px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  color: white;
  background-color: #c40f39;
`