import "./header.scss";
import style from "./head.module.scss";
import Button from "./button";

export default function Header() {
  return (
    <>
      <p className="header">我是header~</p>
      <p className={style.header}>我是module header!</p>
      <Button></Button>
    </>
  );
}
