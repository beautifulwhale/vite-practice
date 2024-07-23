import { Plugin } from "vite";
import chalk from "chalk";
import ProgressBar from "progress";

export default function progressPlugin(): Plugin {
  let bar: ProgressBar | null = null;
  let startTime: number;
  let fileCount = 0;
  let transformedFiles = 0;

  return {
    name: "vite-plugin-progress",
    buildStart() {
      startTime = Date.now();
      bar = new ProgressBar("[:bar] :percent", {
        total: 100,
        complete: chalk.green("="),
        incomplete: " ",
        width: 50
      });
      transformedFiles = 0;
    },
    transform(code) {
      transformedFiles += 1;
      if (bar && fileCount) {
        const percent = transformedFiles / fileCount;
        bar.update(percent);
      }
      return code;
    },
    configResolved(config) {
      fileCount = config.plugins.length;
    },
    buildEnd() {
      if (bar) {
        bar.update(1); // Ensure progress bar reaches 100%
        const endTime = Date.now();
        const buildTime = ((endTime - startTime) / 1000).toFixed(2);
        console.log(
          chalk.green(`\nBuild completed successfully in ${buildTime} seconds!`)
        );
      }
    }
  };
}
