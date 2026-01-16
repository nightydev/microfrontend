export const mfConfig = {
  name: "app2",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "styled-components": { singleton: true },
  },
  manifest: true,
};
