import ReactDOM from "react-dom/client";
import { lazy, Suspense, useState } from "react";
import styled from "styled-components";

import "./index.css";

// Lazy load de los microfrontends
const App1 = lazy(() => import("app1/App"));
const App2 = lazy(() => import("app2/App"));

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const Header = styled.header`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #333;
  margin-right: auto;
`;

const NavButton = styled.button<{ active: boolean }>`
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.active ? '#667eea' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : '#333'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Content = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 24px;
  color: white;
`;

const App = () => {
  const [activeView, setActiveView] = useState<"home" | "productos" | "usuarios">("home");

  return (
    <Container>
      <Header>
        <Nav>
          <Title>🏠 Shell - Arquitectura de Microfrontends</Title>
          <NavButton active={activeView === "home"} onClick={() => setActiveView("home")}>
            Home
          </NavButton>
          <NavButton active={activeView === "productos"} onClick={() => setActiveView("productos")}>
            Productos
          </NavButton>
          <NavButton active={activeView === "usuarios"} onClick={() => setActiveView("usuarios")}>
            Usuarios
          </NavButton>
        </Nav>
      </Header>

      <Content>
        {activeView === "home" && (
          <div style={{ background: "white", padding: "40px", borderRadius: "12px", maxWidth: "800px", margin: "40px auto" }}>
            <h2>Bienvenido a la Arquitectura de Microfrontends</h2>
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#666" }}>
              Esta aplicación demuestra el <strong>aislamiento de estilos</strong> usando <strong>Styled Components</strong> en una arquitectura de microfrontends.
            </p>
            <h3>🎯 Características:</h3>
            <ul style={{ fontSize: "16px", lineHeight: "1.8", color: "#666" }}>
              <li><strong>Microfrontend Productos:</strong> Módulo independiente con componentes estilizados (CardProducto, BotonComprar)</li>
              <li><strong>Microfrontend Usuarios:</strong> Módulo independiente con componentes estilizados (PerfilUsuario, BotonEditar)</li>
              <li><strong>Estilos Encapsulados:</strong> Cada microfrontend tiene sus propios estilos sin conflictos</li>
              <li><strong>Module Federation:</strong> Integración dinámica de microfrontends</li>
            </ul>
            <h3>🔑 Beneficios de Styled Components:</h3>
            <ul style={{ fontSize: "16px", lineHeight: "1.8", color: "#666" }}>
              <li>Generación automática de nombres de clase únicos (hash)</li>
              <li>No hay colisiones de CSS entre microfrontends</li>
              <li>Cada equipo puede trabajar independientemente</li>
              <li>CSS-in-JS con scope local automático</li>
            </ul>
            <p style={{ fontSize: "16px", marginTop: "30px", color: "#667eea", fontWeight: "bold" }}>
              👆 Navega usando los botones superiores para ver los microfrontends en acción
            </p>
          </div>
        )}

        {activeView === "productos" && (
          <Suspense fallback={<LoadingContainer>Cargando Productos...</LoadingContainer>}>
            <App1 />
          </Suspense>
        )}

        {activeView === "usuarios" && (
          <Suspense fallback={<LoadingContainer>Cargando Usuarios...</LoadingContainer>}>
            <App2 />
          </Suspense>
        )}
      </Content>
    </Container>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
