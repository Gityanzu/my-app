import "./index.scss";
import { Space, Button } from "antd-mobile";
import { UnorderedListOutline } from "antd-mobile-icons";

const TopNav = () => {
  return (
    <>
      <Space>
        <div className="icon">
          <UnorderedListOutline />
        </div>
        {/* <div>|</div> */}
      </Space>
    </>
  );
};

export default TopNav;
