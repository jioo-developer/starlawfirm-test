/** @jsxImportSource @emotion/react */
"use client";
import { Style } from "./Style";

const Footer = () => {
  return (
    <footer className="footer" css={Style}>
      <div className="footer-container">
        <div className="footer-column">
          <p>서비스</p>
          <ul>
            <li>공지사항</li>
            <li>자주 묻는 질문</li>
            <li>공동인증서 관리</li>
            <li>계정 일시잠금</li>
            <li>고객센터</li>
            <li>브랜드 리소스센터</li>
            <li>토스의 개인정보 보호</li>
            <li>토스우스카드</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>회사</p>
          <ul>
            <li>회사 소개</li>
            <li>토스페이먼츠</li>
            <li>토스인슈어런스</li>
            <li>토스증권</li>
            <li>토스씨엑스</li>
            <li>토스뱅크</li>
            <li>토스플레이스</li>
            <li>토스모바일</li>
            <li>채용</li>
            <li>기술 블로그</li>
            <li>블로그</li>
            <li>공고</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>문의</p>
          <ul>
            <li>사업 제휴</li>
            <li>토스쇼핑 입점문의</li>
            <li>광고 문의</li>
            <li>인증 사업 문의</li>
            <li>마케팅 · PR</li>
            <li>IR</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>고객센터</p>
          <ul>
            <li>전화: 1599-4905 (24시간 연중무휴)</li>
            <li>이메일(고객전용): support@toss.im</li>
            <li>이메일(외부기관전용): safe@toss.im</li>
            <li>민원 접수</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>㈜비바리퍼블리카</p>
        <p>사업자 등록번호: 120-88-01280 | 대표: 이승건</p>
        <p>서울특별시 강남구 테헤란로 133, 9층 (역삼동, 한국타이어)</p>
      </div>
    </footer>
  );
};

export default Footer;
