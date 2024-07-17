import { useEffect } from "react";
import Header from "./components/header";

const load = async (params: string) => {
  const modules = import.meta.glob("./locales/*.ts");
  const loadModule = modules[`./locales/${params}.ts`];
  if (loadModule) {
    const module = await loadModule();
    return (module as { data: string }).data;
  } else {
    throw new Error(`Module './locales/${params}.ts' not found`);
  }
};

function App() {
  useEffect(() => {
    load("zh_CN").then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
