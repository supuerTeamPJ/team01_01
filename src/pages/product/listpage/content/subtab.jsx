
import React from "react"
import styled from "styled-components";
import {flexCenter } from "../../../../styled/common";

const Subtab = () =>{


  const subtabMenu = ['유성팬','멀티펜','수성펜','형광펜','연필'];


  return(
    <>

    <Wraaper>     {subtabMenu.map((item, index) =>{
        console.log(item);
          return(
                <TabItem>
                  {item}
                </TabItem>
          )
      })}
      </Wraaper>
    </>
  )
}

export default Subtab


const Wraaper = styled.div`
  ${flexCenter}
  width: auto;
`

const TabItem = styled.a`
  width: 130px;
  height: 34px;
  line-height: 34px;
  border-bottom: 1px solid grey;
  color: black;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  margin: 0 10px;
  

`
