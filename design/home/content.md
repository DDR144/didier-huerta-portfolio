# Contenido de la home — datos reales y copy

Actualizado el 2026-11-03 con el CV maestro (`/home/didier/Documents/Curriculums/cv-Master/Didier_Huerta_CV.yaml`,
render en `rendercv_output/Didier_Huerta_Rojas_CV.pdf`). El CV **no** se publica en el sitio por ahora.

## Datos confirmados por el CV

| Dato | Valor | Origen |
| --- | --- | --- |
| Nombre completo | Didier Huerta Rojas | CV |
| Ubicación | Lima, Perú | CV |
| Email | didier.huerta.dev@gmail.com | CV |
| Teléfono | +51 930 190 189 | CV — **no publicado en el sitio** |
| Disponibilidad | Inmediata; presencial, híbrido o remoto | CV + confirmación del usuario |
| Alcance | Full Stack, frontend o backend | Usuario (2026-11-03) |
| LinkedIn / GitHub | /in/didier-huerta · /DDR144 | CV |
| Experiencia | NHL Decoración Comercial, Desarrollador Full Stack, dic 2025 – abr 2026, Lima | CV |
| Formación | Instituto IDAT, Desarrollo de Sistemas de Información, egresado abr 2026 | CV |
| Idiomas | Inglés avanzado, Instituto Cultural Peruano Británico | CV |
| CV descargable | **No publicado** (decisión del usuario, 2026-11-03): el CV existe pero queda fuera del sitio por ahora | `~/Documents/Curriculums/cv-Master` |

## Lo que el CV dice y el sitio no mostraba

El sitio actual (`src/app/page.tsx` y `src/data/projects.ts`) no tenía **nada** de esto: ni rol
profesional, ni ubicación, ni cifras. Un reclutador veía tres proyectos personales sin contexto.

- 20 de las 22 páginas de servicio del sitio corporativo de Digimedia en producción (Next.js + React).
- Editor de plantillas de WhatsApp en el panel de administración: texto enriquecido, previsualización y cola de campañas con modo oscuro.
- Estandarización de header y footer compartidos, traducción de diseños de Figma a componentes.
- Equipo de 12 desarrolladores, flujo por ramas con Git y GitHub, integración con APIs REST.
- Cifras agregadas de los proyectos del CV: 34 pruebas Jest (EternaFlor) + 22 JUnit (Order Management) + 12 Vitest (TaskFlow) = **68 pruebas automatizadas**.

## Copy de la home (dirección `04-recruiter`)

### Hero

- Eyebrow: `Desarrollador Full Stack · Lima, Perú · Disponibilidad inmediata`
- Titular: `Aplicaciones web completas, del modelo de datos a la interfaz.`
- Entrada: `Trabajo con TypeScript, React, Next.js, Node.js, NestJS, Java y Spring Boot sobre PostgreSQL. Construyo de extremo a extremo, con pruebas automatizadas, integración continua y despliegue en producción, y documento las decisiones para que otro equipo pueda continuar.`
- CTA primaria: `Ver experiencia`
- CTA secundaria: `Escríbeme` → `/contact`
- Cifras: `20 páginas en producción` · `4 proyectos con ADR y pruebas` · `68 pruebas automatizadas`

### Tarjeta de disponibilidad

- Estado: `Disponibilidad inmediata`
- Nota: `Full Stack, frontend o backend. Presencial, híbrido o remoto desde Lima, Perú.`
- Canales: `Correo → Formulario de contacto`, `Email → didier.huerta.dev@gmail.com`, `LinkedIn → /in/didier-huerta`, `GitHub → /DDR144`

### Experiencia (nueva sección)

`Desarrollador Full Stack` — NHL Decoración Comercial · Lima, Perú · dic 2025 – abr 2026

- Implementé 20 de las 22 páginas de servicio del sitio corporativo de Digimedia con Next.js y React: contenido, metadatos SEO y diseño responsive. El sitio está en producción.
- Desarrollé en el panel de administración el editor de plantillas de WhatsApp: texto enriquecido, previsualización y cola de campañas, con modo oscuro.
- Estandaricé el header y footer compartidos traduciendo diseños de Figma a componentes reutilizables, y mejoré rendimiento y accesibilidad de las páginas de servicio.
- Colaboré en un flujo por ramas con Git y GitHub e integré funcionalidades backend mediante APIs REST.

Formación: `Instituto IDAT — Desarrollo de Sistemas de Información` · `Egresado · ene 2024 – abr 2026`
Idiomas: `Inglés avanzado — Instituto Cultural Peruano Británico` · `Lectura de documentación técnica y comunicación profesional`

### Proyectos — **pospuesto a la próxima iteración**

Se mantienen los tres actuales de `src/data/projects.ts` (DevBlog, Joyas Dido, TaskFlow) con la
estructura problema → solución → resultado. Pendiente para la próxima iteración:

- Las capturas reales (`public/projects/*.webp`).
- Resultados medibles (Lighthouse propio o PageSpeed sobre despliegues).
- Reconciliar el catálogo: el CV lista cuatro proyectos (EternaFlor, Order Management Platform, TaskFlow, DevBlog) y **no** incluye Joyas Dido; el sitio lista tres y omite EternaFlor y Order Management. Hay que decidir cuáles se muestran.
- Enlaces: hoy `link` y `repo` son la misma URL de GitHub en los tres; sin demo desplegada, el botón debería decir "Código".

### Cómo trabajo (cuatro pasos) y criterios

Sin cambios: siguen siendo válidos y ahora se apoyan en hechos del CV (ADR, pruebas en CI, PRD).

### Cierre

- Titular: `¿Buscas un full stack que también cuide el detalle?`
- Texto: `Disponibilidad inmediata para presencial, híbrido o remoto desde Lima, Perú. Cuéntame el puesto o el proyecto y te respondo con cómo lo abordaría.`
- CTA: `Escríbeme` · `Ver proyectos`
- Canales: formulario, email, LinkedIn, GitHub.

## Decisiones abiertas

1. **CV y teléfono**: el CV queda fuera del sitio por decisión del usuario. Su PDF incluye el teléfono, así que tampoco debe publicarse ese archivo tal cual.
2. **Joyas Dido**: no aparece en el CV. ¿Es un proyecto que quieres mostrar o lo sacamos?
3. **EternaFlor y Order Management Platform**: son los proyectos más fuertes del CV por cifras (34 y 22 pruebas, ADR, microservicios con Keycloak) y hoy no están en el sitio. Recomiendo incluirlos en la próxima iteración.
4. **Experiencia vs. "abierto a"**: el rol terminó en abril 2026; la home dice "disponibilidad inmediata", que es coherente, pero si hubo otros trabajos desde entonces el CV maestro está desactualizado.
