import React from 'react';
import styled from 'styled-components';


const Container = ({children}) =>{
  return(
    <>
      <S.Container>{children}</S.Container>
    </>
  )
}

export default Container;

const S = {}

S.Container = styled.div`
  width: 1400px;
  margin: 0 auto;
`