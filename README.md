# MatchCotas - Aplicación frontend de ejemplo para emparejar mascotas.

**Descripción**: Proyecto frontend en React + Vite que muestra mascotas y matches.

**Prerequisitos**

- **Node**: versión 18+ recomendada.
- **Gestor de paquetes**: `pnpm` (recomendado), `npm` o `yarn` funcionan.

**Instalación**

1. Clonar el repositorio:

```bash
git clone <repo-url>
cd matchcotas-front
```

2. Instalar dependencias (con `pnpm` recomendado):

```bash
pnpm install
# o con npm
npm install
```

3. Levantar servidor de desarrollo:

```bash
pnpm dev
# o
npm run dev
```

**Scripts útiles**

- **dev**: `pnpm dev` — inicia Vite en modo desarrollo.
- **build**: `pnpm build` — crea la build de producción.
- **preview**: `pnpm preview` — sirve la build de producción localmente.
- **lint**: `pnpm lint` — ejecuta ESLint.

**Estructura principal**

- **src/**: código fuente React.
- **src/components/**: componentes UI (ej.: [src/components/BoxMatchesApp.jsx](src/components/BoxMatchesApp.jsx#L1)).
- **src/helpers/**: funciones de fetch (ej.: [src/helpers/fetchMascotas.js](src/helpers/fetchMascotas.js#L1)).
- **public/**: assets públicos.

**Notas de desarrollo**

- El entry principal es `src/main.jsx`.
- Usar ESLint configurado en `eslint.config.js` para mantener consistencia.

**Contribuir**

- Crear una rama por feature, hacer PRs claros y añadir descripciones.

**Autor**

- Pablo Marino
