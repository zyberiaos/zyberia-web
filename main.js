document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 ZYBERIA Master Tech Web Initialized with Particles Canvas Engine');

  // 1. Reveal Elements on Scroll
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // 2. Interactive Text Effect (de zyberia-os-landing)
  const heroWhite = document.querySelector('.hero-white');
  const interactiveText = document.querySelector('.interactive-text');
  
  if (heroWhite && interactiveText) {
      heroWhite.addEventListener('mousemove', (e) => {
          const rect = heroWhite.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const moveX = (x - centerX) / 20;
          const moveY = (y - centerY) / 20;
          
          interactiveText.style.textShadow = `${-moveX}px ${-moveY}px 25px rgba(0,0,0,0.12), ${-moveX/2}px ${-moveY/2}px 40px rgba(0,0,0,0.08)`;
          interactiveText.style.transform = `translate(${moveX/4}px, ${moveY/4}px)`;
      });

      heroWhite.addEventListener('mouseleave', () => {
          interactiveText.style.transition = 'all 0.5s ease-out';
          interactiveText.style.textShadow = '0 0 0 rgba(0,0,0,0)';
          interactiveText.style.transform = 'translate(0, 0)';
          setTimeout(() => {
              interactiveText.style.transition = 'text-shadow 0.15s ease-out, transform 0.15s ease-out';
          }, 500);
      });
  }

  // 3. Canvas Particles Engine (Fondo Interactivo con Movimiento de Partículas)
  const canvas = document.getElementById('particles-bg');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
    let height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    });

    const particles = [];
    const numParticles = 65;
    let mouse = { x: null, y: null };

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.radius = Math.random() * 2.5 + 1;
        this.color = Math.random() > 0.4 ? 'rgba(248, 231, 28, 0.6)' : 'rgba(0, 0, 0, 0.15)';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            this.x += dx * 0.02;
            this.y += dy * 0.02;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(248, 231, 28, ${0.25 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // 4. Video Scroll Scrubbing Engine (EXACTO ZYBERIA-OS-LANDING)
  const video = document.getElementById('scrolltelling-video');
  const videoContainer = document.getElementById('scrolltelling');
  
  if (video && videoContainer) {
      const updateVideo = () => {
          if (!video.duration || isNaN(video.duration)) return;

          const sectionTop = videoContainer.offsetTop;
          const containerHeight = videoContainer.offsetHeight;
          const viewportHeight = window.innerHeight;
          const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
          
          let progress = (scrollPos - sectionTop) / (containerHeight - viewportHeight);
          progress = Math.max(0, Math.min(1, progress));

          video.currentTime = video.duration * progress;

          const statusText = document.getElementById('video-scroll-status');
          if (statusText) {
            if (progress <= 0) {
              statusText.textContent = 'Scrolleá para avanzar la película ➔';
            } else if (progress >= 0.98) {
              statusText.textContent = '✅ Película completada — Seguí bajando';
            } else {
              statusText.textContent = `Progreso de la película: ${Math.round(progress * 100)}%`;
            }
          }
      };

      window.addEventListener('scroll', updateVideo, { passive: true });
      video.addEventListener('loadedmetadata', updateVideo);
      video.addEventListener('canplay', updateVideo);
      setTimeout(updateVideo, 500);
      updateVideo();
  }

  // 5. Dynamic Slack Chat Feed Simulation
  const slackFeed = document.querySelector('.slack-messages');
  const simulatedChatEvents = [
    { time: '10:45', author: 'author-valentina', name: 'Valentina', text: 'Analicé el inventario: 18 taladros Inalámbricos con rotación < 5% en los últimos 45 días.' },
    { time: '10:46', author: 'author-enzo', name: 'Enzo', text: 'Flyer publicitario estilo Industrial renderizado en vector (-15% OFF).' },
    { time: '10:47', author: 'author-lucas', name: 'Lucas', text: 'Publicación enviada automáticamente a Facebook Marketplace y catálogo web.' },
    { time: '10:49', author: 'author-mateo', name: 'Mateo', text: '3 clientes frecuentes recontactados por WhatsApp con la nueva oferta.' },
    { time: '10:52', author: 'author-system', name: 'Sistema', text: '✅ Venta concretada: $89.500. Notificación enviada a depósito. ROI positivo.', isSuccess: true }
  ];

  let chatIndex = 0;
  setInterval(() => {
    if (!slackFeed) return;
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const ev = simulatedChatEvents[chatIndex % simulatedChatEvents.length];

    const msgDiv = document.createElement('div');
    msgDiv.className = ev.isSuccess ? 'slack-msg success' : 'slack-msg';
    msgDiv.style.opacity = '0';
    msgDiv.style.transform = 'translateY(-10px)';
    msgDiv.style.transition = 'all 0.4s ease';

    msgDiv.innerHTML = `
      <span class="time">${timeStr}</span>
      <strong class="author ${ev.author}">${ev.name}</strong>
      <p class="text">${ev.text}</p>
    `;

    slackFeed.appendChild(msgDiv);

    setTimeout(() => {
      msgDiv.style.opacity = '1';
      msgDiv.style.transform = 'translateY(0)';
    }, 50);

    if (slackFeed.children.length > 8) {
      slackFeed.removeChild(slackFeed.firstChild);
    }

    chatIndex++;
  }, 4500);

  // 6. Interactive Industry Pills Filter
  const indPills = document.querySelectorAll('.ind-pill');
  indPills.forEach(pill => {
    pill.addEventListener('click', () => {
      indPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // 7. Form Submission
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias por solicitar tu diagnóstico comercial con Zyberia! Un especialista en tecnología comercial se comunicará en menos de 24hs.');
      form.reset();
    });
  }

  // 8. HERO SCROLLTELLING STAGE CONTROLLER (8 ESCENAS CINEMATOGRÁFICAS)
  const heroProgressFill = document.getElementById('hero-progress-fill');
  const heroStepLabel = document.getElementById('hero-step-label');
  const dotsNav = document.querySelectorAll('.stage-dots-nav .dot');

  const stepsData = [
    { label: "PASO 1 / 8 — CAPTURAR PRODUCTO", sceneId: "scene-01", progress: "12%" },
    { label: "PASO 2 / 8 — ESCANEO EAN Y RECONOCIMIENTO", sceneId: "scene-01", progress: "25%" },
    { label: "PASO 3 / 8 — ANÁLISIS TÉCNICO IA", sceneId: "scene-04", progress: "38%" },
    { label: "PASO 4 / 8 — FICHA INTELIGENTE CONSTRUIDA", sceneId: "scene-04", progress: "52%" },
    { label: "PASO 5 / 8 — EVALUACIÓN DE MERCADO Y MARGEN", sceneId: "scene-04", progress: "65%" },
    { label: "PASO 6 / 8 — ⚡ OPORTUNIDAD DETECTADA", sceneId: "scene-06", progress: "78%" },
    { label: "PASO 7 / 8 — PIEZA COMERCIAL GENERADA", sceneId: "scene-07", progress: "90%" },
    { label: "PASO 8 / 8 — LISTO PARA VENDER MULTICANAL", sceneId: "scene-07", progress: "100%" }
  ];

  let currentHeroStep = 0;

  function setHeroStep(stepIndex) {
    if (stepIndex < 0 || stepIndex >= stepsData.length) return;
    currentHeroStep = stepIndex;
    const step = stepsData[stepIndex];

    if (heroProgressFill) heroProgressFill.style.width = step.progress;
    if (heroStepLabel) heroStepLabel.innerText = step.label;

    dotsNav.forEach((dot, idx) => {
      if (idx === stepIndex) dot.classList.add('active');
      else dot.classList.remove('active');
    });

    const scenes = document.querySelectorAll('.scene-layer');
    scenes.forEach(scene => scene.classList.remove('active'));

    const targetScene = document.getElementById(step.sceneId);
    if (targetScene) targetScene.classList.add('active');
  }

  // Dots Interaction
  dotsNav.forEach((dot, idx) => {
    dot.addEventListener('click', () => setHeroStep(idx));
  });

  // Hero Scroll Progress Listener
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const heroRect = heroSection.getBoundingClientRect();
      const heroHeight = heroSection.offsetHeight;
      if (heroRect.bottom > 0 && heroRect.top < window.innerHeight) {
        const scrolled = Math.max(0, -heroRect.top);
        const ratio = scrolled / (heroHeight - window.innerHeight || 1);
        const mappedStep = Math.min(7, Math.floor(ratio * 8));
        if (mappedStep !== currentHeroStep && mappedStep >= 0) {
          setHeroStep(mappedStep);
        }
      }
    });
  }

  // 9. CHAT-FEED NOTIFICATION SCROLLTELLING SYNCRONIZER
  const chatFeedSection = document.getElementById('chat-feed');
  const slackMessages = document.querySelector('.slack-messages');
  if (chatFeedSection && slackMessages) {
    window.addEventListener('scroll', () => {
      const rect = chatFeedSection.getBoundingClientRect();
      const sectionHeight = chatFeedSection.offsetHeight;
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const scrolled = Math.max(0, window.innerHeight - rect.top);
        const ratio = Math.min(1, Math.max(0, scrolled / (sectionHeight + window.innerHeight * 0.4)));
        const maxScroll = slackMessages.scrollHeight - slackMessages.clientHeight;
        if (maxScroll > 0) {
          slackMessages.scrollTop = ratio * maxScroll;
        }
      }
    });
  }
  // 10. FICHA INTELIGENTE - MOCKUP DROPDOWN
  const iaBtn = document.querySelector('.ia-btn');
  const iaDropdown = document.querySelector('.ia-dropdown');
  if (iaBtn && iaDropdown) {
    iaBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      iaDropdown.style.display = iaDropdown.style.display === 'none' || iaDropdown.style.display === '' ? 'block' : 'none';
    });

    const closeDropdown = document.querySelector('.ia-dropdown span[style*="cursor: pointer"]');
    if (closeDropdown) {
      closeDropdown.addEventListener('click', () => {
        iaDropdown.style.display = 'none';
      });
    }

    document.addEventListener('click', (e) => {
      if (!iaDropdown.contains(e.target) && !iaBtn.contains(e.target)) {
        iaDropdown.style.display = 'none';
      }
    });
  }

  // 11. CAROUSEL OFICINAS
  const carouselTrack = document.getElementById('carousel-track');
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (carouselTrack && carouselSlides.length > 0 && prevBtn && nextBtn) {
    let currentSlide = 0;

    function updateCarousel() {
      carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
      carouselSlides.forEach((slide, index) => {
        if (index === currentSlide) {
          slide.classList.add('active-slide');
        } else {
          slide.classList.remove('active-slide');
        }
      });
    }

    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % carouselSlides.length;
      updateCarousel();
    });

    // Inicializar
    updateCarousel();
  }

  // 12. BILLING TOGGLE (PLANES)
  const billingCheckbox = document.getElementById('billing-period-checkbox');
  const priceValues = document.querySelectorAll('.price-value');
  const periodLabels = document.querySelectorAll('.period');
  const monthlyLabel = document.querySelector('.billing-monthly');
  const yearlyLabel = document.querySelector('.billing-yearly');

  if (billingCheckbox) {
      billingCheckbox.addEventListener('change', (e) => {
          const isYearly = e.target.checked;
          
          if (isYearly) {
              monthlyLabel.classList.remove('active');
              yearlyLabel.classList.add('active');
          } else {
              yearlyLabel.classList.remove('active');
              monthlyLabel.classList.add('active');
          }

          priceValues.forEach(el => {
              // Animación simple de desvanecimiento
              el.style.opacity = 0;
              setTimeout(() => {
                  el.textContent = isYearly ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly');
                  el.style.opacity = 1;
              }, 200);
          });
          
          periodLabels.forEach(el => {
              el.style.opacity = 0;
              setTimeout(() => {
                  el.textContent = isYearly ? '/mes (facturado anual)' : '/mes';
                  el.style.opacity = 1;
              }, 200);
          });
      });
  }
  // --- Dynamic Form Intent Switcher ---
  const areaRadios = document.querySelectorAll('input[name="area_potenciar"]');
  const formTitle = document.getElementById('form-intent-title');
  const formTextarea = document.getElementById('form-intent-textarea');
  const formBtn = document.getElementById('form-intent-btn');

  if (areaRadios.length > 0 && formTitle && formTextarea && formBtn) {
    const updateFormIntent = (val) => {
      if (val === 'operar') {
        formTitle.textContent = 'Cotizar Proyecto a Medida';
        formTextarea.placeholder = 'Describí brevemente tu proceso operativo actual y qué te gustaría automatizar, integrar o desarrollar...';
        formBtn.textContent = 'Cotizar Proyecto a Medida ➔';
      } else if (val === 'zyberia_os') {
        formTitle.textContent = 'Solicitar Demo de Zyberia OS';
        formTextarea.placeholder = 'Contanos sobre tu negocio (rubro, locales, sistemas que usás actualmente y volumen de productos)...';
        formBtn.textContent = 'Solicitar Demo Real ➔';
      } else {
        // comunicar o crecer
        formTitle.textContent = 'Solicitar Diagnóstico Comercial';
        formTextarea.placeholder = 'Contanos brevemente sobre tu negocio y tus objetivos en comunicación, imagen o captación de clientes...';
        formBtn.textContent = 'Solicitar Diagnóstico Comercial ➔';
      }
    };

    areaRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        updateFormIntent(e.target.value);
      });
    });
  }

});

/* ==================================================
   MATEO — WHATSAPP COMMERCIAL AI BOT LOGIC (SUPERCHARGED + AGENCY SERVICES)
   ================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('wa-bot-trigger');
    const modal = document.getElementById('wa-bot-modal');
    const closeBtn = document.getElementById('wa-bot-close');
    const form = document.getElementById('wa-bot-form');
    const input = document.getElementById('wa-bot-input');
    const messagesContainer = document.getElementById('wa-bot-messages');

    if (!trigger || !modal) return;

    // Toggle Modal
    trigger.addEventListener('click', () => {
        const isHidden = modal.style.display === 'none' || modal.style.display === '';
        modal.style.display = isHidden ? 'flex' : 'none';
        if (isHidden && input) input.focus();
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    const appendMessage = (sender, text, isHtml = false, showWaBtn = false, waCustomText = '') => {
        const msgDiv = document.createElement('div');
        msgDiv.style.maxWidth = '88%';
        msgDiv.style.fontSize = '0.83rem';
        msgDiv.style.lineHeight = '1.45';
        msgDiv.style.padding = '10px 14px';
        msgDiv.style.borderRadius = '14px';
        msgDiv.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

        if (sender === 'user') {
            msgDiv.style.background = '#005c4b';
            msgDiv.style.color = '#e9edef';
            msgDiv.style.alignSelf = 'flex-end';
            msgDiv.style.borderRadius = '14px 0px 14px 14px';
        } else {
            msgDiv.style.background = '#202c33';
            msgDiv.style.color = '#e9edef';
            msgDiv.style.alignSelf = 'flex-start';
            msgDiv.style.borderLeft = '3px solid #25D366';
            msgDiv.style.borderRadius = '0px 14px 14px 14px';
        }

        if (isHtml) {
            msgDiv.innerHTML = text;
        } else {
            msgDiv.textContent = text;
        }

        if (showWaBtn) {
            const btnText = waCustomText || '📲 Solicitar Asesoramiento por WhatsApp ➔';
            const waBtn = document.createElement('a');
            waBtn.href = 'https://wa.me/5491112345678?text=Hola%20Zyberia!%20Quiero%20asesoramiento%20sobre%20los%20servicios%20de%20comunicacion%20y%20el%20sistema%20Zyberia%20OS';
            waBtn.target = '_blank';
            waBtn.style.display = 'inline-flex';
            waBtn.style.alignItems = 'center';
            waBtn.style.gap = '6px';
            waBtn.style.marginTop = '10px';
            waBtn.style.background = '#25D366';
            waBtn.style.color = '#111b21';
            waBtn.style.padding = '7px 14px';
            waBtn.style.borderRadius = '12px';
            waBtn.style.fontWeight = '700';
            waBtn.style.fontSize = '0.76rem';
            waBtn.style.textDecoration = 'none';
            waBtn.innerHTML = btnText;
            msgDiv.appendChild(waBtn);
        }

        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const processBotReply = (query) => {
        const q = query.toLowerCase();

        if (q.includes('whatsapp_real')) {
            window.open('https://wa.me/5491112345678?text=Hola%20Zyberia!%20Quiero%20consultar%20por%20servicios%20de%20comunicacion%20o%20el%20sistema%20Zyberia%20OS', '_blank');
            appendMessage('bot', '¡Perfecto! Te abrí una ventana de WhatsApp directo para hablar con un especialista de Zyberia.', false);
            return;
        }

        if (q.includes('servicios_agencia') || q.includes('servicios') || q.includes('agencia') || q.includes('diseño') || q.includes('arte') || q.includes('marca') || q.includes('branding') || q.includes('marketing') || q.includes('publicidad') || q.includes('copywriting')) {
            appendMessage('bot', '<strong>🎨 Servicios de Agencia — Zyberia Comunicación:</strong><br><br>Zyberia no es solo software; somos una agencia integral de Comunicación + Tecnología + IA:<br><br>• 🖼️ <strong>Dirección de Arte & Diseño Visual:</strong> Identidad de marca, branding, diseño de packaging y flyers promocionales HD para tu catálogo y redes.<br>• 📣 <strong>Marketing Digital & e-Advertising:</strong> Estrategia publicitaria, campañas de captación de prospectos y embudos de conversión.<br>• ✍️ <strong>Copywriting & Estrategia Comercial:</strong> Redacción persuasiva, promociones por volumen y posicionamiento.<br>• 🛠️ <strong>Implementación a Medida:</strong> Diagnóstico de procesos, carga inicial de productos y configuración personalizada para tu empresa.', true, true, '📲 Consultar Servicios de Agencia en WhatsApp ➔');
        } else if (q.includes('como_funciona') || q.includes('como funciona') || q.includes('funcionamiento') || q.includes('que es')) {
            appendMessage('bot', '<strong>⚡ ¿Cómo funciona Zyberia OS?</strong><br><br>Zyberia OS es el motor comercial de tu negocio. Conecta 3 pilares en una sola operación:<br><br>1. 📦 <strong>Sistema de Gestión:</strong> Manejás inventario, stock, ventas (POS), compras, proveedores, clientes y caja desde PC o celular.<br>2. 🤖 <strong>Agencia IA:</strong> 8 agentes inteligentes (Juan, Valentina, Camila, Enzo, Lucas, Mateo, Roberto, Sofía) trabajan sobre tus datos reales para detectar productos inmovilizados, proteger márgenes y automatizar ofertas.<br>3. 💻 <strong>Catálogo Web & WhatsApp:</strong> Tu catálogo online se actualiza solo en tiempo real con tu stock y vendés directo por WhatsApp.', true, true, '📲 Ver una Demo Guiada por WhatsApp ➔');
        } else if (q.includes('precios_planes') || q.includes('precio') || q.includes('plan') || q.includes('costo') || q.includes('cuanto cuesta') || q.includes('valor')) {
            appendMessage('bot', '<strong>💰 Planes y Propuesta Comercial:</strong><br><br>Zyberia ofrece soluciones integrales adaptadas a tu empresa:<br><br>• 🟢 <strong>Plan Control:</strong> Orden operativo total. Gestión de productos, stock, ventas (POS), caja y catálogo web público.<br>• 🔵 <strong>Plan Comprensión:</strong> Control + Reportes financieros, margen ciego, análisis de rentabilidad y alertas de sobrestock.<br>• 🟡 <strong>Plan Crecimiento:</strong> Ecosistema completo con los 8 Agentes IA trabajando 24/7 sobre tu negocio + Servicios de Agencia y comunicación comercial.<br><br>¿Te gustaría recibir una cotización a medida para tu empresa?', true, true, '📲 Solicitar Cotización Personalizada ➔');
        } else if (q.includes('producto') || q.includes('stock') || q.includes('inventario') || q.includes('código') || q.includes('escaner') || q.includes('factura')) {
            appendMessage('bot', '<strong>🔍 Gestión Inteligente de Productos:</strong><br><br>• 📱 <strong>Carga desde Celular:</strong> Sacás una foto al producto o factura, definís margen y la IA se encarga de cargarlo.<br>• 📷 <strong>Lector de Código de Barras:</strong> Usás la cámara para buscar productos y actualizar stock en segundos.<br>• 🏷️ <strong>Aumento Masivo de Precios:</strong> Cambian los costos del proveedor y aplicás aumentos porcentuales en 1-clic a toda la categoría.<br>• 🧠 <strong>Agente Juan:</strong> Supervisa productos inmovilizados para que no tengas capital parado.', true, true);
        } else if (q.includes('agente') || q.includes('ia') || q.includes('equipo') || q.includes('quien')) {
            appendMessage('bot', '<strong>🤖 Los 8 Agentes Especializados de Zyberia OS:</strong><br><br>• 🧠 <strong>Juan:</strong> Inteligencia de Inventario & Rotación<br>• 📊 <strong>Valentina:</strong> CFO Digital & Margen Financiero<br>• 📱 <strong>Camila:</strong> Marketing & Promociones<br>• 🎨 <strong>Enzo:</strong> Dirección de Arte & Flyers HD<br>• 💼 <strong>Lucas:</strong> Seguimiento de Presupuestos<br>• 💬 <strong>Mateo:</strong> WhatsApp Commercial Agent (¡Yo!)<br>• 📦 <strong>Roberto:</strong> Compras & Proveedores<br>• 🎯 <strong>Sofía:</strong> Leads & Calificación de Prospectos', true, true);
        } else {
            appendMessage('bot', '<strong>Zyberia — Comunicación + Tecnología + IA.</strong><br><br>Te asesoramos tanto en soluciones de software (Zyberia OS) como en servicios de agencia (Diseño, Branding, Marketing e Implementación).<br><br>¿Querés hablar con un especialista para tu negocio?', true, true, '📲 Chatear por WhatsApp Real ➔');
        }
    };

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input ? input.value.trim() : '';
            if (!text) return;
            appendMessage('user', text);
            if (input) input.value = '';
            setTimeout(() => {
                processBotReply(text);
            }, 400);
        });
    }

    if (messagesContainer) {
        messagesContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.wa-pill-btn');
            if (btn) {
                const query = btn.getAttribute('data-query');
                const label = btn.textContent;
                appendMessage('user', label);
                setTimeout(() => {
                    processBotReply(query);
                }, 300);
            }
        });
    }
});
