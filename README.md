# Ni Un Día Más - Landing Page

## Descripción del Proyecto

**Ni Un Día Más - El Vínculo es un Derecho** es una landing page que representa a padres y madres que luchan por el derecho al vínculo con sus hijos. Esta plataforma busca crear conciencia sobre la justicia familiar y combatir la obstrucción de visitas, promoviendo el derecho fundamental de los niños a mantener relaciones con ambos padres.

## Características

- 🎨 Diseño moderno y responsivo con Tailwind CSS
- ⚡ Desarrollo rápido con Vite
- 🔧 Componentes reutilizables con Radix UI
- 📱 Completamente responsive para todos los dispositivos
- 🌐 Optimizado para SEO y redes sociales
- 📋 Formularios interactivos con validación

## Tecnologías Utilizadas

### Core
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool y servidor de desarrollo

### Estilado y UI
- **Tailwind CSS** - Framework de CSS utility-first
- **Radix UI** - Componentes accesibles y sin estilo
- **Lucide React** - Iconos modernos
- **Next Themes** - Soporte para temas oscuros/claros

### Formularios y Validación
- **React Hook Form** - Gestión de formularios performante
- **Zod** - Validación de esquemas TypeScript-first
- **Input OTP** - Componentes de entrada OTP

### Navegación y Estado
- **React Router DOM** - Enrutamiento del lado del cliente
- **TanStack Query** - Gestión de estado del servidor

### Desarrollo y Calidad
- **ESLint** - Linter para JavaScript/TypeScript
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Autoprefijos CSS

## Instalación

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd ni-un-diamas-landing
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
El proyecto estará disponible en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run build:dev` - Construye en modo desarrollo
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código
- `npm run deploy` - Despliega la aplicación usando GitHub Pages

## Estructura del Proyecto

```
ni-un-diamas-landing/
├── public/                 # Archivos estáticos públicos
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── pages/            # Páginas de la aplicación
│   ├── lib/              # Utilidades y configuraciones
│   └── main.tsx          # Punto de entrada de la aplicación
├── dist/                 # Build de producción
└── package.json         # Dependencias y scripts
```

## Despliegue

El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

```bash
npm run deploy
```

Este comando:
1. Construye la aplicación
2. Crea un archivo 404.html para el SPA routing
3. Despliega en la rama gh-pages

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Información de Versión

- **Versión**: 1.0.0
- **Licencia**: Privada
- **Autor**: Equipo Ni Un Día Más

## Soporte

Para reportar bugs o solicitar nuevas características, por favor abre un issue en el repositorio del proyecto.

---

*Desarrollado con ❤️ para la causa de la justicia familiar y el derecho de los niños a mantener vínculos con ambos padres.*
