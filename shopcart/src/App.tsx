import ReactDOM from "react-dom/client";
import { ShoppingCart } from "./components/ShoppingCart";
import "./index.css";

const App = () => (
  <div style={{ padding: "40px", background: "#f5f5f5", minHeight: "100vh" }}>
    <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>
      🛒 Carrito de Compras
    </h1>
    <ShoppingCart />
  </div>
);

export default App;

// Solo para desarrollo standalone
if (process.env.NODE_ENV === "development") {
  const rootElement = document.getElementById("app");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  }
}
