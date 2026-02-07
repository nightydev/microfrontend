import { CardProducto, ProductoTitulo, ProductoDescripcion, ProductoPrecio } from "./components/CardProducto";
import { BotonComprar } from "./components/BotonComprar";
import { addToCart, Product } from "./utils/cartEvents";

import "./index.css";

const App = () => {
  const productos: Product[] = [
    {
      id: "laptop-premium",
      name: "Laptop Premium",
      description: "Potente laptop con procesador de última generación, 16GB RAM y 512GB SSD. Perfecta para trabajo y entretenimiento.",
      price: 1299,
    },
    {
      id: "smartphone-elite",
      name: "Smartphone Elite",
      description: "Smartphone de última generación con cámara profesional y pantalla OLED. Conectividad 5G incluida.",
      price: 899,
    },
    {
      id: "auriculares-pro",
      name: "Auriculares Pro",
      description: "Auriculares inalámbricos con cancelación de ruido activa y 30 horas de batería. Calidad de sonido premium.",
      price: 299,
    },
  ];

  return (
    <div style={{ padding: "40px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>
        🛍️ Módulo de Productos
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {productos.map((producto) => (
          <CardProducto key={producto.id}>
            <ProductoTitulo>{producto.name}</ProductoTitulo>
            <ProductoDescripcion>{producto.description}</ProductoDescripcion>
            <ProductoPrecio>${producto.price}</ProductoPrecio>
            <BotonComprar onClick={() => addToCart(producto)}>
              Agregar al Carrito
            </BotonComprar>
          </CardProducto>
        ))}
      </div>
    </div>
  );
};

export default App;
