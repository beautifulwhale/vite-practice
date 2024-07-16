import { useState, useEffect } from "react";
import SvgIcon from "./svgIcon";

export default function SvgSprites() {
  const icons = import.meta.glob("@assets/icons/logo*.svg");

  const [iconUrls, setIconUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const urls = await Promise.all(
        Object.values(icons).map(async (iconPromise) => {
          const module = await iconPromise();
          return (module as { default: string }).default;
        })
      );

      setIconUrls(urls);
    };

    fetchUrls();
  }, [icons]);

  return (
    <>
      {iconUrls.map((iconUrl, index) => {
        const fileName = iconUrl.split("/").pop()!;
        const [svgName] = fileName.split(".");
        return <SvgIcon key={index} name={svgName}></SvgIcon>;
      })}
    </>
  );
}
