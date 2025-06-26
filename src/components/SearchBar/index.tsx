import React, { useRef } from "react";
import { Button, SearchBar, Space, Toast } from "antd-mobile";
import { SearchBarRef } from "antd-mobile/es/components/search-bar";
import "./index.scss";

const SearchBarBox = () => {
  const searchRef = useRef<SearchBarRef>(null);

  return (
    <div className="search-bar-box">
        <Space block direction="vertical">
          <SearchBar
            ref={searchRef}
            placeholder="请输入内容"
            showCancelButton
            onSearch={(val) => {
              Toast.show(`你搜索了：${val}`);
            }}
            onFocus={() => {
              console.log("获得焦点");
            }}
            onBlur={() => {
              console.log("失去焦点");
            }}
            onCancel={() => {
              console.log("取消搜索");
            }}
          />
        </Space>
    </div>
  );
};

export default SearchBarBox;
