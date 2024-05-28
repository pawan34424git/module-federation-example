// rsbuild.config.ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 2000,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:2000",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = "app1";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "app1",
          exposes: {
            "./AppOneCarousel": "./src/appcarousel.tsx",
            "./button": "./src/button.tsx",
          },
          shared: ["react", "react-dom"],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
