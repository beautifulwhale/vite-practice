// 虚拟模块插件
import { Plugin, ResolvedConfig } from "vite";

export default function virtualModule(): Plugin {
  // 格式为virtual: xxx
  const virtualAddModuleId = "virtual:add";
  const resolvedAddModuleId = "\0" + virtualAddModuleId;

  const virtualEnvModuleId = "virtual:env";
  const resolvedEnvModuleId = "\0" + virtualEnvModuleId;
  let config: ResolvedConfig | null = null;

  return {
    name: "vite-plugin-virtual-module",
    configResolved(c: ResolvedConfig) {
      config = c;
    },
    resolveId(id) {
      if (id === virtualAddModuleId) {
        return resolvedAddModuleId;
      }
      if (id === virtualEnvModuleId) {
        return resolvedEnvModuleId;
      }
    },
    load(id) {
      if (id === resolvedAddModuleId) {
        return "export default function add(a, b) { return a + b }";
      }
      if (id === resolvedEnvModuleId) {
        return `export default ${JSON.stringify(config!.env)}`;
      }
    }
  };
}
