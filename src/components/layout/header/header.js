import React, { useState } from 'react';
import {
  HeaderContainer,
  HeadTop,
  Conwrap,
  Links,
  Lang,
  ThisLang,
  Sns,
  TopMenu,
  Gnb,
  Logo,
  Nav,
  Search,
  AllMenu,
} from "../../../styled/layout";
import LogoImage from "../../../image/logo.jpg";
import BtnFbImage from "../../../image/btn_header_sns_01.gif";
import BtnIgImage from "../../../image/btn_header_sns_02.gif";
import BtnYtbImage from "../../../image/btn_header_sns_03.png";
import BtnSearchImage from "../../../image/btn_search.gif";

const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <HeaderContainer id="header">
      <div className="head">
        <HeadTop className="head_top">
          <Conwrap>
            <Links>
              <Lang>
                <ThisLang>
                  <a href="https://www.monami.com/index.php;">KOR</a>
                </ThisLang>
                <ul>
                  <li>
                    <a href="https://www.monami.com/index.php;">ENG</a>
                  </li>
                </ul>
              </Lang>
              <Sns>
                <ul>
                  <li>
                    <a href="https://www.monami.com/index.php;">
                      <img src={BtnFbImage} alt="모나미 페이스북 바로가기" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.monami.com/index.php;">
                      <img src={BtnIgImage} alt="모나미 인스타그램 바로가기" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.monami.com/index.php;">
                      <img src={BtnYtbImage} alt="모나미 유튜브 바로가기" />
                    </a>
                  </li>
                </ul>
              </Sns>
            </Links>
            <TopMenu>
              <ul>
                <li>
                  <a href="https://www.monami.com/index.php;">HOME</a>
                </li>
                <li>
                  <a href="https://www.monami.com/index.php;">SITE MAP</a>
                </li>
                <li>
                  <a href="https://www.monami.com/index.php;">CONTACT US</a>
                </li>
              </ul>
            </TopMenu>
          </Conwrap>
        </HeadTop>

        <Gnb>
          <Conwrap>
            <Logo>
              <a href="https://www.monami.com/index.php;">
                <img src={LogoImage} alt="로고" />
              </a>
            </Logo>
            <Nav>
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
                      <a href="https://www.monami.com/index.php;">
                        찾아오시는 길
                      </a>
                    </li>
                    <li>
                      <a href="https://www.monami.com/index.php;">
                        안전보건 경영방침
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.monami.com/index.php;">모나미제품</a>
                  <ul className="depth2">
                    <li>
                      <a href="https://www.monami.com/index.php;">
                        프리미엄 펜
                      </a>
                    </li>
                    <li>
                      <a href="https://www.monami.com/index.php;">펜·펜슬</a>
                    </li>
                    <li>
                      <a href="https://www.monami.com/index.php;">
                        마카·컬러링
                      </a>
                    </li>
                    <li>
                      <a href="https://www.monami.com/index.php;">
                        노트·사무용품
                      </a>
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
                  <a href="https://www.monami.com/index.php;">
                    NEWS &amp; VIDEO
                  </a>
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
                  <a href="https://www.monami.com/index.php;">
                    모나미 미술대회
                  </a>
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
                      <a href="https://www.monami.com/index.php;">
                        자주묻는질문
                      </a>
                    </li>
                    <li>
                      <a href="https://www.monami.com/index.php;">문의하기</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.monami.com/index.php;">
                    기업 구매 / 개발
                  </a>
                  <ul className="depth2">
                    <li>
                      <a href="https://www.monami.com/index.php;">
                        대량 구매 문의
                      </a>
                    </li>
                    <li>
                      <a href="https://www.monami.com/index.php;">
                        기업 및 단체 구매
                      </a>
                    </li>
                    <li>
                      <a href="https://www.monami.com/index.php;">
                        산업용 맞춤 제품개발
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Nav>
            <Search>
              <div className="nav_search">
                <a href="https://www.monami.com/index.php;">
                  <img src={BtnSearchImage} alt="검색" />
                </a>
              </div>
              <div
                className={`btn_all ${isMenuOpen ? 'openmenu' : ''}`}
                onClick={handleMenuToggle}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Search>
          </Conwrap>
        </Gnb>

        {isMenuOpen && (
          <AllMenu>
            <div className="allmenu_in">
              <div className="menubox">
                <h2>모나미소개</h2>
                <ul>
                  <li><a href="https://www.monami.com/index.php;">CEO 메시지</a></li>
                  <li><a href="https://www.monami.com/index.php;">회사정보</a></li>
                  <li><a href="https://www.monami.com/index.php;">회사연혁</a></li>
                  <li><a href="https://www.monami.com/index.php;">윤리강령</a></li>
                  <li><a href="https://www.monami.com/index.php;">투자정보</a></li>
                  <li><a href="https://www.monami.com/index.php;">CI</a></li>
                  <li><a href="https://www.monami.com/index.php;">찾아오시는 길</a></li>
                  <li><a href="https://www.monami.com/index.php;">안전보건 경영방침</a></li>
                </ul>
              </div>
              <div className="menubox">
                <h2>모나미제품</h2>
                <ul>
                  <li><a href="https://www.monami.com/index.php;">프리미엄 펜</a></li>
                  <li><a href="https://www.monami.com/index.php;">펜·펜슬</a></li>
                  <li><a href="https://www.monami.com/index.php;">마카·컬러링</a></li>
                  <li><a href="https://www.monami.com/index.php;">노트·사무용품</a></li>
                  <li><a href="https://www.monami.com/index.php;">잉크·리필</a></li>
                  <li><a href="https://www.monami.com/index.php;">카탈로그</a></li>
                </ul>
              </div>
              <div className="menubox">
                <h2>NEWS & VIDEO</h2>
                <ul>
                  <li><a href="https://www.monami.com/index.php;">보도자료</a></li>
                  <li><a href="https://www.monami.com/index.php;">동영상자료</a></li>
                </ul>
              </div>
              <div className="menubox">
                <h2>모나미 미술대회</h2>
                <ul>
                  <li><a href="https://www.monami.com/index.php;">미술대회 소개</a></li>
                  <li><a href="https://www.monami.com/index.php;">수상작 발표</a></li>
                </ul>
              </div>
              <div className="menubox">
                <h2>고객지원</h2>
                <ul>
                  <li><a href="https://www.monami.com/index.php;">자주묻는질문</a></li>
                  <li><a href="https://www.monami.com/index.php;">문의하기</a></li>
                </ul>
              </div>
              <div className="menubox">
                <h2><a href="https://www.monami.com/index.php;">기업 구매 / 개발</a></h2>
                <ul>
                  <li><a href="https://www.monami.com/index.php;">대량 구매 문의</a></li>
                  <li><a href="https://www.monami.com/index.php;">기업 및 단체 구매</a></li>
                  <li><a href="https://www.monami.com/index.php;">산업용 맞춤 제품개발</a></li>
                </ul>
              </div>
            </div>
          </AllMenu>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
