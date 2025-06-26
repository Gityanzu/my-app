import "./index.scss";
import TopNav from "../../components/TopNav/index";
import SearchBar from "../../components/SearchBar";
import BannerSlider from "../../components/BannerSlider/index";
import FeatureGrid from "../../components/FeatureGrid";
import TabNav from "../../components/TabNav";
import FeedCard from "../../components/FeedCard";

export default function Home() {
  return (
    <div className="home">
      <div className="bg">
        <div className="top-nav">
          <TopNav />
        </div>
        <div className="search-bar">
          <SearchBar />
          <button className="text-sm">📌 签到</button>
        </div>
        <div className="banner-slider">
          <BannerSlider />
        </div>
      </div>

      <FeatureGrid />
      <TabNav />
      <div className="px-4 space-y-4 mt-4">
        <FeedCard />
        <FeedCard />
      </div>
    </div>
  );
}
