import { title } from "process";
import "./index.scss";
import { Space, Swiper } from "antd-mobile";

const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
const slideList = [
  {
    id: 1,
    title: "title1",
    content: "content1",
    image: "banner/banner1.webp",
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
    image: "banner/banner2.webp",
  },
  {
    id: 3,
    title: "title3",
    content: "content3",
    image: "banner/banner3.webp",
  },
  {
    id: 4,
    title: "title4",
    content: "content4",
    image: "banner/banner4.webp",
  },
  {
    id: 5,
    title: "title5",
    content: "content5",
    image: "banner/banner5.webp",
  }
]

const BannerSlider = () => {
  const items = slideList.map((item, index) => (
    <Swiper.Item key={index}>
      <div className="swiper-item">
        <img src={item.image} alt="" className="banner-img" />
      </div>
    </Swiper.Item>
  ));

  return (
    <>
      <Swiper
        // loop
        // autoplay
        trackOffset={6}
        slideSize={88}
        indicator={false}
        stuckAtBoundary={true}
        style={{
          "--border-radius": "8px",
        }}
        defaultIndex={0}
      >
        {items}
      </Swiper>
    </>
  );
};
export default BannerSlider;
