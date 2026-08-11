# ZYBERIA DIGITAL AUDIT FRAMEWORK

**Metodología integral de diagnóstico y auditoría digital para clientes.**

Este framework no es una lista de herramientas. Es la metodología oficial de Zyberia para evaluar la presencia digital de una empresa, detectar cuellos de botella en su comunicación, tecnología y conversión, y trazar un plan de acción concreto.

---

## 01 — DISCOVERY
**¿Google y los usuarios pueden encontrar la empresa?**

* **Objetivo:** Verificar la visibilidad básica y la huella digital inicial.
* **Herramientas:** Búsqueda manual en Google (Incógnito), Google Maps, búsqueda de marca ("brand search").
* **Evidencia:** La empresa aparece al buscar su nombre exacto. Tiene perfil de Google Business Profile (GBP) verificado.
* **Diagnóstico:** Si no aparece por su nombre o su GBP está desactualizado, el descubrimiento orgánico está roto desde la base.
* **Acción Recomendada:** Reclamar/optimizar GBP, crear perfiles básicos en directorios locales.
* **Prioridad:** 🔴 CRÍTICA

---

## 02 — INDEXATION
**¿Google puede rastrear e indexar el sitio web?**

* **Objetivo:** Asegurar que el contenido del sitio web está en la base de datos de los buscadores.
* **Herramientas:** Google Search Console, `site:dominio.com`, validación de `robots.txt` y `sitemap.xml`.
* **Evidencia:** Las URLs clave devuelven código 200 y están indexadas. No hay bloqueos accidentales de rastreo.
* **Diagnóstico:** Si el sitio existe pero no está indexado (o tiene errores de rastreo masivos), es invisible para el buscador.
* **Acción Recomendada:** Corregir `robots.txt`, enviar `sitemap.xml`, arreglar errores de rastreo en Search Console.
* **Prioridad:** 🔴 CRÍTICA

---

## 03 — SEMANTIC SEO
**¿Google y la IA entienden qué vende la empresa y dónde lo vende?**

* **Objetivo:** Validar la estructura semántica y la alineación con la intención de búsqueda local.
* **Herramientas:** Revisión de código fuente (H1, title, meta description), validador de Schema.org, análisis de estructura de URLs.
* **Evidencia:** Presencia de Schema local (`LocalBusiness`, `Organization`), H1 descriptivos (ej: "Taller Mecánico en Tucumán" en lugar de "Bienvenidos").
* **Diagnóstico:** Si la web es ambigua, los motores de búsqueda no la mostrarán para búsquedas transaccionales.
* **Acción Recomendada:** Implementar Schema.org, reestructurar encabezados, optimizar metas para búsquedas locales ("servicio + ciudad").
* **Prioridad:** 🟡 ALTA

---

## 04 — CONTENT
**¿Existe contenido para responder a las búsquedas y necesidades reales de los clientes?**

* **Objetivo:** Evaluar si la información de la web resuelve las dudas de los usuarios.
* **Herramientas:** Auditoría de contenido manual, revisión de páginas de servicios vs. volumen de búsqueda.
* **Evidencia:** Páginas dedicadas a cada servicio principal, FAQs, información de contacto clara, propuesta de valor definida.
* **Diagnóstico:** Si todo está en una sola "One Page" genérica, se pierden oportunidades de posicionamiento por servicio específico.
* **Acción Recomendada:** Desglosar servicios en URLs independientes, mejorar el copywriting enfocado en beneficios.
* **Prioridad:** 🟡 ALTA

---

## 05 — PERFORMANCE
**¿La experiencia técnica acompaña la navegación?**

* **Objetivo:** Asegurar que la web cargue rápido y sea usable en cualquier dispositivo.
* **Herramientas:** Google PageSpeed Insights, Chrome DevTools, navegación real en móvil (3G/4G).
* **Evidencia:** Tiempos de carga (LCP) menores a 2.5s, sitio 100% responsive, sin elementos que rompan el diseño en móvil.
* **Diagnóstico:** Una web lenta frustra al usuario y perjudica el posicionamiento (Core Web Vitals). Un mal responsive mata la conversión local.
* **Acción Recomendada:** Optimizar imágenes (WebP), minificar CSS/JS, corregir problemas de renderizado móvil.
* **Prioridad:** 🟡 ALTA

---

## 06 — AUTHORITY
**¿Hay señales externas que validen la confianza de la empresa?**

* **Objetivo:** Medir la reputación digital y las menciones en otros sitios.
* **Herramientas:** Análisis de Backlinks (Ahrefs/Semrush gratuitos), revisión de reseñas en Google y redes sociales.
* **Evidencia:** Enlaces desde sitios locales relevantes (directorios, diarios, cámaras de comercio), reseñas positivas y recientes.
* **Diagnóstico:** Sin autoridad externa, es difícil superar a competidores establecidos en los resultados de búsqueda.
* **Acción Recomendada:** Estrategia de PR local, campaña de consecución de reseñas de clientes satisfechos.
* **Prioridad:** 🔵 MEDIA (Construcción a largo plazo)

---

## 07 — CONVERSION
**¿La visita tiene un siguiente paso claro y sin fricción?**

* **Objetivo:** Analizar el flujo de usuario desde que entra hasta que contacta/compra.
* **Herramientas:** Análisis heurístico de UX, auditoría de CTAs, prueba de formularios y links de WhatsApp.
* **Evidencia:** Botones de acción (CTAs) visibles (ej: "Agendar Turno", "Escribir al WhatsApp"), formularios funcionando, teléfono clicable.
* **Diagnóstico:** Si un usuario quiere comprar pero no encuentra el botón rápido de WhatsApp, la inversión en tráfico se desperdicia.
* **Acción Recomendada:** Implementar CTAs flotantes en móvil, simplificar formularios, asegurar links `wa.me/` directos.
* **Prioridad:** 🔴 CRÍTICA

---

## 08 — ANALYTICS
**¿Podemos medir qué está pasando en la web?**

* **Objetivo:** Confirmar que existe infraestructura de medición para tomar decisiones basadas en datos.
* **Herramientas:** Google Tag Assistant, inspección de red.
* **Evidencia:** Google Analytics 4 (GA4) instalado, Meta Pixel activo, eventos de conversión configurados (clic en WhatsApp, envío de formulario).
* **Diagnóstico:** Sin analítica, se opera a ciegas. No se sabe si el diseño nuevo funciona mejor o peor que el viejo.
* **Acción Recomendada:** Implementar Google Tag Manager, configurar eventos clave, armar dashboard básico de reportes.
* **Prioridad:** 🟡 ALTA

---

## 09 — AI VISIBILITY
**¿Los motores de IA (ChatGPT, Perplexity, Gemini) entienden y recomiendan la empresa?**

* **Objetivo:** Preparar la presencia digital para la Búsqueda Generativa y los asistentes de IA (GEO - Generative Engine Optimization).
* **Herramientas:** Consultas directas a ChatGPT/Perplexity ("Recomiéndame un [servicio] en [ciudad]").
* **Evidencia:** La IA menciona a la empresa, conoce sus servicios, su historia y sus datos de contacto correctos.
* **Diagnóstico:** Las IA se alimentan de datos estructurados, PR, menciones en foros y páginas completas (About Us). Si la web es puro diseño sin texto, la IA no la "lee".
* **Acción Recomendada:** Enriquecer la narrativa de la marca (historia, casos de estudio detallados), generar notas de prensa o menciones en sitios de terceros.
* **Prioridad:** 🔵 MEDIA (Alta a futuro)

---

## 10 — BUSINESS
**¿Todo esto termina generando una oportunidad comercial real?**

* **Objetivo:** Conectar el rendimiento digital con la operación del negocio.
* **Herramientas:** Auditoría de procesos internos del cliente (¿Cómo reciben los leads? ¿Dónde los anotan?).
* **Evidencia:** Los mensajes de WhatsApp no se pierden, existe un seguimiento (CRM o planilla), el equipo de ventas responde rápido.
* **Diagnóstico:** Si la web genera 100 consultas pero el equipo tarda 2 días en responder o las anota en un papel que se pierde, el problema ya no es la web, es operativo.
* **Acción Recomendada:** Implementar automatizaciones (n8n, chatbots), estandarizar respuestas, integrar un CRM ligero (o Zyberia OS).
* **Prioridad:** 🔴 CRÍTICA
