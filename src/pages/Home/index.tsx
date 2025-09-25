import { useState } from "react";
import "./index.scss";
import TopNav from "../../components/TopNav/index";
import SearchBar from "../../components/SearchBar";
import BannerSlider from "../../components/BannerSlider/index";
import FeatureGrid from "../../components/FeatureGrid";
import TabNav from "../../components/TabNav";
import FeedCard from "../../components/FeedCard";
import { Popup } from "antd-mobile";

export default function Home() {
  const mockContent = "asdfgdsdfad";
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <div className="home">
      <div className="bg">
        <div className="top-nav">
          <TopNav popupVisible={popupVisible} setPopupVisible={setPopupVisible} />
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
      <div className="popup">
        <Popup
          visible={popupVisible}
          onMaskClick={() => {
            setPopupVisible(false);
          }}
          position="left"
          bodyStyle={{ width: "60vw" }}
        >
          {mockContent}
        </Popup>
      </div>
    </div>
  );
}
