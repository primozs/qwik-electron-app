import { resolve } from "node:path";
import { defineConfig, externalizeDepsPlugin, loadEnv } from "electron-vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isDev = env.NODE_ENV === "development";

  return {
    main: {
      plugins: [externalizeDepsPlugin()],
      build: {
        rollupOptions: {
          input: {
            index: resolve(__dirname, "electron/main/index.ts"),
          },
        },
        outDir: "./dist/main",
      },
    },
    preload: {
      plugins: [externalizeDepsPlugin()],
      build: {
        rollupOptions: {
          input: {
            index: resolve(__dirname, "electron/preload/index.ts"),
          },
        },
        outDir: "./dist/preload",
      },
    },
    // build renderer only for development yarn electron:dev
    renderer: isDev
      ? {
          root: ".",
          plugins: [
            qwikCity(),
            qwikVite({
              client: {
                outDir: "dist/renderer",
              },
            }),
            tsconfigPaths(),
          ],
        }
      : undefined,
  };
});
