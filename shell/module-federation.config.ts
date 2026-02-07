export const mfConfig = {
  name: "shell",
  remotes: {
    app1: "app1@http://localhost:8081/mf-manifest.json",
    app2: "app2@http://localhost:8082/mf-manifest.json",
    shopcart: "shopcart@http://localhost:8083/mf-manifest.json",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "styled-components": { singleton: true },
  },
};
