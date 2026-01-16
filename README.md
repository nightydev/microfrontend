# 🏗️ Arquitectura de Microfrontends con Styled Components

Proyecto de demostración de **aislamiento de estilos** en una arquitectura de microfrontends usando **Styled Components** y **Module Federation**.

## 📁 Estructura del Proyecto

```
micro/
├── app1/                    # Microfrontend de Productos
│   ├── src/
│   │   ├── components/
│   │   │   ├── CardProducto.tsx    # Componente estilizado de tarjeta
│   │   │   └── BotonComprar.tsx    # Botón estilizado de compra
│   │   └── App.tsx          # Aplicación principal
│   └── module-federation.config.ts
│
├── app2/                    # Microfrontend de Usuarios
│   ├── src/
│   │   ├── components/
│   │   │   ├── PerfilUsuario.tsx   # Componente estilizado de perfil
│   │   │   └── BotonEditar.tsx     # Botón estilizado de edición
│   │   └── App.tsx          # Aplicación principal
│   └── module-federation.config.ts
│
└── shell/                   # Aplicación Contenedora
    ├── src/
    │   └── App.tsx          # Shell que integra ambos microfrontends
    └── module-federation.config.ts
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn

### 1. Instalar dependencias

Cada aplicación ya tiene instaladas sus dependencias, pero si necesitas reinstalar:

```powershell
# En cada carpeta (app1, app2, shell):
cd app1
npm install

cd ..\app2
npm install

cd ..\shell
npm install
```

### 2. Iniciar las aplicaciones

Necesitas **3 terminales** para ejecutar los microfrontends y el shell:

#### Terminal 1 - Microfrontend Productos (app1):
```powershell
cd app1
npm start
```
Se ejecutará en: http://localhost:8081

#### Terminal 2 - Microfrontend Usuarios (app2):
```powershell
cd app2
npm start
```
Se ejecutará en: http://localhost:8082

#### Terminal 3 - Shell (Aplicación Contenedora):
```powershell
cd shell
npm start
```
Se ejecutará en: http://localhost:8080

### 3. Acceder a la aplicación

Abre tu navegador en: **http://localhost:8080**

## 🎯 Características

### Microfrontend de Productos (app1)
- **Puerto**: 8081
- **Componentes**:
  - `CardProducto`: Tarjeta de producto con gradiente morado/azul
  - `BotonComprar`: Botón azul con efectos hover
- **Estilos**: Paleta morada (#667eea, #764ba2)

### Microfrontend de Usuarios (app2)
- **Puerto**: 8082
- **Componentes**:
  - `PerfilUsuario`: Tarjeta de perfil con gradiente rosa/rojo
  - `BotonEditar`: Botón verde con efectos hover
- **Estilos**: Paleta rosa/roja (#f093fb, #f5576c)

### Shell (Aplicación Contenedora)
- **Puerto**: 8080
- **Función**: Integra dinámicamente app1 y app2
- **Navegación**: Botones para alternar entre vistas
- **Module Federation**: Carga remota de microfrontends

## 🔧 Tecnologías Utilizadas

- **React 19**: Framework de UI
- **Styled Components**: CSS-in-JS para estilos encapsulados
- **Module Federation**: Integración de microfrontends
- **Rspack**: Bundler y dev server
- **TypeScript**: Tipado estático

## 🎨 Demostración de Aislamiento de Estilos

### Sin Styled Components (Problema):
```css
/* app1/styles.css */
.button { background: blue; }

/* app2/styles.css */
.button { background: green; } /* ❌ Sobrescribe app1 */
```

### Con Styled Components (Solución):
```jsx
// app1
const BotonComprar = styled.button`
  background-color: #007bff;
`;
// Genera: <button class="sc-aXZVg kcPTuv">

// app2
const BotonEditar = styled.button`
  background-color: #28a745;
`;
// Genera: <button class="sc-bdVaJa hKzUWq">
```

✅ **Ambos coexisten sin conflictos gracias a los hashes únicos**

## 🧪 Cómo Verificar el Aislamiento

1. **Abre las Developer Tools** (F12)
2. **Inspecciona un botón** de Productos
3. **Observa las clases generadas**: ej. `sc-bdVaJa hKzUWq`
4. **Inspecciona un botón** de Usuarios
5. **Compara las clases**: Son diferentes aunque ambos sean botones
6. **Cambia entre vistas**: Los estilos se mantienen consistentes

## 📚 Preguntas de Análisis

Las respuestas detalladas a las preguntas de la actividad están en:
- **[ANALISIS_RESPUESTAS.md](./ANALISIS_RESPUESTAS.md)**

Temas cubiertos:
1. ¿Qué problema resuelve Styled Components en microfrontends?
2. ¿Qué pasaría si se usara CSS global?
3. ¿Cómo ayuda el hash de clases generado automáticamente?
4. ¿Styled Components favorece la independencia entre equipos?

## 🛠️ Comandos Útiles

```powershell
# Iniciar todas las apps en modo desarrollo
# Terminal 1:
cd app1 ; npm start

# Terminal 2:
cd app2 ; npm start

# Terminal 3:
cd shell ; npm start

# Construir para producción
npm run build

# Limpiar y reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

## 📦 Module Federation Config

### app1 (expone su aplicación):
```typescript
{
  name: "app1",
  exposes: {
    "./App": "./src/App.tsx"
  },
  shared: ["react", "react-dom", "styled-components"]
}
```

### app2 (expone su aplicación):
```typescript
{
  name: "app2",
  exposes: {
    "./App": "./src/App.tsx"
  },
  shared: ["react", "react-dom", "styled-components"]
}
```

### shell (consume remotos):
```typescript
{
  name: "shell",
  remotes: {
    app1: "app1@http://localhost:8081/mf-manifest.json",
    app2: "app2@http://localhost:8082/mf-manifest.json"
  },
  shared: ["react", "react-dom", "styled-components"]
}
```

## 🎓 Aprendizajes Clave

1. **Encapsulamiento**: Styled Components genera clases únicas automáticamente
2. **Independencia**: Cada microfrontend tiene sus estilos sin afectar otros
3. **Escalabilidad**: Se pueden agregar más microfrontends sin conflictos
4. **Mantenibilidad**: Cada equipo controla sus propios estilos
5. **Module Federation**: Integración dinámica de aplicaciones React

## 🐛 Solución de Problemas

### Error: "Cannot find module 'app1/App'"
- Verifica que app1 esté corriendo en el puerto 8081
- Revisa que `module-federation.config.ts` tenga la configuración correcta

### Los estilos no se ven
- Limpia el cache del navegador (Ctrl + Shift + R)
- Verifica que styled-components esté instalado en cada proyecto
- Revisa la consola del navegador para errores

### Puerto en uso
```powershell
# En Windows, liberar puerto 8080:
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

## 📝 Notas

- Los microfrontends deben estar **corriendo primero** antes de iniciar el shell
- Si modificas el código, Rspack recargará automáticamente (Hot Module Replacement)
- Los estilos están completamente aislados gracias a Styled Components
- Cada microfrontend puede desplegarse independientemente

## 🤝 Contribuir

Esta es una aplicación educativa para demostrar conceptos de microfrontends y aislamiento de estilos.

## 📄 Licencia

Proyecto educativo - Uso libre para aprendizaje.
