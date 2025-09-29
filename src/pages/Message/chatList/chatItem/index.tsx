import "./index.scss";
import { Badge } from "antd-mobile";
import { useNavigate } from "react-router-dom";

const ChatItem = ({ chatName, content, chatInfo }: any) => {
  const navigate = useNavigate();
  const itemHandleClick = () => {
    console.log("clicked", chatInfo);
    // navigate("/chat", {
    //   // search: `?chatName=${chatName}`
    //   state: { chatInfo },
    // });
    navigate({
      pathname: `/chat/${chatInfo.id}`,
      search: `?chatName=${chatName}`,
    })
  };

  return (
    <div className="chat-item" onClick={itemHandleClick}>
      <div className="chat-item-avatar">
        <img src="https://picsum.photos/200/300" alt="avatar" />
      </div>
      <div className="chat-item-content">
        <div className="chat-item-content-title">{chatName}</div>
        <div className="chat-item-content-text">{content}</div>
      </div>
      <div className="chat-item-prompt">
        <div className="chat-item-prompt-time">9-28</div>
        <div className="chat-item-prompt-badge">
          <Badge
            content="99+"
            style={{ "--right": "-10px", "--top": "8px" }}
          ></Badge>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
