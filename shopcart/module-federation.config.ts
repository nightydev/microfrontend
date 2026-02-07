export const mfConfig = {
  name: "shopcart",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx",
    "./MiniCart": "./src/MiniCart.ts",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "styled-components": { singleton: true },
  },
  manifest: true,
};
