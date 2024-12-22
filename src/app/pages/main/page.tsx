"use client";
import "@/app/asset/main.scss";
import MainVisual from "../components/MainVisual";
import Introduce from "../components/Introduce";
import TeamMission from "../components/TeamMission";
import History from "../components/History";
import Corporation from "../components/Corporation";
import RecommendNotice from "../components/RecommendNotice";
import Notice from "../components/Notice";
import TopButton from "@/app/utils/TopButton";

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
