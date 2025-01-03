"use client";
import "@/app/asset/main.scss";
import MainVisual from "./components/MainVisual";
import Introduce from "./components/Introduce";
import TeamMission from "./components/TeamMission";
import History from "./components/History";
import Corporation from "./components/Corporation";
import RecommendNotice from "./components/RecommendNotice";
import Notice from "./components/Notice";
import TopButton from "@/app/utils/TopButton";

// main이라는 부모 컴포넌트에 useclient를 써서 main 내부 컴포넌트에 client 처리를 한 이유는 메인 내 서버 컴포넌트 처리 할 게 없기 때문

const MainPage = () => {
  return (
    <main>
      <MainVisual />
      <Introduce />
      <TeamMission />
      <History />
      <Corporation />
      <RecommendNotice />
      <Notice />
      <TopButton />
    </main>
  );
};

export default MainPage;
