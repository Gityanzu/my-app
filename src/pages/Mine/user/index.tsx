import avatar from "@/assets/avatar.jpg";
import "./index.scss";
import { Button } from "antd-mobile";

const User = ({ count, message, handleSetCount, children }) => {
  const handleClick = () => {
    console.log("clicked");
    handleSetCount();
  };
  return (
    <>
      <div className="user-avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="user-info">
        <div className="user-name">
          彦祖+{count}+{message}+{children}
        </div>
        <div className="user-id">UID: 27274949</div>
        <Button color="warning" fill="solid" size="small" onClick={handleClick}>点一下</Button>
      </div>
    </>
  );
};

export default User;
