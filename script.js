/**
 * EXPLODELABS — PREMIUM LANDING PAGE
 * All interactive effects and animations
 * Vanilla JavaScript, zero dependencies (except simplex noise inline)
 */

// ============================================
// SIMPLEX NOISE (inline implementation)
// ============================================
class SimplexNoise {
  constructor(seed = Math.random()) {
    this.p = new Uint8Array(512);
    this.pm = new Uint8Array(512);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    // Shuffle with seed
    let s = seed * 12345;
    for (let i = 255; i > 0; i--) {
      s = (s * 16807 + 0) % 2147483647;
      const j = s % (i + 1);
      [p[i], p[j]] = [p[j], p[i]];
    }
    for (let i = 0; i < 512; i++) {
      this.p[i] = p[i & 255];
      this.pm[i] = this.p[i] % 12;
    }
    this.grad3 = [
      [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
      [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
      [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
    ];
  }

  noise3D(x, y, z) {
    const grad3 = this.grad3;
    const pm = this.pm;
    const p = this.p;
    const F3 = 1/3, G3 = 1/6;
    let s = (x + y + z) * F3;
    let i = Math.floor(x + s), j = Math.floor(y + s), k = Math.floor(z + s);
    let t = (i + j + k) * G3;
    let x0 = x - (i - t), y0 = y - (j - t), z0 = z - (k - t);
    let i1, j1, k1, i2, j2, k2;
    if (x0 >= y0) {
      if (y0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=1;k2=0; }
      else if (x0 >= z0) { i1=1;j1=0;k1=0;i2=1;j2=0;k2=1; }
      else { i1=0;j1=0;k1=1;i2=1;j2=0;k2=1; }
    } else {
      if (y0 < z0) { i1=0;j1=0;k1=1;i2=0;j2=1;k2=1; }
      else if (x0 < z0) { i1=0;j1=1;k1=0;i2=0;j2=1;k2=1; }
      else { i1=0;j1=1;k1=0;i2=1;j2=1;k2=0; }
    }
    let x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
    let x2 = x0 - i2 + 2*G3, y2 = y0 - j2 + 2*G3, z2 = z0 - k2 + 2*G3;
    let x3 = x0 - 1 + 3*G3, y3 = y0 - 1 + 3*G3, z3 = z0 - 1 + 3*G3;
    let ii = i & 255, jj = j & 255, kk = k & 255;
    let n0, n1, n2, n3;
    let t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
    if (t0 < 0) n0 = 0;
    else { t0 *= t0; n0 = t0 * t0 * (grad3[pm[ii+p[jj+p[kk]]]][0]*x0 + grad3[pm[ii+p[jj+p[kk]]]][1]*y0 + grad3[pm[ii+p[jj+p[kk]]]][2]*z0); }
    let t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
    if (t1 < 0) n1 = 0;
    else { t1 *= t1; n1 = t1 * t1 * (grad3[pm[ii+i1+p[jj+j1+p[kk+k1]]]][0]*x1 + grad3[pm[ii+i1+p[jj+j1+p[kk+k1]]]][1]*y1 + grad3[pm[ii+i1+p[jj+j1+p[kk+k1]]]][2]*z1); }
    let t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
    if (t2 < 0) n2 = 0;
    else { t2 *= t2; n2 = t2 * t2 * (grad3[pm[ii+i2+p[jj+j2+p[kk+k2]]]][0]*x2 + grad3[pm[ii+i2+p[jj+j2+p[kk+k2]]]][1]*y2 + grad3[pm[ii+i2+p[jj+j2+p[kk+k2]]]][2]*z2); }
    let t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
    if (t3 < 0) n3 = 0;
    else { t3 *= t3; n3 = t3 * t3 * (grad3[pm[ii+1+p[jj+1+p[kk+1]]]][0]*x3 + grad3[pm[ii+1+p[jj+1+p[kk+1]]]][1]*y3 + grad3[pm[ii+1+p[jj+1+p[kk+1]]]][2]*z3); }
    return 32 * (n0 + n1 + n2 + n3);
  }
}

// ============================================
// CHROMA COLOR MIXING (minimal implementation)
// ============================================
class ChromaColor {
  constructor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    this.r = r; this.g = g; this.b = b;
    this.a = 255;
  }

  rgb() { return [this.r, this.g, this.b]; }

  alpha(a) {
    const c = new ChromaColor('#000000');
    c.r = this.r; c.g = this.g; c.b = this.b; c.a = Math.min(255, Math.max(0, a * 255));
    return c;
  }
}

const chroma = (hex) => new ChromaColor(hex);
chroma.mix = (a, b, ratio) => {
  const r = Math.round(a.r + (b.r - a.r) * ratio);
  const g = Math.round(a.g + (b.g - a.g) * ratio);
  const b_ = Math.round(a.b + (b.b - a.b) * ratio);
  const hex = '#' + [r, g, b_].map(v => v.toString(16).padStart(2, '0')).join('');
  return chroma(hex);
};

// ============================================
// MESH GRADIENT CANVAS
// ============================================
const initMeshGradient = () => {
  const canvas = document.getElementById('meshCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  const simplex = new SimplexNoise(42);
  const palette = [
    chroma('#1a1a4e'), chroma('#ff6b9d'), chroma('#4ecdc4'),
    chroma('#f7b731'), chroma('#6a5af9')
  ];

  const config = { gridSize: 5, speed: 0.0008, noiseScale: 0.3, colorSmoothness: 2.5, paletteSize: 5 };
  let animationId;
  let isVisible = true;

  const resize = () => {
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
  };

  const getColor = (pos, time) => {
    const cyclePos = (pos * 3 + time * 0.0001) % 1;
    const idx = cyclePos * (palette.length - 1);
    const i = Math.floor(idx);
    const f = idx - i;
    const smoothF = f * f * (3 - 2 * f);
    const a = palette[Math.min(i, palette.length - 1)];
    const b = palette[Math.min(i + 1, palette.length - 1)];
    return chroma.mix(a, b, smoothF);
  };

  const gradColor = (x, y, time) => {
    let col = chroma('#000000');
    let totalWeight = 0;
    const gs = config.gridSize;
    for (let py = 0; py < gs; py++) {
      for (let px = 0; px < gs; px++) {
        const pxp = px / (gs - 1);
        const pyp = py / (gs - 1);
        const dx = x - pxp;
        const dy = y - pyp;
        const d = Math.sqrt(dx * dx + dy * dy);
        const n = simplex.noise3D(px * 0.5, py * 0.5, time * 0.0005);
        const radius = 0.3 + n * 0.2;
        const weight = Math.exp(-d * d / (2 * radius * radius));
        const colorPos = (px + py * gs) / (gs * gs);
        col = chroma.mix(col, getColor(colorPos, time), weight);
        totalWeight += weight;
      }
    }
    return col.alpha(Math.min(1, totalWeight));
  };

  const render = (time) => {
    if (!isVisible) { animationId = requestAnimationFrame(render); return; }
    const width = canvas.width;
    const height = canvas.height;
    const imageData = ctx.createImageData(width, height);
    const blockSize = 4;
    const t = time * config.speed;

    for (let y = 0; y < height; y += blockSize) {
      for (let x = 0; x < width; x += blockSize) {
        const nx = x / width;
        const ny = y / height;
        const col = gradColor(nx, ny, t);
        const [r, g, b] = col.rgb();
        for (let by = 0; by < blockSize; by++) {
          for (let bx = 0; bx < blockSize; bx++) {
            if (x + bx < width && y + by < height) {
              const idx = ((y + by) * width + (x + bx)) * 4;
              imageData.data[idx] = r;
              imageData.data[idx + 1] = g;
              imageData.data[idx + 2] = b;
              imageData.data[idx + 3] = 255;
            }
          }
        }
      }
    }
    ctx.putImageData(imageData, 0, 0);
    animationId = requestAnimationFrame(render);
  };

  // Visibility observer
  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0.01 });
  observer.observe(canvas);

  resize();
  window.addEventListener('resize', resize);
  animationId = requestAnimationFrame(render);
};

// ============================================
// GEOMETRIC GRID WITH MOUSE REPULSION
// ============================================
const initGeometricGrid = () => {
  const svg = document.getElementById('geoGrid');
  if (!svg) return;

  const SPACING = 50;
  const REPULSE_RADIUS = 150;
  const MAX_DISPLACE = 30;
  const LERP_FACTOR = 0.1;

  let nodes = [];
  let lines = [];
  let mouseX = -9999;
  let mouseY = -9999;

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const createGrid = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.innerHTML = '';
    nodes = [];
    lines = [];

    const linesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const nodesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    svg.appendChild(linesGroup);
    svg.appendChild(nodesGroup);

    const cols = Math.ceil(w / SPACING) + 1;
    const rows = Math.ceil(h / SPACING) + 1;
    const nodeGrid = [];

    for (let r = 0; r < rows; r++) {
      nodeGrid[r] = [];
      for (let c = 0; c < cols; c++) {
        const x = c * SPACING;
        const y = r * SPACING;

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', '2');
        circle.setAttribute('fill', 'rgba(255,255,255,.05)');
        nodesGroup.appendChild(circle);

        const node = { el: circle, ox: x, oy: y, cx: x, cy: y };
        nodeGrid[r][c] = node;
        nodes.push(node);

        // Horizontal line
        if (c > 0) {
          const prev = nodeGrid[r][c - 1];
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('stroke', 'rgba(255,255,255,.03)');
          line.setAttribute('stroke-width', '1');
          linesGroup.appendChild(line);
          lines.push({ el: line, n1: prev, n2: node });
        }
        // Vertical line
        if (r > 0) {
          const above = nodeGrid[r - 1][c];
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('stroke', 'rgba(255,255,255,.03)');
          line.setAttribute('stroke-width', '1');
          linesGroup.appendChild(line);
          lines.push({ el: line, n1: above, n2: node });
        }
      }
    }
  };

  const animate = () => {
    for (const node of nodes) {
      const dx = node.ox - mouseX;
      const dy = node.oy - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let tx = node.ox;
      let ty = node.oy;

      if (dist < REPULSE_RADIUS) {
        const force = (1 - dist / REPULSE_RADIUS) * MAX_DISPLACE;
        const angle = Math.atan2(dy, dx);
        tx = node.ox + Math.cos(angle) * force;
        ty = node.oy + Math.sin(angle) * force;
      }

      node.cx = lerp(node.cx, tx, LERP_FACTOR);
      node.cy = lerp(node.cy, ty, LERP_FACTOR);

      node.el.setAttribute('cx', node.cx.toFixed(1));
      node.el.setAttribute('cy', node.cy.toFixed(1));
    }

    for (const line of lines) {
      line.el.setAttribute('x1', line.n1.cx.toFixed(1));
      line.el.setAttribute('y1', line.n1.cy.toFixed(1));
      line.el.setAttribute('x2', line.n2.cx.toFixed(1));
      line.el.setAttribute('y2', line.n2.cy.toFixed(1));
    }

    requestAnimationFrame(animate);
  };

  // Mouse tracking
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener('mouseleave', () => {
    mouseX = -9999;
    mouseY = -9999;
  });

  createGrid();
  window.addEventListener('resize', createGrid);
  requestAnimationFrame(animate);
};

// ============================================
// ORBIT DOT ANIMATIONS
// ============================================
const initOrbitDots = () => {
  const containers = document.querySelectorAll('.orbit-container');
  if (!containers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const dots = entry.target.querySelectorAll('.orbit-dot');
        dots.forEach(dot => {
          dot.style.animationPlayState = 'running';
        });
      }
    });
  }, { threshold: 0.3 });

  containers.forEach(container => {
    const data = JSON.parse(container.dataset.orbit.replace(/&quot;/g, '"'));
    const { count, radius, duration, direction, colors } = data;

    container.style.width = `${radius * 2 + 6}px`;
    container.style.height = `${radius * 2 + 6}px`;

    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.className = 'orbit-dot';
      dot.style.setProperty('--orbit-radius', `${radius}px`);
      dot.style.setProperty('--orbit-color', colors[i % colors.length]);
      dot.style.background = colors[i % colors.length];
      dot.style.animationDuration = `${duration}s`;
      dot.style.animationDelay = `-${(duration / count) * i * direction}s`;
      dot.style.animationDirection = direction === -1 ? 'reverse' : 'normal';
      dot.style.animationPlayState = 'paused';
      container.appendChild(dot);
    }

    observer.observe(container);
  });
};

// ============================================
// SCROLL-TRIGGERED ANIMATIONS
// ============================================
const initScrollAnimations = () => {
  // Blur reveal elements
  const blurElements = document.querySelectorAll('.blur-reveal');
  const blurObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        blurObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  
  blurElements.forEach(el => {
  blurObserver.observe(el);
});

  // Fade-up elements
  const fadeElements = document.querySelectorAll('.fade-up');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement?.children || []);
        const index = siblings.indexOf(entry.target);
        entry.target.style.animationDelay = `${index * 0.02}s`;
        entry.target.classList.add('revealed');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // Timeline line animation
  const timelineLine = document.getElementById('timelineLine');
  if (timelineLine) {
    const lineObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        timelineLine.classList.add('animate');
        lineObserver.unobserve(timelineLine);
      }
    }, { threshold: 0.3 });
    lineObserver.observe(timelineLine);
  }
};

// ============================================
// COUNTER ANIMATIONS
// ============================================
const initCounters = () => {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const animateCounter = (el, target, duration = 2000) => {
    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        if (!isNaN(target)) {
          animateCounter(el, target, 1500);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
};

// ============================================
// STAT BAR ANIMATIONS
// ============================================
const initStatBars = () => {
  const bars = document.querySelectorAll('.stat-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger animation
        const allBars = Array.from(bars);
        allBars.forEach((bar, i) => {
          setTimeout(() => {
            bar.classList.add('animate');
          }, i * 200);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const card = document.getElementById('heroCard1');
  if (card) observer.observe(card);
};

// ============================================
// ACCORDION
// ============================================
const initAccordion = () => {
  const items = document.querySelectorAll('.accordion-item');
  if (!items.length) return;

  items.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all others
      items.forEach(other => {
        other.classList.remove('active');
        other.querySelector('.accordion-trigger')?.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
};

// ============================================
// NAVIGATION
// ============================================
const initNavigation = () => {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll behavior
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Mobile toggle
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('open');
      });
    });
  }

  // Active section highlighting
  const sections = document.querySelectorAll('section[id]');
  const highlightNav = () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);
};

// ============================================
// HERO CARD ENTRANCE
// ============================================
const initHeroCards = () => {
  const cards = document.querySelectorAll('.hero-card');
  if (!cards.length) return;

  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px) scale(0.95)';
    card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';

    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0) scale(1)';
    }, 800 + i * 200);
  });
};

// ============================================
// NOISE TEXTURE GENERATION
// ============================================
const initNoiseTexture = () => {
  const overlay = document.querySelector('.noise-overlay');
  if (!overlay) return;

  // Using SVG data URI for noise is already in CSS
  // This function is here in case we want to enhance it
  // The CSS already handles the noise overlay via inline SVG
};

// ============================================
// PARALLAX EFFECT FOR SOLUTION CARD
// ============================================
const initParallax = () => {
  const card = document.querySelector('.solution-card');
  if (!card) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        if (rect.top < viewHeight && rect.bottom > 0) {
          const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
          const offset = (progress - 0.5) * -20;
          card.style.transform = `translateY(${offset}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
};

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
};

// ============================================
// CURSOR SPOTLIGHT EFFECT
// ============================================
const initCursorSpotlight = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Skip on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let rafId;
  let currentX = 50;
  let currentY = 50;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      currentX += (x - currentX) * 0.1;
      currentY += (y - currentY) * 0.1;
      hero.style.setProperty('--cursor-x', `${currentX}%`);
      hero.style.setProperty('--cursor-y', `${currentY}%`);
    });
  });
};

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initMeshGradient();
  initGeometricGrid();
  initOrbitDots();
  initScrollAnimations();
  initCounters();
  initStatBars();
  initAccordion();
  initNavigation();
  initHeroCards();
  initNoiseTexture();
  initParallax();
  initSmoothScroll();
  initCursorSpotlight();
});
