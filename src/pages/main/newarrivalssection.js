import React from "react";
import { 
  NewArrival,
  MainConwrap
} from "../../styled/main";

const NewArrivalsSection = () => {
  return (
    <NewArrival>
      <MainConwrap>
        <div className="tit">
          <h2>
            NEW
            <br />
            ARRIVALS
          </h2>
          <p>가장 먼저 만나는 설레는 기다림</p>
        </div>
        <div className="toparea">
          <div className="box new1">
            <a href="http://www.monami.com/product/product_view.php?ccode=005002&amp;idx=188">
              <img
                src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1699945409grwui60w6u.jpg"
                alt="FX ZETA C3"
                width="392"
                height="205"
              />
              <div className="ondiv">
                <div className="align">
                  <div className="cate">PEN</div>
                  <div className="name">FX ZETA C3</div>
                  <div className="plus">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="box new2">
            <a href="http://www.monami.com/product/product_view.php?ccode=001005&amp;idx=186">
              <img
                src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_169994521784nzg4whv7.jpg"
                alt="지퀀스"
                width="786"
                height="360"
              />
              <div className="ondiv">
                <div className="align">
                  <div className="cate">NOTE</div>
                  <div className="name">지퀀스</div>
                  <div className="plus">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="btmarea">
          <div className="box new3">
            <a href="http://www.monami.com/product/product_view.php?ccode=005&amp;idx=248">
              <img
                src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1715318030bhfwnjum09.jpg"
                alt="프러스펜3000프라임"
                width="392"
                height="292"
              />
              <div className="ondiv">
                <div className="align">
                  <div className="cate">PREMIUM PEN</div>
                  <div className="name">프러스펜3000프라임</div>
                  <div className="plus">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="box new4">
            <a href="http://www.monami.com/product/product_view.php?ccode=005&amp;idx=204">
              <img
                src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1681087061mb8i5l6zdx.jpg"
                alt="153 아이디 만년필"
                width="450"
                height="439"
              />
              <div className="ondiv">
                <div className="align">
                  <div className="cate">FOUNTAIN PEN</div>
                  <div className="name">153 아이디 만년필</div>
                  <div className="plus">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="box new5">
            <a href="http://www.monami.com/product/product_view.php?ccode=003&amp;idx=168">
              <img
                src="https://dfrkkcv2hg1jc.cloudfront.net/data/main/file1_1715319042z7nuju2l3p.jpg"
                alt="프러스펜 3000"
                width="314"
                height="292"
              />
              <div className="ondiv">
                <div className="align">
                  <div className="cate">WATER-BASED MARKER</div>
                  <div className="name">프러스펜 3000</div>
                  <div className="plus">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </MainConwrap>
    </NewArrival>
  );
};

export default NewArrivalsSection;
