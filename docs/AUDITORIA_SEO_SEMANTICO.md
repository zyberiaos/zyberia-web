# AUDITORÍA SEMÁNTICA SEO INTEGRAL — ZYBERIA
**Ámbito:** Arquitectura Semántica, Intención de Búsqueda, Cobertura Temática y Conversión Orgánica  
**Fecha:** 16 de Octubre de 2026  
**Documento Rector Previo:** `docs/AUDITORIA_COMUNICACION_WEB.md`  
**Entorno de Análisis:** `D:\PROYECTOS\.gemini\antigravity\scratch\zyberia-web`  
**Páginas Evaluadas:** `index.html`, `zyberia-os.html`, `servicios.html`, `quienes-somos.html`, `contacto.html`, `caso-ferreteria.html` (más `sitemap.xml`, `robots.txt`, assets y videos).

---

## 1. Diagnóstico Ejecutivo

Zyberia se encuentra en una posición estratégica privilegiada y diferenciada dentro del ecosistema digital hispanohablante: **no compite como una agencia de marketing tradicional ni como una software factory genérica**. Su propuesta de valor integra tres pilares:
1. **Comunicación Estratégica & Marca** (Branding, Web, Copywriting, Audiovisual, SEO local).
2. **Tecnología & Sistemas de Gestión** (Zyberia OS, Punto de Venta, inventario, catálogo en vivo).
3. **Inteligencia Artificial Aplicada a Procesos** (Empleados digitales con responsabilidades acotadas y supervisión humana).

### Fortalezas Semánticas Comprobadas
- **Riqueza léxica natural:** El contenido huye de la repetición artificial de palabras clave y utiliza un vocabulario de negocio real (*mostrador, remitos, listas de costos de proveedores, stock inmovilizado, márgenes pisados, catálogo web autoadministrado*).
- **Entidades claras:** La diferenciación entre **Zyberia** (empresa consultora), **Zyberia OS** (software comercial con IA) y **Ferretería Pro** (banco de pruebas empírico) resuelve la ontología del sitio.
- **Indexabilidad técnica base:** Todas las páginas cuentan con etiquetas `<meta name="robots" content="index, follow">`, canonicals absolutos coherentes y un archivo `robots.txt` que declara el `sitemap.xml`.

### Vulnerabilidades y Brechas Semánticas Críticas
1. **Ausencia de Datos Estructurados (Schema.org) en páginas clave:**  
   `index.html`, `servicios.html` y `contacto.html` carecen de marcado JSON-LD (`Organization`, `LocalBusiness`, `Service`). Solo `zyberia-os.html` (como `SoftwareApplication`), `quienes-somos.html` (como `AboutPage` y `Person`) y los casos de estudio poseen JSON-LD. La entidad central de la empresa en la portada es invisible para el Knowledge Graph de Google.
2. **Inconsistencia de Videos en Schema.org:**  
   En `zyberia-os.html` hay un bloque JSON-LD con 4 `VideoObject` que declaran URLs que no existen o son idénticas (`assets/video nuevo.mp4`, `thumb_carga_celular.jpg`, etc.), con fechas de subida de prueba (`uploadDate: 2026-08-15`). Esto generará errores de validación en Google Search Console.
3. **Desconexión de Búsquedas Transaccionales Locales:**  
   Si bien se menciona *San Miguel de Tucumán*, no existen encabezados ni datos estructurados `LocalBusiness` con coordenadas, dirección física homologada (`Balcarce 24`) ni vinculación de teléfono con formato internacional unificado en todas las páginas.
4. **Desaprovechamiento de la intención comercial de búsqueda:**  
   Términos de altísima intención transaccional como *"sistema de gestión para ferreterías"*, *"software de stock y punto de venta"* o *"agencia de branding e identidad corporativa en Tucumán"* están presentes en párrafos descriptivos, pero ausentes de los títulos `<title>`, `<meta description>` y encabezados `<h1>`/`<h2>`.

---

## 2. Mapa Semántico y de Intenciones de Búsqueda

Se identifican tres clústeres temáticos principales que corresponden a las tres áreas de madurez de los clientes de Zyberia:

### Clúster A: Comunicación Estratégica, Marca y Presencia Digital
- **Entidades clave:** Identidad corporativa, manual de marca, diseño web institucional, landing pages de conversión, dirección de arte, copywriting comercial, producción audiovisual, SEO semántico local.
- **Intenciones dominantes:**
  - *Comercial / Investigativa:* Empresas buscando renovar su imagen antes de lanzar un producto.
  - *Transaccional Local:* Pymes de Tucumán y el NOA buscando quién diseñe su sitio web, catálogo o identidad.
- **Asignación:** `servicios.html` (Área 01) y `quienes-somos.html` (autoridad y portfolio histórico).

### Clúster B: Sistemas Comerciales y Software Operativo
- **Entidades clave:** Sistema de gestión comercial, software de inventario, punto de venta (POS), control de stock multicanal, catálogo web conectado, actualización masiva de precios, gestión de proveedores.
- **Intenciones dominantes:**
  - *Transaccional:* Comerciantes buscando sustituir planillas de Excel o sistemas contables rígidos.
  - *Verticalizada:* Dueños de ferreterías, repuesteras y corralones buscando software adaptado a miles de artículos.
- **Asignación:** `zyberia-os.html` (producto) y `caso-ferreteria.html` (caso de éxito real).

### Clúster C: Inteligencia Artificial en Procesos de Negocio
- **Entidades clave:** Empleados digitales, agentes de IA, procesamiento inteligente de comprobantes/facturas, automatización de compras, atención comercial por WhatsApp, supervisión humana en IA.
- **Intenciones dominantes:**
  - *Informativa / Exploratoria:* Empresarios curiosos sobre cómo aplicar IA fuera de un simple chatbot.
  - *Comercial de Alta Complejidad:* Empresas listas para implementar automatización operativa.
- **Asignación:** `zyberia-os.html` (equipo de agentes) y `servicios.html` (Área 03).

---

## 3. Matriz de Mapeo Semántico por URL

| URL | Función de la página | Tema Principal (Primary Keyword Focus) | Variantes Semánticas Secundarias | Intención de Búsqueda | Evidencia Actual en Contenido | Carencia / Oportunidad | Acción Recomendada |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `index.html` | Portada Corporativa e Institucional | **Empresa de Comunicación, Tecnología e Inteligencia Artificial** | Soluciones para empresas, empleados digitales, gestión comercial conectada, transición digital PyME | Navegacional / Comercial Mixta | Badge: `COMUNICACIÓN ESTRATÉGICA + TECNOLOGÍA + IA`. Titular de empleados digitales y datos desconectados. | Título actual muy genérico (`Zyberia \| Comunicación + Tecnología + IA`). Falta Schema `Organization` / `LocalBusiness`. | Optimizar `<title>` y meta description para capturar la propuesta integral. Agregar JSON-LD `Organization`. |
| `zyberia-os.html` | Landing Comercial de Producto | **Sistema de Gestión Comercial con IA para Empresas y Comercios** | Software de inventario y stock, punto de venta POS, catálogo online conectado, empleados digitales con IA | Transaccional / Comercial | Hero: *«La IA no vive en un chat. Vive en tu negocio»*. Scroll-telling de 6 actos. Módulo de Ferretería Pro. | Schema `VideoObject` con datos rotos/ficticios. Meta description puede reforzar la compatibilidad con mostrador/stock. | Corregir datos estructurados de video. Enriquecer H2 con entidades de stock, POS y catálogo. |
| `servicios.html` | Arquitectura de la Oferta | **Servicios de Comunicación Estratégica, Sistemas e Inteligencia Artificial** | Agencia de branding, diseño web para empresas, dirección de arte, desarrollo de sistemas, consultoría en IA | Comercial / Investigativa | Estructurado en 3 áreas: 01 Marca, 02 Sistemas, 03 IA. Enlaces con parámetros `?servicio=`. | Falta Schema `ItemList` o `Service`. No explota el SEO local para servicios de diseño y comunicación en Tucumán. | Agregar Schema `Service`. Añadir mención semántica de cobertura regional/nacional. |
| `quienes-somos.html` | Autoridad, E-E-A-T y Fundador | **Trayectoria de Diego Cardoso y Origen de Zyberia** | De Macintosh a la IA, dirección de arte AAAP, experiencia editorial El Gráfico, Waiser, diseño y sistemas | Informativa / De Autoridad | 8 etapas históricas detalladas. Citas textuales. Enfoque de oficio y sensibilidad gráfica. | Excelente cobertura biográfica. Podría vincularse semánticamente a entidades reconocidas mediante `sameAs` en JSON-LD. | Completar `sameAs` en JSON-LD de Diego Cardoso (perfiles públicos o referencias institucionales). |
| `contacto.html` | Conversión y Captura de Demanda | **Diagnóstico Comercial y Contacto con Zyberia** | Consultar por Zyberia OS, cotizar branding, asesoramiento comercial en Tucumán, WhatsApp directo | Transaccional Pura | Selector inteligente de 3 dimensiones, WhatsApp reactivo, base en San Miguel de Tucumán. | Falta marcado `ContactPage` y `LocalBusiness` con horario de atención y teléfono internacional. | Incorporar JSON-LD `ContactPage` con entidad local de Tucumán. |
| `caso-ferreteria.html` | Prueba de Campo y Caso de Éxito | **Caso de Estudio: Digitalización y Gestión con IA en Ferretería Pro** | Software para ferreterías, carga automática de facturas con IA, catálogo online ferretero, mostrador ágil | Comercial / Prueba Social | Narrativa paso a paso del mostrador real, la foto de la factura y la interfaz conectada. | Textos en mayúsculas de placeholders en el HTML que degradan la calidad del documento. CTA final apunta a home. | Reemplazar placeholders por esquemas visuales con `alt` descriptivos. Ajustar canonical y CTA. |

---

## 4. Auditoría de Metadatos, Encabezados y Jerarquía

### Análisis de `<title>` y `<meta description>`

1. **`index.html`**
   - **`<title>` actual:** `Zyberia | Comunicación + Tecnología + IA` (42 caracteres).  
     *Problema:* Desperdicia espacio útil para posicionar los servicios o el producto.  
     *Propuesta:* `Zyberia | Comunicación Estratégica, Sistemas de Gestión e IA para Empresas` (74 caracteres).
   - **`description` actual:** `Zyberia es una empresa de Comunicación + Tecnología + IA. Diseñamos soluciones para que tu empresa comunique, opere y crezca mejor.` (138 caracteres).  
     *Evaluación:* Buena, pero puede incluir la mención a los empleados digitales y la gestión comercial.

2. **`zyberia-os.html`**
   - **`<title>` actual:** `Zyberia OS | Sistema de Gestión Comercial con IA para Empresas` (60 caracteres).  
     *Evaluación:* Excelente. Conciso y alineado con la intención de búsqueda transaccional.
   - **`description` actual:** `Zyberia OS es un sistema de gestión comercial con IA que conecta inventario, ventas, POS, CRM y operación. Manejá tu empresa desde PC o celular.` (145 caracteres).  
     *Evaluación:* Muy adecuada.

3. **`servicios.html`**
   - **`<title>` actual:** `Servicios y Soluciones: Comunicación, Tecnología e IA | Zyberia` (63 caracteres).  
     *Evaluación:* Equilibrado.
   - **`description` actual:** `Servicios estratégicos de comunicación, desarrollo de sistemas comerciales y empleados digitales con IA. Soluciones adaptadas a la escala y madurez de cada empresa.` (169 caracteres).  
     *Evaluación:* Clara y abarcativa.

4. **`quienes-somos.html`**
   - **`<title>` actual:** `Quiénes Somos | De Macintosh a la Inteligencia Artificial — Zyberia` (65 caracteres).  
     *Evaluación:* Fuerte en branding y narrativa.

5. **`contacto.html`**
   - **`<title>` actual:** `Contacto & Diagnóstico | Zyberia — Hablemos de tu Proyecto` (59 caracteres).  
     *Evaluación:* Directo y natural.

6. **`caso-ferreteria.html`**
   - **`<title>` actual:** `Caso Ferretería: Transformación con Zyberia OS | Zyberia` (54 caracteres).  
     *Propuesta de mejora:* `Software para Ferreterías: Caso de Éxito Ferretería Pro con Zyberia OS` (70 caracteres). Ganaría relevancia para búsquedas verticales del rubro ferretero.

### Evaluación de Encabezados (H1, H2, H3)
- **H1 únicos:** Todas las páginas tienen exactamente un solo `<h1>`, con jerarquía visual y tipografía consistente (`Space Grotesk`).
- **Oportunidad en `index.html`:**  
  El `<h1>` actual es:
  > *«No hablás con una IA. Le hablás a un empleado.»*  
  Es un eslogan publicitario formidable para el visitante, pero para el motor de búsqueda carece del sustantivo que defina qué es la empresa.  
  *Recomendación semántica:* Mantener visualmente el titular, pero asegurar que el badge superior (`COMUNICACIÓN ESTRATÉGICA + TECNOLOGÍA + INTELIGENCIA ARTIFICIAL`) o un subtítulo inmediato aporte la entidad semántica formal.

---

## 5. Auditoría de Enlaces Internos y Señales de SEO Local

### Enlazado Interno (Internal Linking)
- **Navegación principal consistente:** Las 5 páginas clave (`index`, `zyberia-os`, `servicios`, `quienes-somos`, `contacto`) están mutuamente enlazadas en navbar y footer.
- **Pase de autoridad hacia Ferretería Pro:** `index.html`, `zyberia-os.html` y `servicios.html` enlazan a `caso-ferreteria.html`.
- **Falla detectada de retroenlace:** Al final de `caso-ferreteria.html`, el botón de cierre enlaza a `index.html#contacto` en lugar de dirigir a `contacto.html?servicio=zyberia-os`, rompiendo la continuidad del embudo de conversión.

### Señales Geográficas y SEO Local
- **Base comprobada:** San Miguel de Tucumán, Tucumán, Argentina.
- **Dirección física declarada:** `Balcarce 24, San Miguel de Tucumán` (presente en footer de `zyberia-os.html`).
- **Teléfono unificado:** `+54 9 381 622-3403`.
- **Brecha semántica local:** No existe una ficha Schema.org de tipo `LocalBusiness` en la portada ni en contacto. Esto impide que los algoritmos de Google Maps y búsqueda local asocien a Zyberia como proveedor tecnológico y de comunicación en el Noroeste Argentino (NOA).

---

## 6. Estado de Indexabilidad y Datos Estructurados

| URL | Canonical declarado | Robots Meta | JSON-LD Actual | Estado de Validación |
| :--- | :--- | :--- | :--- | :--- |
| `index.html` | `https://zyberia.com.ar/` | `index, follow` | **Ausente** | Requiere agregar `Organization` y `WebSite`. |
| `zyberia-os.html` | `https://zyberia.com.ar/zyberia-os.html` | `index, follow` | `SoftwareApplication` + `VideoObject` (4 items) | **Riesgo:** Los 4 videos tienen rutas y datos ficticios (`uploadDate 2026-08-15`, `video nuevo.mp4`). Debe limpiarse para no generar advertencias en Search Console. |
| `servicios.html` | `https://zyberia.com.ar/servicios.html` | `index, follow` | **Ausente** | Oportunidad para `Service` con las 3 áreas. |
| `quienes-somos.html` | `https://zyberia.com.ar/quienes-somos.html` | `index, follow` | `AboutPage` + `Person` (Diego Cardoso) | **Válido y correcto.** |
| `contacto.html` | `https://zyberia.com.ar/contacto.html` | `index, follow` | **Ausente** | Oportunidad para `ContactPage` y `LocalBusiness`. |
| `caso-ferreteria.html` | `https://zyberia.com.ar/caso-ferreteria.html` | `index, follow` | `CreativeWork` | **Válido.** |

---

## 7. Estrategia Semántica para los Tres Videos Reales de Zyberia OS

La grabación planificada de demostraciones reales en pantalla del sistema representa el activo de contenido e indexación más valioso para la credibilidad del software. A continuación se establece el protocolo de presentación semántica para cada pieza:

---

### Video 1: Consulta operativa al agente Juan (Tratamiento de pileta)
- **Escenario:** Un usuario pregunta cuántas pastillas de cloro se necesitan para tratar una pileta de 1.000 litros. El agente interpreta la necesidad y consulta las instrucciones y fichas técnicas del inventario.
- **Intención de búsqueda atendida:** *Demostración de IA respondiendo sobre productos técnicos de inventario sin inventar respuestas.*
- **Página de inserción recomendada:** `zyberia-os.html` (en la sección del Agente Central Juan) y réplica en `index.html` (sección `#agentes`).
- **Título descriptivo:** *Demostración: Agente Juan resolviendo una consulta técnica de aplicación de producto en Zyberia OS*.
- **Descripción breve:** *Mirá cómo Juan interpreta la consulta del cliente, verifica la ficha técnica del producto en el inventario y calcula la recomendación precisa según las instrucciones del fabricante.*
- **Texto introductorio y contexto:**
  > *«Un agente comercial no debe inventar dosis universales ni arriesgar recomendaciones a ciegas. Mirá cómo Juan recibe una consulta sobre el tratamiento de una pileta de 1.000 litros, consulta la información cargada del producto específico y brinda la indicación exacta según las especificaciones técnicas.»*
- **Requisitos de accesibilidad y SEO:**
  - Subtítulos incrustados o archivo WebVTT con la transcripción exacta.
  - Atributo `aria-label` descriptivo en el botón reproductor.
- **Datos estructurados:** Marcado `VideoObject` con nombre, descripción real, miniatura generada (`videos/posters/poster-juan-demo.jpg`) y URL pública del archivo MP4.

---

### Video 2: Consulta comercial y asesoramiento de mostrador (Mancha en la pared)
- **Escenario:** Un cliente consulta qué producto necesita para solucionar una mancha en una pared. El agente no arroja un producto al azar: pregunta el tipo de mancha (humedad, grasa, moho), la superficie y el estado de la pintura antes de sugerir el artículo del catálogo.
- **Intención de búsqueda atendida:** *Asistente comercial con IA para catálogo web y WhatsApp que asesora antes de vender.*
- **Página de inserción recomendada:** `zyberia-os.html` (sección Atención Comercial / WhatsApp) y `caso-ferreteria.html` (como ejemplo de interacción con clientes).
- **Título descriptivo:** *Demostración: Asesoramiento comercial en catálogo web con Zyberia OS*.
- **Descripción breve:** *El agente Mateo indaga el problema específico del cliente (tipo de superficie y origen de la mancha) para recomendar la solución correcta del inventario.*
- **Texto introductorio y contexto:**
  > *«En el mostrador tradicional, un buen vendedor no entrega el primer producto que ve: pregunta qué causó el problema. En esta demostración, el agente comercial recibe una consulta sobre manchas en la pared, clasifica el tipo de daño y guía al cliente hacia la solución adecuada disponible en el catálogo.»*
- **Datos estructurados:** Marcado `VideoObject` asociado a la capacidad de venta multicanal y catálogo en vivo.

---

### Video 3: Procesamiento inteligente de facturas y remitos
- **Escenario:** Se fotografía o escanea una factura física de proveedor con múltiples renglones. La IA extrae artículos, cantidades, costos e IVA, y el sistema los incorpora al inventario actualizando listas de precios.
- **Intención de búsqueda atendida:** *Carga automática de facturas con IA, automatización de compras y digitalización de inventario.*
- **Página de inserción recomendada:** `caso-ferreteria.html` (reemplazando el bloque provisional de paso 03) y `zyberia-os.html` (módulo de compras de Roberto).
- **Título descriptivo:** *Demostración: Carga de facturas de proveedores al inventario mediante IA en Zyberia OS*.
- **Descripción breve:** *Digitalización instantánea de comprobantes físicos: la IA extrae datos de la factura y sincroniza stock y costos en el sistema.*
- **Texto introductorio y contexto:**
  > *«Eliminá las horas de carga manual de artículos y listas de proveedores. En este video se aprecia el flujo completo: una fotografía de la factura física es interpretada por el sistema, extrayendo códigos, cantidades y precios para su ingreso directo al inventario tras la validación humana.»*
- **Datos estructurados:** Marcado `VideoObject` como demostración operativa del sistema.

---

## 8. Arquitectura SEO y Recomendación de Páginas Futuras

La arquitectura actual de seis páginas nucleares cubre con solidez las intenciones principales sin canibalización:
1. `index.html`: Identidad corporativa integral y propuesta de valor.
2. `zyberia-os.html`: Producto tecnológico y empleados digitales.
3. `servicios.html`: Las 3 áreas de servicios contratable por separado o en conjunto.
4. `quienes-somos.html`: Historia, trayectoria de Diego Cardoso y legitimidad institucional.
5. `contacto.html`: Captura de demanda y canal directo.
6. `caso-ferreteria.html`: Prueba de campo empírica.

### ¿Se justifican nuevas URLs hoy?
**No antes de publicar.** Crear páginas satélite adicionales (como `/software-ferreterias.html` o `/agencia-comunicacion-tucuman.html`) sin tener tráfico ni autoridad previa diluiría el rastreo y generaría contenido delgado (*thin content*).  
La estrategia correcta es consolidar la autoridad de estas 6 URLs principales y, en una **Segunda Etapa**, evaluar landings temáticas basadas en datos de Search Console.

---

## 9. Lista Priorizada de Hallazgos y Correcciones

### P0 — Bloqueantes de Indexación y Calidad (Imprescindibles antes de publicar)
- **P0-1: Saneamiento de Schema VideoObject ficticio en `zyberia-os.html`:**  
  *Evidencia:* Líneas 55-92 de `zyberia-os.html` declaran 4 videos con la misma URL `assets/video nuevo.mp4` y miniaturas inexistentes (`thumb_carga_celular.jpg`).  
  *Impacto:* Errores de datos estructurados no válidos en Google Search Console.  
  *Acción:* Limpiar o comentar ese bloque hasta que los 3 videos reales de mañana estén grabados y subidos con sus metadatos genuinos.
- **P0-2: Eliminación de textos provisionales en `caso-ferreteria.html`:**  
  *Evidencia:* Textos `FOTO REAL DEL LOCAL / MOSTRADOR`, `FACTURAS IMPRESAS / CARGA MANUAL`, `CAPTURA DASHBOARD ZYBERIA OS`.  
  *Impacto:* Señal de documento en borrador o incompleto para usuarios y evaluadores de calidad.  
  *Acción:* Reemplazar los textos provisorios por diagramas estilizados o capturas limpias.

### P1 — Mejoras Semánticas de Alto Impacto (Previas a publicación)
- **P1-1: Incorporar JSON-LD `Organization` y `LocalBusiness` en `index.html` y `contacto.html`:**  
  Declarar nombre (*Zyberia*), base en *San Miguel de Tucumán, Argentina*, teléfono oficial (`+54 9 381 622-3403`), logotipo y coordenadas geográficas.
- **P1-2: Optimizar el `<title>` de `index.html`:**  
  Cambiar de `Zyberia | Comunicación + Tecnología + IA` a un título con mayor densidad semántica para empresas (`Zyberia | Comunicación Estratégica, Sistemas de Gestión e IA para Empresas`).
- **P1-3: Corregir enlace final en `caso-ferreteria.html`:**  
  Cambiar `href="index.html#contacto"` por `href="contacto.html?servicio=zyberia-os"`.
- **P1-4: Unificar teléfono en script `main.js`:**  
  Reemplazar el número de prueba de Buenos Aires (`5491112345678`) por el real de Tucumán (`5493816223403`).

### P2 — Segunda Etapa (Post-Lanzamiento y Grabación de Videos)
- **P2-1: Carga e integración de los 3 videos reales de Zyberia OS:**  
  Subir los archivos grabados, generar miniaturas póster HD y dar de alta su esquema `VideoObject` con transcripciones.
- **P2-2: Marcado `Service` detallado en `servicios.html`:**  
  Definir en JSON-LD los tres servicios estructurados con sus modalidades de contratación.
- **P2-3: Ficha de Google Business Profile (Google Mi Negocio):**  
  Configurar y verificar la ficha local en San Miguel de Tucumán para respaldar el posicionamiento en el mapa local.

---

## 10. Conclusión y Veredicto SEO

El sitio posee una base semántica auténtica, con un discurso comercial propio y diferenciado que responde a dolores reales de negocio. Con las correcciones de P0 y P1 detalladas en este informe, Zyberia estará lista para ser indexada por los motores de búsqueda con una arquitectura sólida, libre de errores estructurales y preparada para recibir las demostraciones audiovisuales en video real.
