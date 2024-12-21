"use client";
import Image from "next/image";
import "@/app/asset/main.scss";
import FlowImage from "@/app/utils/FlowImage";
import StatisticsList from "@/stories/atoms/StatisticsList";
import HistoryMap from "@/stories/modules/historyMap/HistoryMap";
import GridBox from "@/stories/atoms/GridBox";
import NoticeArticle from "@/stories/atoms/NoticeArticle/NoticeArticle";
import RowNoticeArticle from "@/stories/atoms/NoticeArticle/RowArticle";
import { Button } from "@/stories/atoms/Button";
import Pagination from "@/stories/atoms/pagination/Pagination";

const statistList = [
  { label: "월간 활성 사용자", value: "1,910만" },
  { label: "누적 가입자 수", value: "2,800만" },
  { label: "서비스 수", value: "100개" },
];
const officeList = [
  {
    title: "토스코어",
    introduce: "상식적인 금융 서비스는\n삶을 윤택하게 합니다",
    hiddenText:
      "문자 메시지 보내듯 편하게 송금하고, 모든 자산을 손끝에서 편하게 관리하고, 최고의 사용 경험을 선사하는 디자인 덕분에 행복해지고, 큰 노력 없이 금융과 관련된 고민을 모두 해결하는 것. 토스에서는 누구나 경험할 수 있습니다.",
  },
  {
    title: "토스뱅크",
    introduce: "포용과 혁신의 은행을\n지향합니다",
    hiddenText:
      "토스뱅크 팀의 목표는 두 가지입니다. 하나는 기존 은행의 주고객이었던 직장인 뿐 아니라, 소상공인, 저신용자까지도 부담없이 이용할 수 있는 접근성 높은 은행이 되는 것. 다른 하나는 금융 산업의 축을 공급자 중심에서 사용자 중심으로 완벽하게 옮겨오는 것입니다.",
  },
  {
    title: "토스증권",
    introduce: "투자, 쉽게 시작하고 즐길 수\n있는 문화가 됩니다",
    hiddenText:
      "그동안 투자는 전문적인 공부가 필요한 영역이라는 인식 때문에, 시작하는 것조차 어려웠던 것이 사실입니다. 토스증권이 준비중인 투자 서비스를 통해 어렵게 느껴졌던 투자가 재밌어질거고, 많은 분들의 삶에 '투자 문화'가 중요하게 자리잡을 겁니다.",
  },
  {
    title: "토스인슈어런스",
    introduce: "궁극적인 목표는\n고객이 만족하는 것",
    hiddenText:
      "토스인슈어런스의 목표는 보험 상품을 많이 판매하는 것이 아닙니다. 고객의 위험을 최대한 줄이고, 상황에 꼭 맞는 상품을 추천해 드리는 것, 궁극적으로 '최고의 고객 만족'을 지향합니다. 변함 없던 보험 업계, 이제 정말 바뀌어야 합니다. 토스인슈어런스는 그 흐름을 주도하는 팀입니다.",
  },
  {
    title: "토스페이먼츠",
    introduce: "결제 산업의 새로운 미래를\n제시합니다",
    hiddenText:
      "변화가 더디고 진입 장벽 또한 높았던 결제 산업, 이제 바뀌어야 합니다. 토스페이먼츠는 그동안 어렵고 힘들었던 결제 경험을 혁신하고자 합니다. 소비자들에게 쉽고 편한 서비스 경험을 제공하고, 가맹점들에게는 오직 사업에만 집중할 수 있는 환경을 보장하는 제품을 만들어 냅니다.",
  },
  {
    title: "토스씨엑스",
    introduce: "고객 경험을\n최우선으로 생각합니다",
    hiddenText:
      "토스에게 CS는 Customer Service를 넘어 Customer Satisfaction과 Customer Success를 의미합니다. 이제 한 단계 더 나아간 토스씨엑스(CX)는 고객 경험을 수호하며 미친 만족감을 드릴 것입니다.",
  },
  {
    title: "토스플레이스",
    introduce: "오프라인 결제 시장을\n디지털화하고 자영업자의 성공을 돕습니다",
    hiddenText:
      "자본과 기술의 결핍으로 인해 디지털 세상에서 소외되는 사업자가 없도록 관련 생태계를 구축합니다. 결제 경험을 완성하는 결제 단말기를 기반으로, 자영업자의 삶과 매장 운영을 혁신하는 B2B플랫폼으로 나아갑니다.",
  },
  {
    title: "토스인컴",
    introduce: "개인이 스스로 해결하기\n어려운 세무 영역의 불편을 해소합니다",
    hiddenText: "",
  },
];
const newsList = [
  {
    type: "새소식",
    title: "토스, 3분기 연결 영업수익 5,021억 원",
    date: "2024.11.14",
  },
  {
    type: "새소식",
    title:
      "직장 어린이집의 판을 바꾼다: 아이도 부모도 반한 토스 우리동네 어린이집",
    date: "2024.12.10",
  },
  {
    type: "새소식",
    title: "토스씨엑스, 소비자중심경영(CCM) 인증 획득",
    date: "2024.12.10",
  },
];

const noticeList = [
  {
    type: "새소식",
    title: "토스, ‘머니북’ 수익금 3억 원 금융소외층에 기부",
    subTitle: "경계선지능인, 시니어, 시각장애인 등에 맞춤형 지원",
    date: "2024.11.14",
  },
  {
    type: "새소식",
    title: "토스 유튜브 채널 '머니그라피', 팝업 이벤트 개최",
    subTitle: "12월 6일부터 8일까지 성수동에서 운영",
    date: "2024.11.20",
  },
  {
    type: "새소식",
    title: "토스, 3분기 연결 영업수익 5,021억 원",
    subTitle: "분기 최대 실적 기록",
    date: "2024.11.14",
  },
];

const MainPage = () => {
  return (
    <>
      <main>
        <section className="section01 background">
          <p className="main_visual_title">
            금융, 그 이상의 <br />
            역사를 만들고 있습니다
          </p>
          <div className="down_arrow">
            <Image
              src={"/images/down-arrow.png"}
              width={28}
              height={14}
              alt="downArrow"
            />
          </div>
        </section>
        <section className="section02">
          <div className="in_wrap">
            <p className="title">
              변화를 열망하는 사람들이 모여,
              <br />
              역사에 남을만한 변화를 만듭니다.
            </p>
            <StatisticsList list={statistList} width={"44%"} wrap={true} />
          </div>
          <FlowImage />
        </section>
        <section className="section03">
          <div className="cover"></div>
          <div className="in_wrap  background">
            <div className="team_mission">
              <span className="mission_title">Team Mission</span>
              <p className="mission_text">
                토스팀은 바꾸고 싶은 세상의 모습이 있고 생각만 해도 가슴 뛰는
                목표가 있는 조직입니다. 어렵고, 불편하고, 멀게 느껴지는 금융이
                아닌 누구에게나 쉽고 상식적인 금융을 만드는 것이 토스팀의 존재
                이유입니다.
              </p>
            </div>
          </div>
        </section>
        <section className="section04">
          <div className="in_wrap">
            <p className="title">
              토스팀은 오늘도
              <br />
              위대한 역사를 만들고 있습니다
            </p>
            <HistoryMap />
          </div>
        </section>
        <section className="section05">
          <div className="in_wrap">
            <div className="title_wrap">
              <h4 className="title">토스가 바꿀 금융</h4>
              <p className="sub_title">
                모두를 위한, 새로운 금융을 만들고자 합니다
              </p>
              <div className="contents">
                {officeList.map((item, index) => {
                  return (
                    <GridBox
                      items={item}
                      index={index}
                      key={index}
                      width={458}
                      height={528}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="section06">
          <div className="in_wrap">
            <article>
              {newsList.map((item, index) => {
                return (
                  <NoticeArticle
                    items={item}
                    index={index}
                    key={index}
                    width={530}
                    height={340}
                    radius={16}
                  />
                );
              })}
            </article>
            <div className="text_wrap">
              <h1 className="title">토스의 모든 것</h1>
              <p className="text">
                토스가 일하는 방식이 궁금하신가요?
                <br />
                토스팀에 합류하여,
                <br />그 문화를 같이 만들어나가요
              </p>
              <Button theme="primary" width={116} height={40} fontSize={15}>
                소식 보러가기
              </Button>
            </div>
          </div>
        </section>
        <section className="section07">
          <div className="in_wrap">
            <h3>토스 새소식</h3>
            <article>
              {noticeList.map((item, index) => {
                return (
                  <RowNoticeArticle
                    items={item}
                    index={index}
                    key={index}
                    width={249}
                    height={167}
                    radius={16}
                  />
                );
              })}
            </article>
            <Pagination />
            <Button
              theme="white"
              width={140}
              height={46}
              fontSize={16}
              className="more_notice"
            >
              더 많은 소식 보기
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPage;
