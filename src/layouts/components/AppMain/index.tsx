import { Outlet, Link } from "react-router-dom";
import "./index.scss";

export default function AppMain() {
  return (
    <>
      <main className="app-main">
        <Outlet /> {/* 渲染子页面 */}
      </main>
    </>
  );
}
