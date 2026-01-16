import { CardProducto, ProductoTitulo, ProductoDescripcion, ProductoPrecio } from "./components/CardProducto";
import { BotonComprar } from "./components/BotonComprar";

import "./index.css";

const App = () => (
  <div style={{ padding: "40px", background: "#f5f5f5", minHeight: "100vh" }}>
    <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>
      🛍️ Módulo de Productos
    </h1>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <CardProducto>
        <ProductoTitulo>Laptop Premium</ProductoTitulo>
        <ProductoDescripcion>
          Potente laptop con procesador de última generación, 16GB RAM y 512GB SSD.
          Perfecta para trabajo y entretenimiento.
        </ProductoDescripcion>
        <ProductoPrecio>$1,299</ProductoPrecio>
        <BotonComprar onClick={() => alert("¡Producto añadido al carrito!")}>
          Comprar Ahora
        </BotonComprar>
      </CardProducto>

      <CardProducto>
        <ProductoTitulo>Smartphone Elite</ProductoTitulo>
        <ProductoDescripcion>
          Smartphone de última generación con cámara profesional y pantalla OLED.
          Conectividad 5G incluida.
        </ProductoDescripcion>
        <ProductoPrecio>$899</ProductoPrecio>
        <BotonComprar onClick={() => alert("¡Producto añadido al carrito!")}>
          Comprar Ahora
        </BotonComprar>
      </CardProducto>

      <CardProducto>
        <ProductoTitulo>Auriculares Pro</ProductoTitulo>
        <ProductoDescripcion>
          Auriculares inalámbricos con cancelación de ruido activa y 30 horas de batería.
          Calidad de sonido premium.
        </ProductoDescripcion>
        <ProductoPrecio>$299</ProductoPrecio>
        <BotonComprar onClick={() => alert("¡Producto añadido al carrito!")}>
          Comprar Ahora
        </BotonComprar>
      </CardProducto>
    </div>
  </div>
);

export default App;
