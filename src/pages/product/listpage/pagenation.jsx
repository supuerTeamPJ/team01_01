


import React from "react"
import styled from "styled-components"
import {  flexCenter } from "../../../styled/common"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Pagenation = ({currentPage, totalPages,setCurrentPage}) =>{

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }



  return(
    <>
      <PageNationDiv>
        <PreButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}> 
          <FontAwesomeIcon icon={faArrowLeft}  />
        </PreButton>
        {pageNumbers.map(number => (
        <NumButton
          key={number}
          onClick={() => handlePageChange(number)}
          isActive={number === currentPage}
        >
          {number}
        </NumButton>
      ))}
        <NextButton  onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <FontAwesomeIcon icon={faArrowRight} />
        </NextButton>
      </PageNationDiv>
    </>
  )
}

export default Pagenation


const PageNationDiv = styled.div`
  margin-top: 80px;
  ${flexCenter};
  margin-bottom: 200px;
  gap: 0;
`
const PreButton = styled.button`
  width: 38px;
  height: 38px;
  border: 1px solid grey;
  background: transparent;
`
const NumButton = styled.button`
  width: 38px;
  height: 38px;
  border: 1px solid grey;
  background: transparent;
  margin: 0 15px;
`

const NextButton = styled.button`
  width: 38px;
  height: 38px;
  border: 1px solid grey;
  background: transparent;
`