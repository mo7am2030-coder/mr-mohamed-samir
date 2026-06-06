// ===== MAIN JS FOR MR. MOHAMED ENGLISH PLATFORM =====

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const loading = document.getElementById('loading-screen');
    if (loading) loading.classList.add('hidden');
  }, 1600);
});

// ===== PARTICLES =====
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  canvas.width = W; canvas.height = H;

  const particles = [];
  const count = Math.min(60, Math.floor(W / 25));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '108,99,255' : '245,158,11'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(108,99,255,${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', () => {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W; canvas.height = H;
  });
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // Scroll-to-top button
    const scrollTop = document.getElementById('scroll-top');
    if (scrollTop) {
      if (window.scrollY > 400) scrollTop.classList.add('show');
      else scrollTop.classList.remove('show');
    }

    // Active nav link
    updateActiveNavLink();
  });

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
    });
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      counter.textContent = Math.floor(current) + suffix;
    }, 16);
  });
}

// ===== REVEAL ON SCROLL =====
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  reveals.forEach(el => observer.observe(el));
}

// ===== COUNTER OBSERVER =====
function initCounterObserver() {
  const statsSection = document.querySelector('.hero-stats');
  if (!statsSection) return;
  let counted = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      animateCounters();
    }
  });
  observer.observe(statsSection);
}

// ===== LEVEL TABS =====
function initLevelTabs() {
  const tabs = document.querySelectorAll('.level-tab');
  const contents = document.querySelectorAll('.level-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('level-' + tab.dataset.level);
      if (target) target.classList.add('active');
    });
  });
}

// ===== SCHEDULE TABS =====
function initScheduleTabs() {
  const tabs = document.querySelectorAll('.schedule-tab');
  const contents = document.querySelectorAll('.schedule-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => { c.style.display = 'none'; });
      tab.classList.add('active');
      const target = document.getElementById('schedule-' + tab.dataset.week);
      if (target) target.style.display = 'grid';
    });
  });
}

// ===== QUIZ =====
const quizData = [
  {
    q: "Choose the correct form of the verb: She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    correct: 1,
    level: "Primary"
  },
  {
    q: "What is the past tense of 'write'?",
    options: ["writed", "written", "wrote", "writes"],
    correct: 2,
    level: "Preparatory"
  },
  {
    q: "Choose the correct conditional: If I ___ rich, I would travel the world.",
    options: ["am", "were", "be", "had been"],
    correct: 1,
    level: "Secondary"
  },
  {
    q: "Which sentence uses the Present Perfect correctly?",
    options: ["I have saw that film", "I have seen that film", "I seen that film", "I was seeing that film"],
    correct: 1,
    level: "Secondary"
  },
  {
    q: "Choose the correct passive voice: The letter ___ by John.",
    options: ["was wrote", "was written", "has wrote", "is write"],
    correct: 1,
    level: "Advanced"
  },
  {
    q: "Which word is a synonym of 'abundant'?",
    options: ["scarce", "plentiful", "limited", "rare"],
    correct: 1,
    level: "Advanced"
  },
  {
    q: "Choose the correct article: ___ Nile is the longest river in Africa.",
    options: ["A", "An", "The", "No article"],
    correct: 2,
    level: "Preparatory"
  },
  {
    q: "Complete the sentence: He is the ___ student in the class.",
    options: ["intelligent", "most intelligent", "more intelligent", "intelligence"],
    correct: 1,
    level: "Primary"
  }
];

let currentQ = 0, score = 0, timer = null, timeLeft = 30;

function initQuiz() {
  renderQuestion();
  document.getElementById('quiz-next')?.addEventListener('click', nextQuestion);
  document.getElementById('quiz-restart')?.addEventListener('click', restartQuiz);
}

function renderQuestion() {
  const q = quizData[currentQ];
  if (!q) { showResults(); return; }

  document.getElementById('question-number').textContent = `السؤال ${currentQ + 1}`;
  document.getElementById('question-text').textContent = q.q;
  document.getElementById('quiz-level').textContent = q.level;
  document.getElementById('quiz-current').textContent = currentQ + 1;
  document.getElementById('quiz-total').textContent = quizData.length;

  const progress = ((currentQ) / quizData.length) * 100;
  document.getElementById('quiz-progress').style.width = progress + '%';

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-letter">${['A','B','C','D'][i]}</span>
      <span>${opt}</span>
    `;
    btn.addEventListener('click', () => selectAnswer(i, btn));
    optionsContainer.appendChild(btn);
  });

  document.getElementById('quiz-next').style.display = 'none';
  startTimer();
}

function selectAnswer(idx, btn) {
  clearInterval(timer);
  const correct = quizData[currentQ].correct;
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.style.pointerEvents = 'none');

  if (idx === correct) {
    btn.classList.add('correct');
    score++;
    showToast('✅ إجابة صحيحة! ممتاز', 'success');
  } else {
    btn.classList.add('wrong');
    allBtns[correct].classList.add('correct');
    showToast('❌ إجابة خاطئة! حاول مرة أخرى', 'error');
  }
  document.getElementById('quiz-next').style.display = 'inline-flex';
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= quizData.length) showResults();
  else renderQuestion();
}

function startTimer() {
  timeLeft = 30;
  clearInterval(timer);
  const timerEl = document.getElementById('timer-count');
  if (!timerEl) return;
  timerEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 10) timerEl.style.color = '#ef4444';
    else timerEl.style.color = '';
    if (timeLeft <= 0) {
      clearInterval(timer);
      const allBtns = document.querySelectorAll('.option-btn');
      allBtns.forEach(b => b.style.pointerEvents = 'none');
      allBtns[quizData[currentQ].correct].classList.add('correct');
      showToast('⏰ انتهى الوقت!', 'error');
      document.getElementById('quiz-next').style.display = 'inline-flex';
    }
  }, 1000);
}

function showResults() {
  clearInterval(timer);
  document.getElementById('quiz-area').style.display = 'none';
  const resultEl = document.getElementById('quiz-result');
  resultEl.classList.add('show');
  const pct = Math.round((score / quizData.length) * 100);
  document.getElementById('result-score').textContent = pct + '%';

  let emoji, msg, sub;
  if (pct >= 90) { emoji = '🏆'; msg = 'ممتاز! أنت نجم!'; sub = 'أداء رائع جداً، استمر هكذا!'; }
  else if (pct >= 70) { emoji = '🎉'; msg = 'جيد جداً!'; sub = 'مستوى ممتاز، أحسنت!'; }
  else if (pct >= 50) { emoji = '📚'; msg = 'جيد'; sub = 'تحتاج لمزيد من المراجعة'; }
  else { emoji = '💪'; msg = 'حاول مجدداً!'; sub = 'لا تيأس، التكرار مفتاح النجاح'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-message').textContent = msg;
  document.getElementById('result-sub').textContent = sub;
}

function restartQuiz() {
  currentQ = 0; score = 0;
  document.getElementById('quiz-area').style.display = 'block';
  document.getElementById('quiz-result').classList.remove('show');
  renderQuestion();
}

// ===== FAQ =====
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ===== REGISTRATION FORM =====
function initForm() {
  const form = document.getElementById('register-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn');
    const name = form.querySelector('#student-name').value;
    btn.textContent = '⏳ جاري التسجيل...';
    btn.disabled = true;
    setTimeout(() => {
      showToast(`🎉 أهلاً ${name}! تم تسجيلك بنجاح`, 'success');
      form.reset();
      btn.textContent = '🚀 سجّل الآن مجاناً';
      btn.disabled = false;
    }, 1500);
  });
}

// ===== TOAST =====
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span style="font-size:1.2rem">${type === 'success' ? '✅' : '❌'}</span> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3000);
}

// ===== SCROLL TOP =====
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

// ===== TYPING EFFECT =====
function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const texts = ['English Made Easy! 🇬🇧', 'Grammar Mastery 📖', 'Vocabulary Builder 📚', 'Fluent Speaking 🎤', 'Exam Preparation ✅'];
  let i = 0, j = 0, deleting = false;

  function type() {
    const current = texts[i];
    if (!deleting) {
      el.textContent = current.slice(0, ++j);
      if (j === current.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = current.slice(0, --j);
      if (j === 0) { deleting = false; i = (i + 1) % texts.length; }
    }
    setTimeout(type, deleting ? 60 : 90);
  }
  type();
}

// ===== VIDEO MODAL =====
function initVideoModal() {
  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('📹 سيتم إضافة الفيديو قريباً! تواصل معنا للمزيد', 'success');
    });
  });
}

// ===== THEME & LANGUAGE SWITCHER =====
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  
  const currentTheme = localStorage.getItem('theme') || 'dark';
  setTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      setTheme(theme);
    });
  }
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      setTheme(theme);
    });
  }
}

function setTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelectorAll('.theme-btn').forEach(btn => btn.textContent = '🌙');
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.querySelectorAll('.theme-btn').forEach(btn => btn.textContent = '☀️');
  }
  localStorage.setItem('theme', theme);
}

const translations = {
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    levels: "المراحل",
    lessons: "الدروس",
    quiz: "اختبارات",
    schedule: "المواعيد",
    register: "التسجيل",
    contact: "تواصل",
    login: "تسجيل الدخول",
    signup: "حساب جديد",
    whatsapp: "واتساب",
    hero_badge: "متاح الآن للتسجيل · All Levels Welcome",
    hero_title_1: "تعلّم الإنجليزي مع",
    hero_title_2: "الأستاذ محمد",
    hero_desc: "منصة تعليمية متكاملة لتعليم اللغة الإنجليزية لجميع المراحل الدراسية — ابتدائي، إعدادي، ثانوي، وجامعي. دروس تفاعلية، اختبارات، ومتابعة شخصية.",
    hero_btn_reg: "🚀 سجّل الآن مجاناً",
    hero_btn_lessons: "▶️ استعرض الدروس",
    stat_students: "طالب مسجّل",
    stat_stages: "مراحل دراسية",
    stat_lessons: "درس تفاعلي",
    stat_experience: "سنوات خبرة",
    floating_success: "نسبة النجاح",
    floating_rating: "تقييم الطلاب",
    floating_lessons: "درس متاح",
    about_badge: "من هو الأستاذ محمد؟",
    about_title: "الأستاذ محمد سمير",
    about_subtitle: "مدرس أول لغة إنجليزية وخبير تربوي في مصر",
    about_desc: "أهلاً بكم في منصتي التعليمية! أنا محمد سمير، مدرس أول لغة إنجليزية في مصر. أسعى لتبسيط مهارات وقواعد اللغة الإنجليزية لجميع الطلاب بمختلف المراحل الدراسية (الابتدائية، الإعدادية، والثانوية). أتبع أحدث الأساليب التفاعلية والتربوية لضمان تفوق الطلاب وحصولهم على الدرجات النهائية.",
    about_skill_1: "📚 شرح المناهج الدراسية",
    about_skill_2: "🎓 قواعد اللغة الإنجليزية",
    about_skill_3: "🌍 التحضير لاختبار IELTS",
    about_skill_4: "🗣 المحادثة والطلاقة",
    about_skill_5: "✍️ كتابة المقالات الأكاديمية",
    about_contact: "💬 تواصل معي مباشرة",
    about_stages: "📚 المراحل الدراسية",
    about_experience_label: "سنوات خبرة"
  },
  en: {
    home: "Home",
    about: "About Us",
    levels: "Stages",
    lessons: "Lessons",
    quiz: "Quizzes",
    schedule: "Schedule",
    register: "Register",
    contact: "Contact",
    login: "Login",
    signup: "Sign Up",
    whatsapp: "WhatsApp",
    hero_badge: "Registration Open · All Levels Welcome",
    hero_title_1: "Learn English with",
    hero_title_2: "Mr. Mohamed",
    hero_desc: "An integrated educational platform for teaching English for all stages — Primary, Preparatory, Secondary, and Advanced. Interactive lessons, quizzes, and personal follow-up.",
    hero_btn_reg: "🚀 Register Now For Free",
    hero_btn_lessons: "▶️ Browse Lessons",
    stat_students: "Enrolled Students",
    stat_stages: "Edu Stages",
    stat_lessons: "Interactive Lessons",
    stat_experience: "Years Experience",
    floating_success: "Success Rate",
    floating_rating: "Student Rating",
    floating_lessons: "Available Lessons",
    about_badge: "Who is Mr. Mohamed?",
    about_title: "Mr. Mohamed Samir",
    about_subtitle: "Senior English Teacher & Educational Expert in Egypt",
    about_desc: "Welcome to my educational platform! I am Mohamed Samir, a senior English teacher in Egypt. I strive to simplify English skills and grammar for all students in different stages (Primary, Preparatory, and Secondary). I follow the latest interactive and educational methods to ensure student excellence and top grades.",
    about_skill_1: "📚 Curriculums Explanation",
    about_skill_2: "🎓 English Grammar",
    about_skill_3: "🌍 IELTS Exam Preparation",
    about_skill_4: "🗣 Conversation & Fluency",
    about_skill_5: "✍️ Academic Essay Writing",
    about_contact: "💬 Contact Me Directly",
    about_stages: "📚 Educational Stages",
    about_experience_label: "Years of Experience"
  }
};

function initLanguage() {
  const langToggle = document.getElementById('lang-toggle');
  const mobileLangToggle = document.getElementById('mobile-lang-toggle');
  
  const currentLang = localStorage.getItem('lang') || 'ar';
  setLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const lang = document.documentElement.getAttribute('lang') === 'ar' ? 'en' : 'ar';
      setLanguage(lang);
    });
  }
  if (mobileLangToggle) {
    mobileLangToggle.addEventListener('click', () => {
      const lang = document.documentElement.getAttribute('lang') === 'ar' ? 'en' : 'ar';
      setLanguage(lang);
    });
  }
}

function setLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  // Update toggle buttons text
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.textContent = lang === 'ar' ? 'EN' : 'AR';
  });

  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Navbar Links (both desktop and mobile)
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  const linkKeys = ['home', 'about', 'levels', 'lessons', 'quiz', 'schedule', 'register', 'contact'];
  
  // Desktop Nav Links
  navLinks.forEach((link, idx) => {
    if (idx < linkKeys.length) {
      link.textContent = t[linkKeys[idx]];
    }
  });

  // Mobile Nav Links
  if (mobileLinks.length >= 10) {
    mobileLinks[0].textContent = "🏠 " + t.home;
    mobileLinks[1].textContent = "👨‍🏫 " + t.about;
    mobileLinks[2].textContent = "📚 " + t.levels;
    mobileLinks[3].textContent = "🎬 " + t.lessons;
    mobileLinks[4].textContent = "✏️ " + t.quiz;
    mobileLinks[5].textContent = "📅 " + t.schedule;
    mobileLinks[6].textContent = "📝 " + t.register;
    mobileLinks[7].textContent = "📞 " + t.contact;
    mobileLinks[8].textContent = "🔑 " + t.login;
    mobileLinks[9].textContent = "✨ " + t.signup;
  }

  // Header login/signup
  const btnLogin = document.querySelector('.btn-login');
  if (btnLogin) btnLogin.textContent = t.login;
  
  const btnRegister = document.querySelector('.btn-register-nav');
  if (btnRegister) btnRegister.textContent = t.signup;

  const navWhatsapp = document.querySelector('.nav-whatsapp span');
  if (navWhatsapp && navWhatsapp.nextSibling) {
    navWhatsapp.nextSibling.textContent = ' ' + t.whatsapp;
  }

  // Hero Section
  const heroBadge = document.querySelector('.hero-badge');
  if (heroBadge) {
    const dot = heroBadge.querySelector('.dot');
    heroBadge.innerHTML = '';
    if (dot) heroBadge.appendChild(dot);
    heroBadge.appendChild(document.createTextNode(' ' + t.hero_badge));
  }

  const heroTitleLine1 = document.querySelector('.hero-title .line1');
  if (heroTitleLine1) heroTitleLine1.textContent = t.hero_title_1;
  
  const heroTitleName = document.querySelector('.hero-title .name');
  if (heroTitleName) heroTitleName.textContent = t.hero_title_2;

  const heroDesc = document.querySelector('.hero-desc');
  if (heroDesc) heroDesc.textContent = t.hero_desc;

  const heroActionsReg = document.querySelector('.hero-actions a.btn-primary span');
  if (heroActionsReg && heroActionsReg.nextSibling) {
    heroActionsReg.nextSibling.textContent = ' ' + t.hero_btn_reg.replace('🚀 ', '');
  }
  const heroActionsLessons = document.querySelector('.hero-actions a.btn-outline span');
  if (heroActionsLessons && heroActionsLessons.nextSibling) {
    heroActionsLessons.nextSibling.textContent = ' ' + t.hero_btn_lessons.replace('▶️ ', '');
  }

  // Hero Stats
  const statLabels = document.querySelectorAll('.hero-stats .stat-label');
  if (statLabels.length >= 4) {
    statLabels[0].textContent = t.stat_students;
    statLabels[1].textContent = t.stat_stages;
    statLabels[2].textContent = t.stat_lessons;
    statLabels[3].textContent = t.stat_experience;
  }

  // Floating Cards
  const floatLabels = document.querySelectorAll('.floating-card-label');
  if (floatLabels.length >= 3) {
    floatLabels[0].textContent = t.floating_success;
    floatLabels[1].textContent = t.floating_rating;
    floatLabels[2].textContent = t.floating_lessons;
  }

  // About Section
  const aboutBadge = document.querySelector('#about .section-badge span');
  if (aboutBadge && aboutBadge.nextSibling) {
    aboutBadge.nextSibling.textContent = ' ' + t.about_badge.replace('👨‍🏫 ', '');
  }
  const aboutTitle = document.querySelector('.about-title');
  if (aboutTitle) aboutTitle.textContent = t.about_title;

  const aboutSubtitle = document.querySelector('.about-subtitle');
  if (aboutSubtitle) aboutSubtitle.textContent = t.about_subtitle;

  const aboutDesc = document.querySelector('.about-desc');
  if (aboutDesc) aboutDesc.textContent = t.about_desc;

  const aboutSkills = document.querySelectorAll('.about-skill');
  if (aboutSkills.length >= 5) {
    aboutSkills[0].textContent = t.about_skill_1;
    aboutSkills[1].textContent = t.about_skill_2;
    aboutSkills[2].textContent = t.about_skill_3;
    aboutSkills[3].textContent = t.about_skill_4;
    aboutSkills[4].textContent = t.about_skill_5;
  }

  const aboutContact = document.querySelector('#about a.btn-whatsapp span');
  if (aboutContact && aboutContact.nextSibling) {
    aboutContact.nextSibling.textContent = ' ' + t.about_contact.replace('💬 ', '');
  }
  const aboutStages = document.querySelector('#about a.btn-outline span');
  if (aboutStages && aboutStages.nextSibling) {
    aboutStages.nextSibling.textContent = ' ' + t.about_stages.replace('📚 ', '');
  }

  const aboutExp = document.querySelector('.about-badge-label');
  if (aboutExp) aboutExp.textContent = t.about_experience_label;
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initParticles();
  initNavbar();
  initReveal();
  initCounterObserver();
  initLevelTabs();
  initScheduleTabs();
  initQuiz();
  initFAQ();
  initForm();
  initScrollTop();
  initSmoothScroll();
  initTyping();
  initVideoModal();

  // Trigger active link on load
  updateActiveNavLink();
});
