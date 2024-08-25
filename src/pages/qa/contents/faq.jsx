import React, { useState } from "react";
import styled from "styled-components";
import backimg from "../../../../src/image/faq_q.png";

const H3 = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 38px;
  font-weight: 600;
  color: #000;
  text-align: center;
  letter-spacing: 2px;
  padding-top: 75px;

  &::after {
    display: block;
    content: "";
    width: 30px;
    height: 4px;
    margin: 5px auto 95px;
    background: #c40f39;
  }
`;

const FAQBox = styled.div`
  border: 1px solid #ddd;
  background: ${(props) =>
    props.isOpen ? "#f8f8f8" : "#fff"}; /* 열릴 때 배경색 변경 */
  padding: 20px 50px 8px 43px;
  margin-bottom: 5px;
  cursor: pointer;
  position: relative;
  transition:  0.3s;

  .question {
    padding-left: 60px;
    height: 43px;
    line-height: 43px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    background: url(${backimg}) no-repeat left top;
  }

  .arr {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    border-top: 2px solid #aaa;
    border-right: 2px solid #aaa;
    transform: ${(props) =>
      props.isOpen
        ? "rotate(225deg)" /* 클릭 시 아래로 향하도록 회전 */
        : "rotate(45deg)"};
    transition: transform 0.3s;
  }

  .answer {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    margin-top: 15px;
    padding-left: 60px;
    font-size: 16px;
    line-height: 1.6;
    color: #666;
  }
`;

const SubTit = styled.span`
  color: #c40f39;
`;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <H3>
        MONAMI
        <SubTit> FAQ</SubTit>
      </H3>
      <div className="faq">
        <FAQBox isOpen={openIndex === 0} onClick={() => toggleFAQ(0)}>
          <div className="question">
            대량 구매 문의?
            <div className="arr" isOpen={openIndex === 0}></div>
          </div>
          <div className="answer">
            <p>
              모나미 제품 대량구매 문의는 모나미 홈페이지 내 고객지원 {">"}{" "}
              문의하기 {">"} 문의내용 {">"} 대량구매문의 카테고리 선택 후
              게시판으로 문의 남겨주시면
              <br />
              담당부서의에서 평일 기준 1-2일 이내로 연락 드리고 있습니다.
              <br />
              <br />
              <span className="dot">
                <a href="http://mpms.monami.com/promotion/" >문의게시판</a>
              </span>
              <a href="http://www.monami.com/customer/inquiry.php?bluk=10">
              </a>
            </p>
          </div>
        </FAQBox>

        <FAQBox isOpen={openIndex === 1} onClick={() => toggleFAQ(1)}>
          <div className="question">
            콜라보레이션 문의?
            <div className="arr" isOpen={openIndex === 1}></div>
          </div>
          <div className="answer">
            <p>
              모나미 제품 콜라보레이션 문의는 모나미 홈페이지 내 고객지원 {">"}{" "}
              문의하기 {">"} 문의내용 {">"} 제안사항(콜라보레이션) 게시판으로
              게시판으로 문의 남겨주시면
              <br />
              담당부서의에서 평일 기준 1-2일 이내로 연락 드리고 있습니다.
              <br />
              <br />
              <span className="dot">
                <a href="http://mpms.monami.com/promotion/">문의게시판</a>
              </span>
              <a href="http://www.monami.com/customer/inquiry.php?bluk=10">
              </a>
            </p>
          </div>
        </FAQBox>

        <FAQBox isOpen={openIndex === 2} onClick={() => toggleFAQ(2)}>
          <div className="question">
            판촉용 기업 맞춤 제품 문의?
            <div className="arr" isOpen={openIndex === 2}></div>
          </div>
          <div className="answer">
            <p>
              기업 맞춤 제작은 모나미 홈페이지 내 기업구매/개발 {">"} 기업 및
              단체 구매 {">"} 기업서비스 홈페이지 내 Contact Us 게시판으로 문의
              남겨주시면
              <br />
              담당부서의에서 평일 기준 1-2일 이내로 연락 드리고 있습니다.
              <br />
              <br />
              <span className="dot">
                <a href="http://mpms.monami.com/promotion/">모나미 기업 서비스 홈페이지</a>
              </span>
              <a href="http://mpms.monami.com/promotion/">
              </a>
            </p>
          </div>
        </FAQBox>

        <FAQBox isOpen={openIndex === 3} onClick={() => toggleFAQ(3)}>
          <div className="question">
            물질안건보건자료 [MSDS], 유해물질 성적서가 필요해요.
            <div className="arr" isOpen={openIndex === 3}></div>
          </div>
          <div className="answer">
            <p>
              안건보건자료 [MSDS], 유해물질 성적서는 이메일로 전달 드리고
              있습니다.
              <br />
              아래의 이메일로 필요하신 성적서명칭, 제품명 기재하여 문의
              바랍니다.
              <br />
              <br />
              <span className="dot">E-MAIL : help2@monami.com</span>
            </p>
          </div>
        </FAQBox>

        <FAQBox isOpen={openIndex === 4} onClick={() => toggleFAQ(4)}>
          <div className="question">
            모나미 만년필 사용 / 세척 방법이 궁금해요.
            <div className="arr" isOpen={openIndex === 4}></div>
          </div>
          <div className="answer">
            <p>
              만년필은 구조 특성 상 닙 세척 후 원활하게 사용 가능합니다. 아래의
              방법으로 닙 세척을 권장드립니다.
              <br />
              <br />
              <span className="dot">닙세척 방법</span>
              1. 컵 또는 종이컵에 미지근한 물을 준비한다.
              <br />
              2. 만년필에서 잉크를 분리한 후 닙을 하방향으로 해서 5-10분정도
              담가준다.
              <br />
              3. 화장지로 감싸 최대한 물기를 제거한 후 잉크를 재 장착한다.
              <br />
              4. 잉크 유도 후 사용한다.
              <br />
              <br />
              <span className="dot">잉크유도 방법</span>
              1. 카트리지, 컨버터는 '딱'소리가 날 때까지 눌러서 끼운다.
              <br />
              2. 티슈나 종이를 깔고 만년필이 잘 나올 수 있도록 흔들어준다.
              (*잉크가 튈 수 있으니 주의)
              <br />
              3. 닙에 새겨진 로고가 위쪽으로 향하게 하여 필기한다.
              <br />
              tip. 닙과 종이의 각도가 40~55도를 유지할 때 잉크가 가장 잘
              흘러내립니다.
              <br />
              <br />
              <span className="dot">153 NEO 만년필 사용법 모나미 유튜브</span>
              <a href="https://youtu.be/74OtTN4tkSs" target="_blank" rel="noopener noreferrer">
              </a>
              <br />
              <br />
              <span className="dot">잉크 유도 방법 모나미 유튜브</span>
              <a href="https://youtu.be/4EPrMLAxq3M" target="_blank" rel="noopener noreferrer">
              </a>
            </p>
          </div>
        </FAQBox>

        <FAQBox isOpen={openIndex === 5} onClick={() => toggleFAQ(5)}>
          <div className="question">
            제조년월이 표시되어 있나요?
            <div className="arr" isOpen={openIndex === 5}></div>
          </div>
          <div className="answer">
            <p>
              제품별로 제조년월 표기부분이 다릅니다.
              <br />
              <br />
              1. 유성볼펜류: 심에 표기
              <br />
              2. 마카류: 타케이스에 표기
            </p>
          </div>
        </FAQBox>

        <FAQBox isOpen={openIndex === 6} onClick={() => toggleFAQ(6)}>
          <div className="question">
            오래 전 구매한 볼펜 필기가 잘 되게 할 수 있는 방법이 있나요?
            <div className="arr" isOpen={openIndex === 6}></div>
          </div>
          <div className="answer">
            <p>
              문구류의 경우 소모품으로 영구적인 사용이 어렵습니다. 시일이 지남에
              따라 잉크의 마름과 분리현상이 있을 수 있습니다.
              <br />
              잉크를 담고 있는 파이프나 필터에서 잉크가 굳어 버리게 되면 재
              사용은 어렵습니다.
              <br />
              뜨거운 물 사용이나 볼을 불에 달구면 제품 손상 및 잉크 유출 위험이
              있습니다.
              <br />
              잉크 재사용에 대해서는 별도 방법이 없습니다.
            </p>
          </div>
        </FAQBox>

        <FAQBox isOpen={openIndex === 7} onClick={() => toggleFAQ(7)}>
          <div className="question">
            볼찌꺼기는 왜 발생 하나요?
            <div className="arr" isOpen={openIndex === 7}></div>
          </div>
          <div className="answer">
            <p>
              굴러가면서 필기가 되는 원리로 볼에 묻어 있는 잉크를 다 사용하지
              못하고 남아 있는 잉크가 재 회전됨에 따라 잉크가 뭉쳐 볼 찌꺼기가
              발생됩니다.
            </p>
          </div>
        </FAQBox>

        <FAQBox isOpen={openIndex === 8} onClick={() => toggleFAQ(8)}>
          <div className="question">
            잉크 지움 / 세척 방법 문의
            <div className="arr" isOpen={openIndex === 8}></div>
          </div>
          <div className="answer">
            <p>
              잉크 오염 발생 시에는 세척 방법이 없습니다.
              <br />
              재질에 따라 흡착이 발생하며, 세척 시 오염 부위가 손상 될 수
              있습니다.
            </p>
          </div>
        </FAQBox>

        <FAQBox isOpen={openIndex === 9} onClick={() => toggleFAQ(9)}>
          <div className="question">
            볼펜이 추운 겨울이 되면 잘 나오지 않는 이유는?
            <div className="arr" isOpen={openIndex === 9}></div>
          </div>
          <div className="answer">
            <p>
              볼펜 잉크가 얼지는 않으나 온도가 낮으면 점도가 높아져 잉크 흐름이
              원활하지 않아 추운 겨울철에는 잘 나오지 않습니다.
            </p>
          </div>
        </FAQBox>

        <FAQBox isOpen={openIndex === 10} onClick={() => toggleFAQ(10)}>
          <div className="question">
            네임펜, 보드마카, 유성매직 필기 시 냄새가 나는데 안전한가요?
            <div className="arr" isOpen={openIndex === 10}></div>
          </div>
          <div className="answer">
            <p>
              네임펜, 유성매직, 보드마카 제품은 KC인증 제품으로 안전에 대한
              인증을 받은 제품입니다.
              <br />
              냄새가 날 경우 환기를 통해서 제거가 가능합니다.
            </p>
          </div>
        </FAQBox>

        <FAQBox isOpen={openIndex === 11} onClick={() => toggleFAQ(11)}>
          <div className="question">
            모나미 회화구류 무독성 제품인가요?
            <div className="arr" isOpen={openIndex === 11}></div>
          </div>
          <div className="answer">
            <p>
              모나미 회화구류는 KC인증 제품으로 안전에 대한 인증을 받았으며
              안전하게 사용 가능합니다.
              <br />※ KC인증번호는 모나미 카달로그에서 제품별로 확인 가능합니다.
              (모나미 홈페이지 내 제품 카달로그 다운 가능)
            </p>
          </div>
        </FAQBox>
      </div>
    </>
  );
}
