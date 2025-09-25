import './index.scss'
import { Dispatch, SetStateAction } from "react";
import { Space } from "antd-mobile";
import { UnorderedListOutline } from "antd-mobile-icons";

interface TopNavProps {
  popupVisible: boolean;
  setPopupVisible: Dispatch<SetStateAction<boolean>>;
}

const TopNav = ({ popupVisible, setPopupVisible }: TopNavProps) => {
  const iconClick = () => {
    console.log("click0", popupVisible);
    setPopupVisible(true);
  };
  return (
    <>
      <Space>
        <div className="icon" onClick={iconClick}>
          <UnorderedListOutline />
        </div>
        {/* <div>|</div> */}
      </Space>
    </>
  );
};

export default TopNav;