import GridBox from "@/stories/atoms/GridBox";

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
    hiddenText:
      "금융이 시작되는 시점인 소득과 관련된 서비스를 제공합니다. 특히 세무는 매일 써야 할 서비스는 아니지만, 금융 생활에서 반드시 마주치게되는 영역입니다. 토스인컴은 누구나 쉽고 정확하게 세금 정산을 할 수 있는 세상을 만들어 갑니다.",
  },
];
const Corporation = () => {
  return (
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
  );
};

export default Corporation;