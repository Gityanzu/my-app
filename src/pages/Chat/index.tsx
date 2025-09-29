import "./index.scss";
import { NavBar, Space, Toast } from "antd-mobile";
import { CloseOutline, MoreOutline, SearchOutline } from "antd-mobile-icons";
import {
  useNavigate,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
const Chat = () => {
  const navigate = useNavigate();
  const routeParams = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { chatId } = routeParams;
  const chatName = searchParams.get("chatName");
  console.log("12313");
  console.log("routeParams:", chatId, chatName);

  useEffect(() => {
    console.log("Chat 组件 mounted"); // 组件挂载时打印
    return () => {
      console.log("Chat 组件 unmounted"); // 组件卸载时打印
    };
  }, []);

  // 左侧内容
  const left = (
    <div style={{ fontSize: 20 }}>
      <Space style={{ "--gap": "16px" }}>名字</Space>
    </div>
  );

  // 中间内容
  const middle = (
    <div style={{ fontSize: 20 }}>
      <Space style={{ "--gap": "16px" }}>{chatName}</Space>
    </div>
  );

  // 右侧内容
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" }}>
        <MoreOutline />
      </Space>
    </div>
  );

  const back = () => {
    Toast.show({
      content: "点击了返回区域",
      duration: 1000,
    });
    navigate(-1);
  };

  return (
    <>
      <div className="chat">
        <NavBar right={right} onBack={back}>
          {middle}
        </NavBar>
        <div className="chat-content">
          <div className="chat-item">
            <div className="chat-item-avatar">
              <img src="https://picsum.photos/200/300" alt="avatar" />
            </div>
            <div className="chat-item-content"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
