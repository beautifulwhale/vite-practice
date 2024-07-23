import fs from "fs";
import { Plugin, transformWithEsbuild } from "vite";
import { transform } from "@svgr/core";

export default function vitePluginSvgr(): Plugin {
  return {
    name: "vite-plugin-svgr",
    async load(id) {
      if (id.endsWith(".svg")) {
        try {
          const svgCode = await fs.promises.readFile(id, "utf-8");
          const componentCode = await transform(
            svgCode,
            {},
            { componentName: "ReactComponent" }
          );

          console.log("componentCode", componentCode);

          const result = await transformWithEsbuild(componentCode, id, {
            loader: "jsx"
          });
          console.log("res", result);

          return {
            code: result.code,
            map: result.map
          };
        } catch (error) {
          console.error(`Error transforming ${id}:`, error);
          throw error;
        }
      }
    }
  };
}
