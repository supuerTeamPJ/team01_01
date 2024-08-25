import React from "react";
import PageTop from "./pagetop";
import styled from "styled-components";
import "./style.css";
import QaTab from "./qatab";

const Customer = () => {
  return (
    <>
      <Wrapper>
        <PageTop />
        <QaTab />
      </Wrapper>
    </>
  );
};

export default Customer;

const Wrapper = styled.div`
  padding-top: 150px;
`;
