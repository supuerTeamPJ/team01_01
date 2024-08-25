import React from "react";
import { 
    Navwrap
  } from '../../../styled/layout';

const Nav = () => {
  return (
    <Navwrap>
      <ul className="depth1">
        <li className="on">
          <a href="https://www.monami.com/index.php;">모나미소개</a>
          <ul className="depth2">
            <li>
              <a href="https://www.monami.com/index.php;">CEO 메시지</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">회사정보</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">회사연혁</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">윤리강령</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">투자정보</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">CI</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">찾아오시는 길</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">안전보건 경영방침</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://www.monami.com/index.php;">모나미제품</a>
          <ul className="depth2">
            <li>
              <a href="https://www.monami.com/index.php;">프리미엄 펜</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">펜·펜슬</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">마카·컬러링</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">노트·사무용품</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">잉크·리필</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">카탈로그</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://www.monami.com/index.php;">NEWS &amp; VIDEO</a>
          <ul className="depth2">
            <li>
              <a href="https://www.monami.com/index.php;">보도자료</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">동영상자료</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://www.monami.com/index.php;">모나미 미술대회</a>
          <ul className="depth2">
            <li>
              <a
                href="https://www.monami.com/index.php;"
                rel="noreferrer"
                target="_blank"
              >
                미술대회 소개
              </a>
            </li>
            <li>
              <a
                href="https://www.monami.com/index.php;"
                rel="noreferrer"
                target="_blank"
              >
                수상작 발표
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://www.monami.com/index.php;">고객지원</a>
          <ul className="depth2">
            <li>
              <a href="https://www.monami.com/index.php;">자주묻는질문</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">문의하기</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://www.monami.com/index.php;">기업 구매 / 개발</a>
          <ul className="depth2">
            <li>
              <a href="https://www.monami.com/index.php;">대량 구매 문의</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">기업 및 단체 구매</a>
            </li>
            <li>
              <a href="https://www.monami.com/index.php;">
                산업용 맞춤 제품개발
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </Navwrap>
  );
};

export default Nav;
