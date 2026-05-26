---
name: frontend-structure
description: Skill de Estructura Estándar de Proyectos Frontend en React/Next.js para Antigravity. Enforce un árbol de directorios y ordenamiento limpio de componentes, estados, servicios y lógica del portafolio y futuros desarrollos.
---

# Estructura Estándar de Proyectos Frontend

Esta Skill define el estándar obligatorio, absoluto e inmutable para estructurar cualquier proyecto de desarrollo web frontend (especialmente en React, Next.js o Vite) dentro de los repositorios y espacios de trabajo de Mauricio.

---

## 📂 Árbol de Directorios Estándar

Cualquier proyecto frontend debe organizarse o refactorizarse siguiendo fielmente este árbol estructural de directorios:

```text
frontend/
│
├── node_modules/       # Dependencias instaladas
├── public/             # Archivos estáticos de acceso directo (favicons, imágenes globales)
│
├── src/                # Código fuente de la aplicación
│   ├── api/            # Backend Connection (clientes REST, configs de axios/fetch, interceptores)
│   ├── assets/         # Static Files (imágenes locales, SVGs, tipografías personalizadas)
│   ├── components/     # Reusable Components (componentes puros sin estado de negocio)
│   │   ├── layout/     # Componentes de layouts (Navbars, Footers, Sidebars, Wrappers)
│   │   └── ui/         # Componentes atómicos/UI (Botones, Inputs, Cards, Badges)
│   │
│   ├── context/        # Global State Management (React Contexts, providers globales de estado medio)
│   ├── data/           # Static Content (archivos JSON, constantes, listas estáticas, textos del portafolio)
│   ├── hooks/          # Custom Logic (custom hooks de React reutilizables)
│   ├── pages/          # Application Pages (vistas de la aplicación, layouts de ruteo)
│   ├── redux/          # Advanced State Management (slices, store, dispatchers de Redux Toolkit)
│   ├── services/       # Frontend Logic (servicios de lógica de negocio, mapeadores de datos, lógica pura)
│   ├── utils/          # Utility Functions (funciones helpers, formateadores, validadores puros)
│   │
│   └── App.jsx         # Componente raíz de la aplicación
│
├── eslint.config.js    # Configuración de linting y calidad de código
├── index.html          # Entrada principal HTML (Vite)
├── package-lock.json   # Archivo de bloqueo de versiones de dependencias
└── .gitignore          # Archivos y carpetas excluidas del control de versiones
```

---

## 🎯 Reglas y Convenciones de Carpeta

Para garantizar que esta estructura se mantenga limpia, libre de slop y sumamente profesional, debes seguir de forma estricta las siguientes convenciones:

### 1. `src/api/` (Backend Connection)
* Centraliza aquí la conexión con servicios backend externos.
* Define aquí las instancias de `axios`, `fetch` o adaptadores REST, los interceptores de tokens y credenciales de autenticación, y los endpoints de conexión.
* **Prohibido:** Escribir lógica de UI o JSX aquí. Solo lógica pura de comunicación de red.

### 2. `src/components/` (Reusable Components)
* Todo componente aquí debe ser puramente presentacional. Debe recibir datos y callbacks por `props` y no estar acoplado a un contexto de negocio específico.
* Subdivide en:
  * **`layout/`:** Para componentes que definen la estructura global o envolvente de la app (e.g. `Navbar.tsx`, `Footer.tsx`, `Sidebar.tsx`).
  * **`ui/`:** Para componentes atómicos reutilizables en múltiples vistas (e.g. `MagneticButton.tsx`, `DoubleBezelCard.tsx`, `Modal.tsx`).

### 3. `src/context/` y `src/redux/` (State Management)
* Usa `context/` para estados globales sencillos (e.g. toggle de tema claro/oscuro, estado de apertura de barra de navegación).
* Usa `redux/` para estados complejos, transaccionales, estructurados o que involucren flujos asíncronos pesados (e.g. carrito de compras, perfil de usuario autenticado).

### 4. `src/data/` (Static Content)
* Almacena aquí constantes de texto, listas estáticas (e.g. `navLinks`, `projectsList`, `techCards`), archivos de configuración locales, configuraciones de idiomas (i18n), o metadata que no cambie dinámicamente desde una base de datos.
* Esto limpia los componentes de React, haciendo que se enfoquen únicamente en el maquetado y lógica interactiva.

### 5. `src/services/` (Frontend Logic)
* Define la lógica de negocio del frontend aquí.
* Incluye los mapeadores de datos de API a modelos de dominio del frontend, validadores de flujos y servicios puros de transformación de información.

### 6. `src/utils/` (Utility Functions)
* Aloja funciones auxiliares genéricas y sin efectos secundarios (e.g. `formatCurrency()`, `formatDate()`, `calculateSlug()`).
* Deben ser funciones puras fáciles de testear.

---

## 🔧 Acciones Sugeridas al Crear Proyectos

Cada vez que Mauricio te solicite inicializar un nuevo proyecto frontend o refactorizar uno existente, tú **debes**:
1. Crear exactamente este árbol de carpetas en `src/`.
2. Ordenar y migrar cualquier componente atómico a `src/components/ui/` y componentes de estructura a `src/components/layout/`.
3. Mover todos los datos duros a constantes dentro de `src/data/`.
4. Organizar las conexiones de endpoints en `src/api/` y los helpers en `src/utils/`.
5. **Crear obligatoriamente el archivo de test unitario (`.test.tsx` / `.spec.ts`)** para cada componente, hook o función de utilidad que agregues o modifiques, garantizando que el proyecto conserve una cobertura de pruebas impecable y sea altamente confiable.

