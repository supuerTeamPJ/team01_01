import React, { useState } from "react";
import "./style.css";
import Faq from "./contents/faq";
import Inquiry from "./contents/inquiry";

export default function QaTab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          class="on"
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          자주하는 질문
        </li>
      ),
      tabCont: <Faq />,
    },
    {
      tabTitle: (
        <li
          class="on"
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          문의하기
        </li>
      ),
      tabCont: <Inquiry />,
    },
  ];

  return (
    <div class="pagetabs">
      <ul class="m4">
        {tabContArr.map((section, index) => {
          return (
            <React.Fragment key={index}>{section.tabTitle}</React.Fragment>
          );
        })}
      </ul>
      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
}
