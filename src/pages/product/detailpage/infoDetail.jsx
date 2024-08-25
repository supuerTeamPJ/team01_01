
import React from "react"
import styled from "styled-components";
import { flexCenter } from "../../../styled/common";

const InfoDetail = ({productDetail}) =>{

  const {name, content, subcategory} = productDetail || {}
  
  return(
    <>
      <Wrapper>
        <Title>
          {name}
          <span>{subcategory}</span>
        </Title>
        <InfoList>
          <Keyfeatures>
          <span>KEY FEATURES</span>
          {content}
          </Keyfeatures>
          <Ink>
            <span>ink color</span>
            <ColorBox>black</ColorBox>
          </Ink>
          <BodyColor>
            <span>body color</span>
            <div>
              <ColorBox>실버</ColorBox>
              <ColorBox>그레이</ColorBox>
            </div>
          </BodyColor>
          <PointSize>
            <span>point size</span> 0.7mm</PointSize>
          <Down>
            <span>download</span>
            <Btn>재품상세</Btn>
            <Btn>이미지</Btn>
          </Down>
          <Buy>buy now </Buy>
        </InfoList>
      </Wrapper>
    </>
  )
}

export default InfoDetail;

const  Wrapper = styled.div`
  width: 870px;
  margin: 40px 40px;
`
const  Title = styled.div`
  font-size: 32px;
  color: #333;
  margin: 0px 0 40px;

  &::after{
    content: '';
    width: 30px;
    height: 3px;
    display: block;
    margin:  10px 0;
    background-color: #c40f39;
  }

  span{
    font-size: 19px;
    color: #666;
    display: block;
    margin-top: 25px;
  }
  
`

const InfoList = styled.div`
  position: relative;
  padding-top : 25px;


  &::before{
    content: '';
    display: block;
    width: 10000px;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    left: -80px;
    top: 0;
  }
`

const  Keyfeatures = styled.div`
  margin-bottom: 25px;
  font-size: 14px;
  line-height: 24px;
  color: #666;

  span{
    padding-left: 13px;
    font-size: 16px;
    color: #c40f39;
    font-weight: 500;
    margin-bottom: 7px;
    position: relative;
    display: block;

    &::before{
      content: '';
      width: 8px;
      height: 8px;
      background-color: #c40f39;
      display: inline-block;
      position: absolute;
      top: 8px;
      left: 0;
    }
  }
`
const  ColorBox = styled.div`
  width: 42px;
  height: 42px;
  background-color: black;
  ${flexCenter};
  color: white;
  font-size: 14px;
  margin-right: 10px;
  margin-top: 8px ;
`



const  Ink = styled.div`
    position: relative;
    margin-bottom: 25px;

    span{
    padding-left: 13px;
    font-size: 16px;
    color: #c40f39;
    font-weight: 500;
    margin-bottom: 7px;
    position: relative;
    display: block;
    text-transform: uppercase;

    &::before{
      content: '';
      width: 8px;
      height: 8px;
      background-color: #c40f39;
      display: inline-block;
      position: absolute;
      top: 6px;
      left: 0;
    }
  }
`

const  BodyColor = styled.div`
  position: relative;
  margin-bottom: 25px;

  span{
    padding-left: 13px;
    font-size: 16px;
    color: #c40f39;
    font-weight: 500;
    margin-bottom: 7px;
    position: relative;
    display: block;
    text-transform: uppercase;

    &::before{
      content: '';
      width: 8px;
      height: 8px;
      background-color: #c40f39;
      display: inline-block;
      position: absolute;
      top: 6px;
      left: 0;
    }
  }

  div{
    display: flex;
  }

`
const  PointSize = styled.div`
    position: relative;
    margin-bottom: 25px;
    color:  #666;

    span{
    padding-left: 13px;
    font-size: 16px;
    color: #c40f39;
    font-weight: 500;
    margin-bottom: 7px;
    position: relative;
    display: block;
    text-transform: uppercase;

    &::before{
      content: '';
      width: 8px;
      height: 8px;
      background-color: #c40f39;
      display: inline-block;
      position: absolute;
      top: 6px;
      left: 0;
    }
  }
`
const  Down = styled.div`
  position: relative;
  margin-bottom: 25px;

  span{
    padding-left: 13px;
    font-size: 16px;
    color: #c40f39;
    font-weight: 500;
    margin-bottom: 7px;
    position: relative;
    display: block;
    text-transform: uppercase;

    &::before{
      content: '';
      width: 8px;
      height: 8px;
      background-color: #c40f39;
      display: inline-block;
      position: absolute;
      top: 6px;
      left: 0;
    }
  }
`
const  Btn = styled.div`
  width: 146px;
  height: 38px;
  text-align: center;
  line-height: 38px;
  background-color: #f4f4f4;
  color: #7c7c7c;
  border: 1px solid #ddd;
  display: inline-block;
  margin-right: 5px;
`

const Buy = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  color: #7d7d7d;
`