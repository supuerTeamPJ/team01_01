import React from "react";
import "../style.css";
import styled from "styled-components";

function Inquiry() {
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

  const SubTit = styled.span`
    color: #c40f39;
  `;

  const InquiryContainer = styled.div`
    border: none;
  `;

  return (
    <>
      <H3>
        MONAMI
        <SubTit> INQUIRY</SubTit>
      </H3>
      <div class="inquiry">
        <div class="bgarea"></div>
        <form
          action=""
          name="request_form"
          method="post"
          encType="multipart/form-data"
        >
          <input type="hidden" name="w" value="a" />
          <div class="contactus">
            <h4>CONTACT US</h4>
            <div class="formarea">
              <div class="fl">
                <div>
                  <div id="select_box">
                    <label for="sel" id="country">
                      문의내용
                    </label>
                    <select name="form_value[]" id="sel" class="form1">
                      <option value="">--선택--</option>
                      <option value="제품문의">제품문의</option>
                      <option value="제안사항">
                        제안사항 (콜라보레이션 포함)
                      </option>
                      <option value="대량구매문의">대량구매문의</option>
                      <option value="산업용제품문의">산업용제품문의</option>
                      <option value="기타문의">기타문의</option>
                    </select>
                  </div>
                </div>
                <div class="ie9_tit">
                  <input
                    type="text"
                    id="form2"
                    name="form_value[]"
                    placeholder="*이름"
                  />
                  <label style={{ display: "block" }} for="form2"></label>
                </div>
                <div class="ie9_tit">
                  <input
                    type="text"
                    id="form3"
                    name="form_value[]"
                    placeholder="*이메일"
                  />
                  <label style={{ display: "block" }}>
                    <span>
                      Google정책으로 인해 Gmail의 경우 답변 회신을 받지 못할
                      수도 있으니, 다른 도메인의 메일로 입력 부탁드립니다.
                    </span>
                  </label>
                </div>
                <div class="ie9_tit">
                  <input
                    type="text"
                    id="form4"
                    name="form_value[]"
                    placeholder="연락처"
                  />
                  <label style={{ display: "block" }}></label>
                </div>
                <div class="ie9_tit">
                  <input
                    type="text"
                    id="form5"
                    name="form_value[]"
                    placeholder="*제목"
                  />
                  <label style={{ display: "block" }}></label>
                </div>
                <div class="ie9_tit">
                  <textarea
                    type="text"
                    id="form6"
                    name="form_value[]"
                    placeholder="*내용"
                  ></textarea>
                  <label
                    id="textareaLabel"
                    style={{ display: "block" }}
                  ></label>
                </div>
                <div>
                  <div class="filebox">
                    <label
                      for="ex_filename"
                      class="ex_filename"
                      id="attach_file"
                    >
                      첨부파일
                    </label>
                    <input
                      type="file"
                      name="file2"
                      id="ex_filename"
                      class="upload-hidden"
                    />
                  </div>
                </div>
              </div>
              <div class="fr">
                <div class="textarea">
                  <div class="tit">개인정보 취급방침</div>
                  <textarea readOnly="readonly">
                    '㈜모나미'는 (이하 '회사'는) 정보주체의 개인정보를
                    중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을
                    준수하고 있습니다. 회사는 개인정보취급방침을 통하여
                    고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로
                    이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고
                    있는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우
                    웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                    ＊ ㈜모나미의 개인정보 처리방침은 다음과 같은 내용을 담고
                    있습니다. 1. 수집하는 개인정보 항목 및 수집방법 회사는 제품
                    문의, 제안사항, 불만사항 접수 등을 위해 아래와 같은
                    개인정보를 수집하고 있습니다. - 필수항목 : 이름, 이메일 -
                    선택항목 : 연락처 (단, 정보주체의 기본적 인권 침해의 우려가
                    있는 민감한 인종 및 민족, 사상 및 신조, 출신지 및 본적지,
                    정치적 성향 및 범죄기록,건강상태 및 성생활 등의 개인정보는
                    수집하지 않습니다.) 또한, 서비스 이용 과정에서 아래와 같은
                    정보들이 생성되어 수집될 수 있습니다. - 개인정보 추가 수집에
                    대해 별도 동의를 받는 경우 - 수집방법 : 홈페이지
                    ’문의하기(Contact Us)’ 서비스를 통한 수집 2. 개인정보 수집
                    및 이용목적 회사는 수집한 개인정보를 다음의 목적을 위해
                    활용합니다. 이용목적 : 질의자가 문의한 답변 전달, 본인의
                    의사표시 사항 처리, 불만사항 처리, 기타 원활한 의사소통 경로
                    확보 (이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.)
                    3. 개인정보의 제공 및 공유 회사는 정보주체들의 개인정보를
                    개인정보의 수집목적 및 이용목적에서 고지한 범위내에서
                    사용하며, 정보주체의 사전 동의 없이는 범위를 초과하여
                    이용하거나 원칙적으로 정보주체의 개인정보를 외부에 공개하지
                    않습니다. 다만, 아래의 경우에는 예외로 합니다. -
                    정보주체들이 사전에 동의한 경우 - 법령의 규정에 의거하거나,
                    수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의
                    요구가 있는 경우 4. 개인정보의 보유 및 이용기간 정보주체
                    개인정보는 원칙적으로, 개인정보의 수집 및 이용목적이 달성된
                    후에는 해당 정보를 지체 없이 파기합니다. 단, ‘회사’ 내부
                    방침 또는 정보주체로부터 개인정보 수집 시 동의 받은 개인정보
                    보유/이용기간, 관련법령의 규정 내에서 개인정보를
                    처리/보유합니다. 일정기간 동안 보존해야 하는 정보에 대해
                    아래와 같은 사유로 인하여 보존하고 있습니다. - 보존항목 :
                    (필수) 이름, 이메일, 제목, 내용 / (선택) 연락처, 첨부파일 -
                    보유근거 : 정보주체 동의 - 보유 및 이용기간 : 3년 5.
                    개인정보의 파기절차 및 방법 회사는 원칙적으로 개인정보수집
                    및 이용목적이 달성된 후에는 해당정보를 지체없이 파기합니다.
                    파기절차 및 방법은 다음과 같습니다. - 파기절차 : 정보주체가
                    서비스 신청, 문의상담 등을 위하여 입력하신 정보는 목적이
                    달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부
                    방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및
                    이용기간 참조) 일정기간 저장된 후 파기되어집니다. : 동
                    개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의
                    다른 목적으로 이용되지 않습니다. - 파기방법 : 전자적
                    파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
                    방법을 사용하여 삭제합니다. : 종이에 출력된 개인정보는
                    분쇄기로 분쇄하거나 소각합니다. 6. 정보주체 및 법정대리인의
                    권리와 그 행사방법 정보주체는 언제든지 등록되어 있는 자신의
                    개인정보를 조회하거나 수정할 수 있으며 삭제를 요청할 수
                    있습니다. 혹은 개인정보보호책임자에게 서면, 전화 또는
                    이메일로 정정을 요청하시면, 본인 확인 절차 후에
                    조치하겠습니다. 정보주체가 개인정보의 오류 등에 대한 정정
                    또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할
                    때까지 당해 개인정보를 이용하거나 제공하지 않습니다. 권리
                    행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을
                    통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙
                    별지 제11호 서식에 따른 위임장을 제출하셔야 합니다. 7.
                    개인정보 자동 수집장치의 설치,운영 및 그 거부에 관한 사항
                    당사는 쿠키를 사용하지 않습니다. 8. 개인정보 보호책임자 및
                    담당부서 안내 회사는 고객의 개인정보를 보호하고 개인정보와
                    관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및
                    개인정보관리책임자를 지정하고 있습니다. - 개인정보담당부서 :
                    부서명 : 마케팅팀 : 전화번호 : 080-022-0153 / 031-216-0153 :
                    이메일 : help2@monami.com - 개인정보보호책임자 : 성명 :
                    신동호 팀장 : 전화번호 : 080-022-0153 : 이메일 :
                    dhshin@monami.com 귀하께서는 회사의 서비스를 이용하시며
                    발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자
                    혹은 담당부서로 신고하실 수 있습니다. 회사는 정보주체들의
                    신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다. 기타
                    개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래
                    기관에 문의하시기 바랍니다. 개인분쟁조정위원회
                    (http://www.1336.or.kr) 정보보호마크인증위원회
                    (http://www.eprivacy.or.kr) 대검찰청 인터넷범죄수사센터
                    (http://icic.sppo.go.kr) 경찰청 사이버테러대응센터
                    (http://www.ctrc.go.kr) 9. 고지의 의무 현 개인정보 처리방침
                    내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터
                    홈페이지의 ‘공지사항’을 통해 고지할 것입니다.
                    개인정보취급방침 시행일자 : 2018년 08월 02일
                  </textarea>
                </div>
                <div class="chkarea">
                  <input type="checkbox" id="agree" />
                  개인정보 수집 및 이용안내에 동의합니다.
                </div>
              </div>
            </div>
            <div class="btn_send">
              <a href="">SEND</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Inquiry;
