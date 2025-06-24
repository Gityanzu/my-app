import "./index.scss";
import TopNav from "../../components/TopNav";
import SearchBar from "../../components/SearchBar";
import BannerSlider from "../../components/BannerSlider";
import FeatureGrid from "../../components/FeatureGrid";
import TabNav from "../../components/TabNav";
import FeedCard from "../../components/FeedCard";
import BottomTabBar from "../../components/BottomTabBar";
export default function Home() {
  return (
    <div className="min-h-screen pb-16 bg-white">
      <TopNav />
      <SearchBar />
      <BannerSlider />
      <FeatureGrid />
      <TabNav />
      <div className="px-4 space-y-4 mt-4">
        <FeedCard />
        <FeedCard />
      </div>
      <BottomTabBar />
    </div>
  );
}
