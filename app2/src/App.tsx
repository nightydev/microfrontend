import { PerfilUsuario, UsuarioAvatar, UsuarioNombre, UsuarioEmail, UsuarioRol } from "./components/PerfilUsuario";
import { BotonEditar } from "./components/BotonEditar";

import "./index.css";

const App = () => (
  <div style={{ padding: "40px", background: "#f5f5f5", minHeight: "100vh" }}>
    <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>
      👥 Módulo de Usuarios
    </h1>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <PerfilUsuario>
        <UsuarioAvatar>👨‍💼</UsuarioAvatar>
        <UsuarioNombre>Juan Pérez</UsuarioNombre>
        <UsuarioEmail>juan.perez@empresa.com</UsuarioEmail>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <UsuarioRol>Administrador</UsuarioRol>
        </div>
        <BotonEditar onClick={() => alert("Editando perfil de Juan Pérez")}>
          Editar Perfil
        </BotonEditar>
      </PerfilUsuario>

      <PerfilUsuario>
        <UsuarioAvatar>👩‍💻</UsuarioAvatar>
        <UsuarioNombre>María García</UsuarioNombre>
        <UsuarioEmail>maria.garcia@empresa.com</UsuarioEmail>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <UsuarioRol>Desarrollador</UsuarioRol>
        </div>
        <BotonEditar onClick={() => alert("Editando perfil de María García")}>
          Editar Perfil
        </BotonEditar>
      </PerfilUsuario>

      <PerfilUsuario>
        <UsuarioAvatar>👨‍🎨</UsuarioAvatar>
        <UsuarioNombre>Carlos López</UsuarioNombre>
        <UsuarioEmail>carlos.lopez@empresa.com</UsuarioEmail>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <UsuarioRol>Diseñador</UsuarioRol>
        </div>
        <BotonEditar onClick={() => alert("Editando perfil de Carlos López")}>
          Editar Perfil
        </BotonEditar>
      </PerfilUsuario>
    </div>
  </div>
);

export default App;
