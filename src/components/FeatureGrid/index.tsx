import "./index.scss";
import { JumboTabs } from "antd-mobile";


const features = [
  { title: "版本资讯", icon: "tabs/版本资讯.webp" },
  { title: "养成计算器", icon: "tabs/养成计算器.webp" },
  { title: "签到奖励", icon: "tabs/签到奖励.gif" },
  { title: "WIKI", icon: "tabs/WIKI.webp" },
  { title: "大地图", icon: "tabs/大地图.webp" },
  { title: "资源简报", icon: "/tabs/资源简报.gif" },
  { title: "数据终端", icon: "/tabs/数据终端.webp" },
  { title: "充值中心", icon: "tabs/充值中心.webp" },
  { title: "游戏下载", icon: "tabs/游戏下载.gif" },
  { title: "海潮回声", icon: "tabs/海潮回声.webp" },
  { title: "创作征集", icon: "tabs/创作征集.webp" },
  { title: "鸣潮周边", icon: "tabs/鸣潮周边.gif" },
  { title: "认证申请", icon: "tabs/认证申请.webp" },
];

export default function FeatureGrid() {
  // let defaultActiveKey = "版本资讯";
  return (
    <div className="feature-grid">
      <div className="tabs">
        {features.map((item, idx) => (
          <div key={idx} className="tab">
            <div className="icon">
              <img src={item.icon} alt="" />
            </div>
            <div className="title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
