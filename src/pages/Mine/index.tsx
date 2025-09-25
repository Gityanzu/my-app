import "./index.scss";
import {
  ScanningOutline,
  SetOutline,
  UnorderedListOutline,
} from "antd-mobile-icons";

import User from "./user";

const Mine = () => {
  const [info, setInfo] = useState<object>({
    name: "彦祖",
    age: 18,
    sex: "男",
  });
  const [message, setMessage] = useState<string>("你好");
  let [count, setCount] = useState<number>(0);

  const handleSetCount = () => {
    setCount(++count);
  };

  const handleSetMessage = () => {
    const newMessage = "hello world";
    setMessage(newMessage);
  };

  const handleSetInfo = () => {
    const newInfo = { ...info, name: "于晏", age: count };
    setInfo(newInfo);
  };

  useEffect(() => {
    // let a = `点击了${count}次${message}`
    // setMessage(a);
    console.log("count", count, message, info);
  }, [count, message, info]);

  return (
    <>
      <div className="mine">
        <div className="mine-header">
          <div className="mine-header-left">
            <ScanningOutline onClick={handleSetInfo} />
          </div>
          <div className="mine-header-right">
            <SetOutline onClick={handleSetMessage} />
            <UnorderedListOutline onClick={handleSetCount} />
          </div>
        </div>
        <div className="mine-user">
          <User count={count} message={message} handleSetCount={handleSetCount}>6666</User>
        </div>
      </div>
    </>
  );
};

export default Mine;
