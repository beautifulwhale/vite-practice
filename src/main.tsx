import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:svg-icons-register";
import App from "./App.tsx";
// test HMR
import { render } from "./views/render.tsx";
import { initState } from "./views/state.tsx";

render();
initState();

// if (import.meta.hot) {
//   // 接受子模块的更新
//   import.meta.hot.accept("./views/render.tsx", (newModule) => {
//     if (newModule) {
//       console.log("newModule", newModule);
//       newModule.render();
//     }
//   });
// }

if (import.meta.hot) {
  // 接受多个子模块的更新
  import.meta.hot.accept(
    ["./views/render.tsx", "./views/state.tsx"],
    ([newRenderModule, newStateModule]) => {
      console.log(
        "newRenderModule",
        newRenderModule,
        "newStateModule",
        newStateModule
      );

      if (newRenderModule) {
        newRenderModule.render();
      }
      if (newStateModule) {
        newStateModule.initState();
      }
    }
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
