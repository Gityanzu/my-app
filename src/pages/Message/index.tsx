import { use, useEffect, useState } from "react";
import { Tabs, Badge } from "antd-mobile";
import "./index.scss";
import { Outlet } from "react-router-dom";

import ChatList from "./chatList";
import Notice from "./notice";
const Message = () => {
  const tabList = [
    {
      title: "聊天",
      key: "chat",
      components: <ChatList></ChatList>,
    },
    {
      title: (
        <Badge content="101" style={{ "--right": "-10px", "--top": "8px" }}>
          通知
        </Badge>
      ),
      key: "notice",
      components: <Notice></Notice>,
    },
  ];


  return (
    <>
      <Tabs className="tabs">
        {tabList.map((item) => (
          <Tabs.Tab title={item.title} key={item.key}>
            {item.components}
          </Tabs.Tab>
        ))}
      </Tabs>
    </>
  );
};

export default Message;
