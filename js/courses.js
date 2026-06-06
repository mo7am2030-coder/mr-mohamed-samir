// ===== COURSES & LESSON PLAYBACK CONTROLLER FOR MR. MOHAMED SAMIR PLATFORM =====

// Detailed Courses & Lesson Playlists Database
const DETAILED_COURSES = {
  c1: {
    id: 'c1',
    title: 'English Phonetics & Letters',
    titleEn: 'English Phonetics & Letters',
    level: 'primary',
    grade: 'primary-1',
    thumb: '🔤',
    lessons: [
      { id: 'c1-l1', title: 'Lesson 1: Introduction to Alphabet', titleEn: 'Lesson 1: Introduction to Alphabet', duration: '10:00', desc: 'شرح مبسط للحروف الإنجليزية ونطقها الصحيح للمبتدئين.', descEn: 'A simple explanation of the English alphabet and correct pronunciation for beginners.' },
      { id: 'c1-l2', title: 'Lesson 2: Short Vowel Sounds', titleEn: 'Lesson 2: Short Vowel Sounds', duration: '12:00', desc: 'نطق وتمييز أصوات الحروف المتحركة القصيرة (a, e, i, o, u) مع أمثلة بالصوت.', descEn: 'Pronounce and distinguish short vowel sounds (a, e, i, o, u) with audio examples.' },
      { id: 'c1-l3', title: 'Lesson 3: Double Consonants', titleEn: 'Lesson 3: Double Consonants', duration: '15:00', desc: 'الحروف الساكنة المزدوجة ونطقها في الكلمات مثل (sh, ch, th, ph).', descEn: 'Double consonant pronunciation in words like (sh, ch, th, ph).' }
    ]
  },
  c2: {
    id: 'c2',
    title: 'Present Perfect Masterclass',
    titleEn: 'Present Perfect Masterclass',
    level: 'prep',
    grade: 'prep-2',
    thumb: '⏰',
    lessons: [
      { id: 'c2-l1', title: 'Lesson 1: Form and Structure', titleEn: 'Lesson 1: Form and Structure', duration: '15:00', desc: 'شرح تركيب زمن المضارع التام مع الضمائر المختلفة وتصريفات الأفعال.', descEn: 'Explain the structure of the Present Perfect tense with different pronouns and verb conjugations.' },
      { id: 'c2-l2', title: 'Lesson 2: Since vs For usage', titleEn: 'Lesson 2: Since vs For usage', duration: '18:00', desc: 'الفرق التام والدقيق بين استخدام Since واستخدام For في الأزمنة التامة.', descEn: 'The absolute differences between using Since and For in perfect tenses.' },
      { id: 'c2-l3', title: 'Lesson 3: Present Perfect vs Past Simple', titleEn: 'Lesson 3: Present Perfect vs Past Simple', duration: '20:00', desc: 'كيف نفرق بين المضارع التام والماضي البسيط ومتى نستخدم كل منهما.', descEn: 'How to distinguish between Present Perfect and Past Simple and when to use each.' }
    ]
  },
  c3: {
    id: 'c3',
    title: 'Secondary Essay Writing Secrets',
    titleEn: 'Secondary Essay Writing Secrets',
    level: 'secondary',
    grade: 'secondary-3',
    thumb: '✍️',
    lessons: [
      { id: 'c3-l1', title: 'Lesson 1: Essay structure & hooks', titleEn: 'Lesson 1: Essay structure & hooks', duration: '20:00', desc: 'الهيكل الرئيسي للمقال المدرسي وكيف تكتب جملة افتتاحية مميزة لجذب المصحح.', descEn: 'The main structure of an essay and how to write a hook to attract examiners.' },
      { id: 'c3-l2', title: 'Lesson 2: Supporting paragraphs & transitions', titleEn: 'Lesson 2: Supporting paragraphs & transitions', duration: '22:00', desc: 'كتابة صلب المقال واستخدام أدوات الربط والترابط بين الجمل والفقرات.', descEn: 'Writing the body paragraphs and using transition words to connect sentences.' },
      { id: 'c3-l3', title: 'Lesson 3: Conclusion & common mistakes', titleEn: 'Lesson 3: Conclusion & common mistakes', duration: '15:00', desc: 'كيفية كتابة خاتمة قوية وتجنب الأخطاء الإملائية والنحوية الشائعة.', descEn: 'How to write a strong conclusion and avoid common spelling and grammar mistakes.' }
    ]
  },
  c4: {
    id: 'c4',
    title: 'IELTS Speaking Academic',
    titleEn: 'IELTS Speaking Academic',
    level: 'advanced',
    grade: 'advanced-ielts',
    thumb: '🎙️',
    lessons: [
      { id: 'c4-l1', title: 'Lesson 1: IELTS Speaking Part 1 Tips', titleEn: 'Lesson 1: IELTS Speaking Part 1 Tips', duration: '25:00', desc: 'استراتيجيات الإجابة على الأسئلة التعريفية والشخصية في القسم الأول.', descEn: 'Strategies for answering introductory and personal questions in Part 1.' },
      { id: 'c4-l2', title: 'Lesson 2: Cue Card strategies (Part 2)', titleEn: 'Lesson 2: Cue Card strategies (Part 2)', duration: '30:00', desc: 'كيف تتحدث لمدة دقيقتين متواصلتين في مواضيع الكروت العشوائية.', descEn: 'How to speak continuously for two minutes on cue card topics.' },
      { id: 'c4-l3', title: 'Lesson 3: Complex Discussion (Part 3)', titleEn: 'Lesson 3: Complex Discussion (Part 3)', duration: '35:00', desc: 'صياغة إجابات أكاديمية ومتقدمة للأسئلة الفلسفية والتحليلية في القسم الثالث.', descEn: 'Formulating academic and advanced answers for analytical questions in Part 3.' }
    ]
  }
};

// Translations for Courses Page
const courseTranslations = {
  ar: {
    catalogBadge: "المناهج المتاحة",
    catalogTitle: "مكتبة الدروس التعليمية",
    catalogDesc: "استعرض الكورسات المصممة خصيصاً لمرحلتك الدراسية بأسلوب تفاعلي رائع",
    chkPrimary: "🌱 المرحلة الابتدائية",
    chkPrep: "📖 المرحلة الإعدادية",
    chkSecondary: "🎯 المرحلة الثانوية",
    chkAdvanced: "🚀 جامعي ومتقدم",
    filterStages: "المراحل الدراسية",
    btnDashboard: "لوحة التحكم",
    arrowBack: "←",
    backToCatalog: "العودة للمكتبة",
    lblLessonsCount: "{count} دروس",
    lblWatchNow: "شاهد الآن",
    lblPlaylist: "🎬 قائمة حصص الكورس",
    lblResources: "📥 ملفات ومرفقات الدرس",
    lblDescription: "📝 وصف وشرح الدرس",
    lblPdfSummary: "كتاب الشرح وملخص القاعدة (PDF)",
    lblPdfHomework: "استمارة واجب الدرس (PDF)",
    toastFinished: "🎉 أحسنت! أكملت الدرس بنجاح، تم إضافة نقاط لرصيدك!",
    toastStarted: "▶️ تم بدء تشغيل الدرس..."
  },
  en: {
    catalogBadge: "Available Curriculums",
    catalogTitle: "Educational Lessons Library",
    catalogDesc: "Explore courses custom-designed for your stage with a premium interactive style",
    chkPrimary: "🌱 Primary Stage",
    chkPrep: "📖 Preparatory Stage",
    chkSecondary: "🎯 Secondary Stage",
    chkAdvanced: "🚀 College & IELTS",
    filterStages: "Educational Stages",
    btnDashboard: "Dashboard",
    arrowBack: "←",
    backToCatalog: "Back to Library",
    lblLessonsCount: "{count} Lessons",
    lblWatchNow: "Watch Now",
    lblPlaylist: "🎬 Course Playlists",
    lblResources: "📥 Lesson Attachments & PDF",
    lblDescription: "📝 Lesson Description",
    lblPdfSummary: "Study Guide Summary (PDF)",
    lblPdfHomework: "Lesson Homework PDF (PDF)",
    toastFinished: "🎉 Well done! You finished the lesson, points added to your score!",
    toastStarted: "▶️ Media playback started..."
  }
};

let activeCourse = null;
let activeLesson = null;
let playbackInterval = null;
let isPlaying = false;
let playbackSeconds = 0;
let totalSeconds = 900; // 15 mins default

document.addEventListener('DOMContentLoaded', () => {
  // Session Check
  const session = localStorage.getItem('currentUser');
  if (!session) {
    window.location.href = 'login.html';
    return;
  }

  initCourseLanguage();
  initCatalogFilters();
  renderCatalog();
});

// Translation Management
function initCourseLanguage() {
  const currentLang = localStorage.getItem('lang') || 'ar';
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

  // Link switcher toggler
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setTimeout(() => {
        const updatedLang = localStorage.getItem('lang');
        applyCourseTranslations(updatedLang);
      }, 50);
    });
  }

  applyCourseTranslations(currentLang);
}

function applyCourseTranslations(lang) {
  const t = courseTranslations[lang];
  if (!t) return;

  // Header Dashboard nav
  document.getElementById('btn-back-dashboard-nav').textContent = t.btnDashboard;

  // Catalog strings
  document.getElementById('lbl-catalog-badge-text').textContent = t.catalogBadge;
  document.getElementById('lbl-catalog-title').innerHTML = lang === 'ar' ? 'مكتبة <span class="highlight">الدروس التعليمية</span>' : 'Educational <span class="highlight">Lessons Library</span>';
  document.getElementById('lbl-catalog-desc').textContent = t.catalogDesc;

  // Filter labels
  document.getElementById('lbl-filter-stages').textContent = t.filterStages;
  document.getElementById('lbl-chk-primary').textContent = t.chkPrimary;
  document.getElementById('lbl-chk-prep').textContent = t.chkPrep;
  document.getElementById('lbl-chk-secondary').textContent = t.chkSecondary;
  document.getElementById('lbl-chk-advanced').textContent = t.chkAdvanced;

  // Player strings
  document.getElementById('lbl-arrow-back').textContent = t.arrowBack;
  document.getElementById('lbl-back-to-catalog').textContent = t.backToCatalog;
  document.getElementById('lbl-playlist-title').textContent = t.lblPlaylist;
  document.getElementById('lbl-resources-title').textContent = t.lblResources;
  document.getElementById('lbl-lesson-desc-title').textContent = t.lblDescription;
  document.getElementById('lbl-pdf-summary').textContent = t.lblPdfSummary;
  document.getElementById('lbl-pdf-homework').textContent = t.lblPdfHomework;

  // Refresh current displays
  renderCatalog();
  if (activeCourse) {
    renderPlaylist();
  }
}

// Catalog filters
function initCatalogFilters() {
  document.querySelectorAll('.stage-filter').forEach(chk => {
    chk.addEventListener('change', () => {
      renderCatalog();
    });
  });
}

function renderCatalog() {
  const lang = localStorage.getItem('lang') || 'ar';
  const t = courseTranslations[lang];
  const gridContainer = document.getElementById('catalog-grid-container');

  // Read active checkbox values
  const activeStages = Array.from(document.querySelectorAll('.stage-filter:checked')).map(chk => chk.value);

  // Load courses database
  const coursesList = Object.values(DETAILED_COURSES);

  // Filter
  const filtered = coursesList.filter(c => activeStages.includes(c.level));

  gridContainer.innerHTML = '';
  
  if (filtered.length === 0) {
    gridContainer.innerHTML = `<p style="text-align:center;grid-column:1/-1;color:var(--text-muted);padding:40px;">${lang === 'ar' ? 'لا توجد كورسات تناسب الفلاتر المحددة.' : 'No courses match the selected filters.'}</p>`;
    return;
  }

  filtered.forEach(c => {
    const title = lang === 'ar' ? c.title : c.titleEn;
    const lessonsLabel = t.lblLessonsCount.replace('{count}', c.lessons.length);

    const div = document.createElement('div');
    div.className = 'course-progress-card reveal visible';
    div.innerHTML = `
      <div class="course-progress-thumb">${c.thumb}</div>
      <div class="course-progress-body">
        <span class="course-badge-level">${c.level.toUpperCase()}</span>
        <h3 class="course-progress-title">${title}</h3>
        <p style="color:var(--text-muted); font-size:0.8rem; margin-bottom:12px;">${lessonsLabel}</p>
        <button class="btn btn-primary" style="padding: 8px 16px; font-size: 0.82rem; margin-top: auto;">${t.lblWatchNow}</button>
      </div>
    `;
    div.querySelector('button').addEventListener('click', () => loadCoursePlayer(c));
    gridContainer.appendChild(div);
  });
}

// Player Swapping
function loadCoursePlayer(course) {
  activeCourse = course;
  
  // Swap Views
  document.getElementById('catalog-view').style.display = 'none';
  document.getElementById('player-view').style.display = 'block';

  // Pop headings
  const lang = localStorage.getItem('lang') || 'ar';
  document.getElementById('player-course-title').textContent = lang === 'ar' ? course.title : course.titleEn;
  document.getElementById('player-course-grade').textContent = `${course.grade.toUpperCase()} · ${lang === 'ar' ? 'الأستاذ محمد سمير' : 'Mr. Mohamed Samir'}`;

  // Hook back action
  document.getElementById('btn-back-catalog').addEventListener('click', () => {
    stopVideoPlayback();
    document.getElementById('player-view').style.display = 'none';
    document.getElementById('catalog-view').style.display = 'block';
    activeCourse = null;
    activeLesson = null;
  });

  // Load Playlist
  renderPlaylist();
  
  // Auto-play first lesson
  if (course.lessons.length > 0) {
    selectLesson(course.lessons[0]);
  }
}

function renderPlaylist() {
  const container = document.getElementById('player-playlist-container');
  container.innerHTML = '';

  const lang = localStorage.getItem('lang') || 'ar';

  // Read watched lessons from local storage
  const watchedHistory = JSON.parse(localStorage.getItem('watchedLessons') || '[]');

  activeCourse.lessons.forEach((l, idx) => {
    const title = lang === 'ar' ? l.title : l.titleEn;
    const isActive = activeLesson && activeLesson.id === l.id ? 'active' : '';
    const isWatched = watchedHistory.includes(l.id) ? 'watched' : '';

    const div = document.createElement('div');
    div.className = `playlist-item ${isActive} ${isWatched}`;
    div.innerHTML = `
      <span class="playlist-item-check">✓</span>
      <div style="flex:1;">
        <div>${title}</div>
        <div style="font-size:0.7rem; color:var(--text-muted); margin-top:2px;">⏱ ${l.duration}</div>
      </div>
    `;
    div.addEventListener('click', () => selectLesson(l));
    container.appendChild(div);
  });
}

function selectLesson(lesson) {
  activeLesson = lesson;
  stopVideoPlayback();

  const lang = localStorage.getItem('lang') || 'ar';
  const t = courseTranslations[lang];

  // Update Media elements
  document.getElementById('player-video-thumb').src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'; // high quality placeholder
  document.getElementById('player-media-title').textContent = lang === 'ar' ? lesson.title : lesson.titleEn;
  document.getElementById('player-media-duration').textContent = `⏱ ${lesson.duration}`;
  document.getElementById('player-lesson-desc').textContent = lang === 'ar' ? lesson.desc : lesson.descEn;

  // Set times
  const timeParts = lesson.duration.split(':');
  totalSeconds = (parseInt(timeParts[0]) * 60) + parseInt(timeParts[1]);
  playbackSeconds = 0;

  updateTimelineUI();
  renderPlaylist();

  // Reset play button
  document.getElementById('btn-control-play-pause').textContent = '▶ Play';
  document.getElementById('video-overlay-play').style.display = 'block';

  // Hook play clicks
  const playBtn = document.getElementById('btn-mock-play-media');
  playBtn.onclick = startVideoPlayback;
  document.getElementById('btn-control-play-pause').onclick = togglePlayPause;
}

// Media Playback simulation
function togglePlayPause() {
  if (isPlaying) {
    stopVideoPlayback();
  } else {
    startVideoPlayback();
  }
}

function startVideoPlayback() {
  if (isPlaying) return;

  const lang = localStorage.getItem('lang') || 'ar';
  const t = courseTranslations[lang];

  isPlaying = true;
  document.getElementById('video-overlay-play').style.display = 'none';
  document.getElementById('btn-control-play-pause').textContent = '⏸ Pause';
  showToast(t.toastStarted, 'success');

  playbackInterval = setInterval(() => {
    playbackSeconds += 5; // speed up simulation by 5s per actual tick
    
    if (playbackSeconds >= totalSeconds) {
      playbackSeconds = totalSeconds;
      stopVideoPlayback();
      completeLesson();
    }
    
    updateTimelineUI();
  }, 1000);
}

function stopVideoPlayback() {
  isPlaying = false;
  clearInterval(playbackInterval);
  document.getElementById('btn-control-play-pause').textContent = '▶ Play';
}

function updateTimelineUI() {
  // Format current and total times
  const curMin = Math.floor(playbackSeconds / 60).toString().padStart(2, '0');
  const curSec = (playbackSeconds % 60).toString().padStart(2, '0');
  const durationStr = activeLesson ? activeLesson.duration : '15:00';

  document.getElementById('video-control-timer').textContent = `${curMin}:${curSec} / ${durationStr}`;

  // Advance Seek fill bar
  const pct = (playbackSeconds / totalSeconds) * 100;
  document.getElementById('video-control-seek-fill').style.width = pct + '%';
}

function completeLesson() {
  const lang = localStorage.getItem('lang') || 'ar';
  const t = courseTranslations[lang];

  // Save lesson complete
  const watchedHistory = JSON.parse(localStorage.getItem('watchedLessons') || '[]');
  if (!watchedHistory.includes(activeLesson.id)) {
    watchedHistory.push(activeLesson.id);
    localStorage.setItem('watchedLessons', JSON.stringify(watchedHistory));

    // Award points (gamification integration)
    const session = localStorage.getItem('currentUser');
    if (session) {
      const user = JSON.parse(session);
      user.points = (user.points || 0) + 50;
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  showToast(t.toastFinished, 'success');
  
  // Re-render playlist checkmarks
  renderPlaylist();

  // Reset player overlay
  document.getElementById('video-overlay-play').style.display = 'block';
}

window.showToast = function(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span style="font-size:1.2rem">${type === 'success' ? '✅' : '❌'}</span> ${message}`;
  container.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => { 
    toast.classList.remove('show'); 
    setTimeout(() => toast.remove(), 400); 
  }, 3000);
};
