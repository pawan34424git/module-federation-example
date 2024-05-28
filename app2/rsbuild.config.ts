// rsbuild.config.ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 3000,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3000",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = "app2";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "app2",
          remotes: {
            app1: "app1@http://localhost:2000/mf-manifest.json",
          },
          exposes: {
            "./button": "./src/button.tsx",
          },
          shared: ["react", "react-dom"],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
