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
});
