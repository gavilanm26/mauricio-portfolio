<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Estructura del Proyecto Estándar (Mandatorio)
Siempre que crees, modifiques o refactorices proyectos frontend, debes seguir fielmente la estructura estándar descrita en la Skill `frontend-structure` (.agents/skills/frontend-structure/SKILL.md).

Estructura requerida:
```text
frontend/
│
├── node_modules/
├── public/
│
├── src/
│   ├── api/            # Backend Connection
│   ├── assets/         # Static Files
│   ├── components/     # Reusable Components
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── context/        # Global State Management
│   ├── data/           # Static Content
│   ├── hooks/          # Custom Logic
│   ├── pages/          # Application Pages
│   ├── redux/          # Advanced State Management
│   ├── services/       # Frontend Logic
│   ├── utils/          # Utility Functions
│   │
│   └── App.jsx
│
├── eslint.config.js
├── index.html
├── package-lock.json
└── .gitignore
```
Si el proyecto actual utiliza Next.js (App Router), adapta la convención preservando la modularidad y asegurando que los componentes reutilizables residan en `src/components/ui/` y `src/components/layout/`, y la lógica de negocio, hooks, contextos y utilidades se organicen en sus carpetas respectivas dentro de `src/`.

# Tests Unitarios Mandatorios (Regla Ineludible)
Cualquier nuevo componente, hook, función de utilidad, servicio o lógica de negocio que sea creado, modificado o refactorizado **debe ir acompañado de su correspondiente archivo de test unitario**.

### Convenciones de Pruebas:
1. **Ubicación**: El archivo de test debe residir en el mismo directorio del archivo que se prueba, nombrado con la extensión `.test.tsx`, `.test.ts`, `.spec.tsx` o `.spec.ts`.
2. **Frameworks de Referencia**: Usa Vitest o Jest junto con React Testing Library para componentes visuales, y pruebas directas de lógica para funciones puras (`utils/` o `services/`).
3. **Cobertura**: Las pruebas deben validar el renderizado inicial, el comportamiento interactivo ante eventos (clicks, cambios de input) y la tolerancia a valores nulos o props por defecto.
4. **Prohibido**: Entregar o dar por concluido un desarrollo sin haber validado previamente que las pruebas unitarias pasen de forma exitosa.
