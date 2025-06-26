import AppMain from "./components/AppMain/index";
import "./index.scss";
import BottomTabBar from "@/components/BottomTabBar/index";

const layout = () => {
  return (
    <div className="layout">
      {/* <div className="app-main"> */}
        <AppMain />
      {/* </div> */}
      <footer className="bottom-tab-bar">
        <BottomTabBar />
      </footer>
    </div>
  );
};

export default layout;
