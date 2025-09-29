import { use, useEffect, useState } from "react";
import "./index.scss";

const Notice = () => {
  const [count, setCount] = useState(0);
  const setCountClick = () => {
    console.log("count:", count);
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("useEffect:", count);
  }, [count]);

  return (
    <>
      <h2>这是通知页面</h2>
      <div className="message">count: {count}</div>
      <div>
        <button className="btn" onClick={setCountClick}>
          按钮
        </button>
      </div>
    </>
  );
};

export default Notice;
