# 🌐 Portfolio 2026 --- Rocío Méndez

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

Portfolio profesional desarrollado con **Next.js + TypeScript**,
diseñado para mostrar experiencia, proyectos y contacto profesional.

El proyecto utiliza **Next.js App Router**, arquitectura modular basada
en componentes y soporte de **internacionalización (i18n)**.

------------------------------------------------------------------------

# 🚀 Demo

(Waiting...)

------------------------------------------------------------------------

# 🧠 Objetivo del proyecto

Este portfolio tiene como objetivo:

-   presentar experiencia profesional
-   mostrar proyectos destacados
-   facilitar contacto profesional
-   servir como hub central de presencia técnica

------------------------------------------------------------------------

# 🛠️ Stack tecnológico

## Frontend

-   Next.js 16
-   React
-   TypeScript
-   TailwindCSS

## Arquitectura

-   Next.js App Router
-   Server Components
-   Middleware para i18n

## Tooling

-   Turbopack
-   ESLint
-   PostCSS

------------------------------------------------------------------------

# ⚙️ Instalación

Clonar el repositorio

``` bash
git clone https://github.com/TU_USUARIO/portfolio-2026.git
cd portfolio-2026
```

Instalar dependencias

``` bash
npm install
```

------------------------------------------------------------------------

# ▶️ Ejecutar en desarrollo

``` bash
npm run dev
```

El proyecto se ejecutará en:

    http://localhost:3000

------------------------------------------------------------------------

# 🏗️ Build para producción

Generar build optimizado

``` bash
npm run build
```

Ejecutar servidor de producción

``` bash
npm run start
```

------------------------------------------------------------------------

# 📂 Estructura del proyecto

    portfolio-2026
    │
    ├── src
    │   ├── app
    │   │   ├── [locale]
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   │
    │   │   └── layout.tsx
    │   │
    │   ├── components
    │   │   ├── layout
    │   │   │   ├── Navbar.tsx
    │   │   │   ├── Footer.tsx
    │   │   │   ├── LanguageToggle.tsx
    │   │   │   └── SetLocale.tsx
    │   │   │
    │   │   ├── sections
    │   │   │   ├── Hero.tsx
    │   │   │   ├── About.tsx
    │   │   │   ├── Experience.tsx
    │   │   │   ├── Projects.tsx
    │   │   │   └── Contact.tsx
    │   │   │
    │   │   └── ui
    │   │       ├── ProjectCard.tsx
    │   │       └── ScrollReveal.tsx
    │   │
    │   ├── dictionaries
    │   │   ├── en.json
    │   │   └── es.json
    │   │
    │   ├── hooks
    │   │   └── useScrollDirection.ts
    │   │
    │   ├── lib
    │   │   ├── constants.ts
    │   │   ├── utils.ts
    │   │   └── i18n
    │   │       ├── config.ts
    │   │       └── dictionaries.ts
    │   │
    │   └── styles
    │       └── globals.css
    │
    ├── middleware.ts
    ├── next.config.ts
    ├── tsconfig.json
    └── package.json

------------------------------------------------------------------------

# 🧩 Arquitectura del proyecto

El proyecto sigue una **arquitectura modular basada en componentes**.

    App Router
       │
       ├── Layout global
       │
       ├── Secciones del sitio
       │
       ├── Componentes UI reutilizables
       │
       ├── Sistema de traducciones
       │
       └── Middleware de routing

Esto permite:

-   escalabilidad
-   reutilización de componentes
-   mantenimiento simple
-   separación clara de responsabilidades

------------------------------------------------------------------------

# 🌍 Internacionalización (i18n)

El sitio soporta múltiples idiomas.

Archivos de traducción:

    src/dictionaries

Ejemplo:

    en.json
    es.json

Configuración:

    src/lib/i18n/config.ts

El middleware detecta el idioma y redirige automáticamente.

------------------------------------------------------------------------

# 🧱 Secciones principales del sitio

  Sección      Descripción
  ------------ -------------------------
  Hero         Presentación principal
  About        Perfil profesional
  Experience   Experiencia laboral
  Projects     Proyectos destacados
  Contact      Información de contacto

------------------------------------------------------------------------

# 🎨 Componentes reutilizables

Ubicación

    src/components/ui

Componentes incluidos

-   ProjectCard
-   ScrollReveal

Estos permiten mantener una UI consistente en todo el sitio.

------------------------------------------------------------------------

# 🧠 Hooks personalizados

    src/hooks

Ejemplo:

    useScrollDirection.ts

Permite detectar dirección del scroll para animaciones o comportamiento
del navbar.

------------------------------------------------------------------------

# ⚙️ Middleware

Archivo

    middleware.ts

Responsabilidades:

-   routing por idioma
-   control de redirecciones
-   lógica previa a renderizado

------------------------------------------------------------------------

# 🎨 Estilos

Estilos globales

    src/styles/globals.css

El proyecto utiliza **TailwindCSS** para diseño responsive.

------------------------------------------------------------------------

# 📦 Scripts disponibles

  Script          Descripción
  --------------- ------------------------
  npm run dev     servidor de desarrollo
  npm run build   build optimizado
  npm run start   servidor producción
  npm run lint    análisis de código

------------------------------------------------------------------------

# 🚀 Deploy recomendado

Este proyecto puede desplegarse en:

-   Vercel
-   Netlify
-   Railway
-   Docker

Deploy rápido con Vercel

``` bash
vercel
```

------------------------------------------------------------------------

# 👩‍💻 Autor

**Rocío Méndez**

Senior Backend Developer\
AI Engineer\
Cloud Architecture

GitHub\
https://github.com

LinkedIn\
https://linkedin.com

------------------------------------------------------------------------

# 📜 Licencia

MIT License