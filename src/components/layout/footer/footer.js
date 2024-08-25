import React, { useState } from 'react';
import { FooterContainer, FootTop, FootBottom } from "../../../styled/layout";
import FooterLogoImage from "../../../image/foot_logo.jpg";

const Footer = () => {

  const [isSiteOpen, setSiteOpen] = useState(false);

  const handleSiteToggle = () => {
    setSiteOpen(prevState => !prevState);
  };

  return (
    <FooterContainer>
      <div className="footer">
        <FootTop>
          <div className="foot_top">
            <h1>
              <img src={FooterLogoImage} alt="푸터 모나미 로고" />
            </h1>
            <ul className="fm">
              <li>
                <a href="https://www.monami.com/index.php;">회사소개</a>
              </li>
              <li>
                <a href="https://www.monami.com/index.php;">개인정보처리방침</a>
              </li>
              <li>
                <a href="https://www.monami.com/index.php;">
                  이메일무단수집거부
                </a>
              </li>
            </ul>
          </div>
        </FootTop>
        <FootBottom>
          <div className="foot_btm">
            <div className="info">
              <div className="tit">INFO</div>
              <address>
                ADDRESS : 경기도 용인시 수지구 손곡로 17 <span>l</span>
                TEL : 031-216-0153 <span>l</span>
                FAX : 031-270-5154
              </address>
              <p className="copy">
                COPYRIGHT(C) MONAMI.CO.,LTD. ALL RIGHTS RESERVED.
              </p>
            </div>
            <div className="cc">
              <div className="tit">CUSTOMER CENTER</div>
              <div className="cc_tel">080-022-0153</div>
              <a href="https://www.monami.com/index.php;" className="btn_kakao">
                카카오톡 문의
              </a>
            </div>
            <div className="fam_site"> 
              <div className={`btn_site ${isSiteOpen ? 'on' : ''}`}
                onClick={handleSiteToggle}>
                FAMILY SITE
              </div>
              {isSiteOpen && (
                <ul>
                  <li>
                    <a
                      href="https://brand.naver.com/monami"
                    >
                      모나미몰
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.mon-arte.com"
                    >
                      모나르떼
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brand.naver.com/monami/shoppingstory/detail?id=5000882144&page=1"
                    >
                      모나미 컨셉스토어
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.hangso.co.kr"
                    >
                      주식회사 항소
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://artcontest.monami.com/w/main.do"
                    >
                      모나미 미술대회
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://mpms.monami.com"
                    >
                      모나미 기업서비스
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.monamicosmetics.com/"
                    >
                      모나미코스메틱
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </FootBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer;
