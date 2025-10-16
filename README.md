# LPTrips - Landing Page

Una landing page moderna y responsive para búsqueda inteligente de precios de viajes, desarrollada con Next.js y Tailwind CSS.

## Características Principales

- **Diseño Mobile-First**: Optimizado para dispositivos móviles y tablets
- **Interfaz Moderna**: Diseño limpio con efectos glassmorphism y gradientes
- **Búsqueda Inteligente**: Formulario intuitivo para búsqueda de destinos
- **Carousel Dinámico**: Imágenes de fondo que rotan automáticamente
- **Totalmente Responsive**: Se adapta a todos los tamaños de pantalla
- **Performance Optimizada**: Carga rápida con Next.js y optimizaciones de imágenes

## Tecnologías Utilizadas

- **Next.js**: Framework React con renderizado híbrido
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework CSS utility-first
- **Responsive Design**: Breakpoints para mobile, tablet y desktop

## Estructura del Proyecto

```
ia-travel-landing/
├── pages/
│   ├── index.tsx          # Página principal
│   └── api/
│       └── hello.ts       # Endpoint API de ejemplo
├── components/
│   └── Hero.tsx          # Componente principal hero
├── public/
│   └── images/           # Assets e imágenes
├── styles/
│   └── globals.css       # Estilos globales
└── config/
    └── tailwind.config.js # Configuración de Tailwind
```

## Instalación y Desarrollo

### Prerrequisitos

- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd ia-travel-landing
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Ejecutar ESLint

## Personalización

### Colores y Tema

El proyecto utiliza una paleta de colores moderna que puede ser personalizada en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
      }
    }
  }
}
```

### Contenido

- **Texto Principal**: Modifica el heading en `components/Hero.tsx`
- **Imágenes del Carousel**: Actualiza el array `imageSets` con tus propias imágenes
- **Características**: Edita el array de features en la sección correspondiente

## Responsive Design

El proyecto sigue un enfoque mobile-first con los siguientes breakpoints:

- **Mobile**: < 768px (estilos base)
- **Tablet**: ≥ 768px (prefijo `md:`)
- **Desktop**: ≥ 1024px (prefijo `lg:`)
- **Large Desktop**: ≥ 1280px (prefijo `xl:`)

## Optimizaciones Implementadas

- **Lazy Loading**: Imágenes cargan bajo demanda
- **Font Optimization**: Fuentes optimizadas con next/font
- **Image Optimization**: Compresión y formatos modernos (WebP)
- **Code Splitting**: Carga bajo demanda de componentes
- **SEO Ready**: Meta tags y estructura semántica

## Deployment

### Vercel (Recomendado)

```bash
npm run build
```

Luego despliega en [Vercel](https://vercel.com/new) conectando tu repositorio.

### Otras Plataformas

El proyecto puede ser desplegado en cualquier plataforma que soporte Node.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Estructura de Componentes

### Hero Component

El componente principal incluye:

- Carrusel automático de imágenes de fondo
- Formulario de búsqueda con validación
- Sección de características destacadas
- Badges de confianza y ratings
- Indicador de scroll

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## Soporte

Si encuentras algún problema o tienes preguntas:

1. Revisa la documentación de [Next.js](https://nextjs.org/docs)
2. Consulta los [issues del proyecto](https://github.com/tu-usuario/ia-travel-landing/issues)
3. Crea un nuevo issue con una descripción detallada

---

Desarrollado con Next.js y Tailwind CSS