// if (import.meta.hot) {
//   // 接受自身模块的更新
//   import.meta.hot.accept((newModule) => {
//     if (newModule) {
//       console.log("newModule", newModule);
//       newModule.render();
//     }
//   });
// }

export const render = () => {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = `
    <h1>Hello Vite!</h1>
    <p target="_blank">This is hmr test!!!</p>
    `;
};
