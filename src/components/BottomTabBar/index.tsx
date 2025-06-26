// import React, { useState } from "react";
import'./index.scss';
import {
  Route,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
  Link,
} from "react-router-dom";
import { Badge, TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
const BottomTabBar = () => {
  const tabs = [
    {
      key: "/home",
      path: "/home",
      title: "首页",
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: "/todo",
      path: "/todo",
      title: "待办",
      icon: <UnorderedListOutline />,
      badge: "5",
    },
    {
      key: "/message",
      path: "/message",
      title: "消息",
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
      badge: "99+",
    },
    {
      key: "/mine",
      path: "/mine",
      title: "我的",
      icon: <UserOutline />,
    },
  ];

  const history = useNavigate();
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const activeKey =
    tabs.find((tab) => pathname.startsWith(tab.key))?.key || "/home";

  // const setRouteActive = (value: string) => {
  //   history(`/${value}`);
  //   setActiveKey(value)
  //   console.log(value, activeKey);
  // };

  // const [activeKey, setActiveKey] = useState("home");

  return (
    <>
      <TabBar
        // safeArea
        activeKey={activeKey}
        onChange={(key) => navigate(key)}
      >
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
          />
        ))}
      </TabBar>
    </>
  );
};

export default BottomTabBar;
