import { useEffect } from "react";
import Header from "./components/header";
// import "./locales/zh.CN";

function App() {
  useEffect(() => {
    // const importModule = (m: string) => import(`./locales/${m}.ts`);
    // importModule("zh_CN");
  }, []);
  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
