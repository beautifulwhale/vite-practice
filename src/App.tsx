import React, { useEffect, useState } from "react";
import Header from "./components/header";
import loadable from "@loadable/component";
// import MyTable from "./components/Table";
import VirtualPluginTest from "./components/virtualPluginTest";
import AsyncComponent from "./views/asyncComponent/index";

// const load = async (params: string) => {
//   const modules = import.meta.glob("./locales/*.ts");
//   const loadModule = modules[`./locales/${params}.ts`];
//   if (loadModule) {
//     const module = await loadModule();
//     return (module as { data: string }).data;
//   } else {
//     throw new Error(`Module './locales/${params}.ts' not found`);
//   }
// };

const LoadableComponent = loadable(() => import("./components/testLoadable"), {
  fallback: <div>Loading...</div>
});

function App() {
  const [loadComponent, setLoadComponent] = useState(false);

  useEffect(() => {
    // TOFIX
    // load("zh_CN").then((data) => {
    //   console.log(data);
    // });
  }, []);
  return (
    <>
      <Header></Header>
      <LoadableComponent></LoadableComponent>
      <VirtualPluginTest></VirtualPluginTest>
      <button onClick={() => setLoadComponent(true)}>
        Load Async Component
      </button>
      {loadComponent && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <AsyncComponent />
        </React.Suspense>
      )}
      {/* <MyTable></MyTable> */}
    </>
  );
}

export default App;
