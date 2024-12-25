import { http, HttpResponse } from "msw";
export const NoticeData = [
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
  {
    type: "새소식",
    title: "토스, 신한은행과 '신한 토스페이 적금 출시",
    subTitle: "토스페이로 결제하고 우대금리 받아가세요",
    date: "2024.12.03",
  },
  {
    type: "새소식",
    title: "토스, 재외국민 인증서 발급 시범 서비스 개시",
    subTitle: "해외에서도 토스인증서 발급 받으세요",
    date: "2024.11.28",
  },
  {
    type: "새소식",
    title: "토스, 안면인식 출국 서비스 ‘스마트패스’ 오픈",
    subTitle: "얼굴입장으로 인천국제공항 출국장·탑승구 통과",
    date: "2024.12.20",
  },
  {
    type: "새소식",
    title: "토스, 데이터보호 준법 자문위원회 출범 2주년",
    subTitle: "고객 데이터 보호를 위한 정책과 논의 강화",
    date: "2024.12.09",
  },
  {
    type: "새소식",
    title: "토스, 재외국민 인증서 발급 시범 서비스 개시",
    subTitle: "해외에서도 토스인증서 발급 받으세요",
    date: "2024.11.28",
  },
  {
    type: "새소식",
    title: "토스, 세계 장애인의 날 맞아 ‘나만의 별자리 찾기’ 이벤트 실시",
    subTitle: "접근성 기능 간접 체험 후 토스페이로 기부까지",
    date: "2024.12.03",
  },
  {
    type: "새소식",
    title: "토스, 디자인 컨퍼런스 '심플리시티24' 개최",
    subTitle:
      "툴즈 프로덕트 디자이너들이 연사로 참여… 11월 24일까지 시청 인증 이벤트 진행",
    date: "2024.11.12",
  },
];

// resolve data

export const handlers = [
  http.get("/NoticeData", ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("params");
    console.log(page);
    const pageSize = 5; // 한 페이지에 보여줄 데이터 수
    const currentPage = parseInt(page || "1", 10); // id가 없으면 기본값 1로 설정
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginationData = NoticeData.slice(startIndex, endIndex);
    return HttpResponse.json({
      data: paginationData,
    });
  }),
];

// api 관련 코드
