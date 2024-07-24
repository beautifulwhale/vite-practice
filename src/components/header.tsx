import "./header.scss";
import style from "./head.module.scss";
import Button from "./button";
import ElephantUrl from "@assets/image/elephant.svg";
import { useEffect } from "react";
import girl from "@assets/image/test.webp";
import SvgSprites from "./svgSprites";
// import { debounce } from "lodash-es";

export default function Header() {
  useEffect(() => {
    // 使用 new URL 动态加载图片
    const imgUrl = new URL("@assets/image/scenery.jpg", import.meta.url)
      .pathname;
    const el = document.getElementById("scene") as HTMLImageElement;
    el.src = imgUrl;
  }, []);

  // console.log(
  //   debounce(() => {
  //     console.log("123");
  //   })
  // );
  // console.log("ElephantUrlElephantUrl", ElephantUrl);

  return (
    <>
      <p className="header">我是header~</p>
      <p className={style.header}>我是module header!</p>
      <Button></Button>
      {/* <Elephant /> */}
      <img
        style={{ width: "100px", height: "100px" }}
        src={ElephantUrl}
        alt=""
      />
      <img
        style={{ width: "300px", height: "300px" }}
        id="scene"
        alt="Scenery"
      />
      <img
        style={{ width: "300px", height: "300px" }}
        src={
          new URL(
            "./assets/landing-config.4f9d5425.png",
            import.meta.env.VITE_IMAGE_BASE_URL
          ).href
        }
        alt=""
      />
      <img style={{ width: "300px", height: "400px" }} src={girl} alt="" />
      <SvgSprites></SvgSprites>
    </>
  );
}
