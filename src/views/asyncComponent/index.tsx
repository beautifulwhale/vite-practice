import loadable from "@loadable/component";

// 异步加载 AsyncComponentContent 组件
const AsyncComponentContent = loadable(() => import("./asyncCompContent"));

export default AsyncComponentContent;
