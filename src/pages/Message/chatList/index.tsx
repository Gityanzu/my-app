import { useEffect, useState } from "react";
import "./index.scss";
import ChatItem from "./chatItem";

const ChatList = () => {
  let [chatList, setChatList] = useState([]);

  chatList = [
    { id: "11", name: "张三1", content: "这是张三1的聊天内容" },
    { id: "22", name: "张三2", content: "这是张三2的聊天内容" },
    { id: "33", name: "张三3", content: "这是张三3的聊天内容" },
    { id: "44", name: "张三4", content: "这是张三4的聊天内容" },
    { id: "55", name: "张三5", content: "这是张三5的聊天内容" },
  ];


  return (
    <>
      <div className="chat-list">
        {chatList.map((item, index) => (
          <ChatItem
            key={item.id}
            chatInfo={item}
            chatName={item.name}
            content={item.content}
          ></ChatItem>
        ))}
      </div>
    </>
  );
};

export default ChatList;
