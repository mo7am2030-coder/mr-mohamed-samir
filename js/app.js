// ===== CORE SPA DASHBOARD CONTROLLER FOR MR. MOHAMED SAMIR PLATFORM =====

// Global Session Check
let currentUser = null;

// Mock database key in localStorage
const MOCK_COURSES_KEY = 'mockCourses';
const MOCK_EXAMS_KEY = 'mockExams';
const MOCK_REPORTS_KEY = 'mockReports';
const MOCK_ANNOUNCEMENTS_KEY = 'mockAnnouncements';

// Translation strings for Dashboard
const dashTranslations = {
  ar: {
    panel_title_overview: "لوحة التحكم الرئيسيّة",
    panel_title_courses: "المناهج والكورسات",
    panel_title_exams: "الاختبارات والامتحانات",
    panel_title_chat: "صندوق المحادثات والرسائل",
    panel_title_ai: "مساعد الإنجليزي الذكي",
    panel_title_gamification: "لوحة الشرف ونقاطي",
    panel_title_reports: "تقارير الأداء والدراسة",
    panel_title_users: "إدارة المستخدمين والطلاب",
    panel_title_config: "إعدادات المنصة العامة",
    
    // Sidebar menus
    menu_overview: "🏠 نظرة عامة",
    menu_courses: "📚 الكورسات والدروس",
    menu_exams: "✏️ الامتحانات والتقييم",
    menu_chat: "💬 المحادثات المباشرة",
    menu_ai: "🤖 مساعد الذكاء الاصطناعي",
    menu_gamification: "🏆 لوحة الشرف",
    menu_reports: "📊 تقارير الأداء",
    menu_users: "👥 إدارة الأعضاء",
    menu_config: "⚙️ إعدادات الموقع",
    lbl_logout: "تسجيل الخروج",

    // Overview
    lbl_welcome: "👋 أهلاً بك مجدداً يا {name}!",
    lbl_welcome_desc: "هذه هي لوحة تحكمك الشخصية. يمكنك متابعة تقدمك الدراسي، حضور الدروس الجديدة، تقديم الواجبات، والمزيد من هنا.",
    lbl_announcements: "📢 أحدث الإعلانات",
    lbl_no_announcements: "لا توجد إعلانات حالياً.",
    
    // Stats cards
    stat_courses: "الكورسات المشترك بها",
    stat_courses_teacher: "الكورسات المتاحة",
    stat_exams: "الاختبارات المكتملة",
    stat_exams_pending: "الاختبارات المعلقة",
    stat_attendance: "نسبة الحضور",
    stat_points: "إجمالي النقاط",
    stat_students: "إجمالي الطلاب",
    stat_active_users: "المستخدمين النشطين",
    stat_child_attendance: "حضور الابن",
    stat_child_points: "نقاط الابن",
    
    // Tables & Buttons
    btn_start_exam: "ابدأ الاختبار",
    btn_view_report: "عرض التقرير",
    btn_delete: "حذف",
    btn_edit: "تعديل",
    btn_add_course: "إضافة كورس جديد",
    btn_add_lesson: "إضافة درس",
    btn_save: "حفظ",
    
    // Dialog / Prompts
    toast_logout: "🚪 تم تسجيل الخروج بنجاح!",
    toast_config_saved: "⚙️ تم حفظ إعدادات المنصة بنجاح!",
    toast_course_added: "📚 تم إضافة الكورس بنجاح!",
    toast_lesson_added: "🎬 تم إضافة الدرس بنجاح!"
  },
  en: {
    panel_title_overview: "Main Dashboard",
    panel_title_courses: "Curriculums & Courses",
    panel_title_exams: "Quizzes & Exams",
    panel_title_chat: "Direct Messaging Inbox",
    panel_title_ai: "AI English Assistant",
    panel_title_gamification: "Leaderboard & Achievements",
    panel_title_reports: "Performance Reports",
    panel_title_users: "Manage Platform Users",
    panel_title_config: "Platform Settings",

    // Sidebar menus
    menu_overview: "🏠 Overview",
    menu_courses: "📚 Courses & Lessons",
    menu_exams: "✏️ Exams & Quizzes",
    menu_chat: "💬 Direct Chat",
    menu_ai: "🤖 AI Assistant",
    menu_gamification: "🏆 Leaderboard",
    menu_reports: "📊 Performance",
    menu_users: "👥 Manage Members",
    menu_config: "⚙️ Settings",
    lbl_logout: "Log Out",

    // Overview
    lbl_welcome: "👋 Welcome back, {name}!",
    lbl_welcome_desc: "This is your personal dashboard. You can track your study progress, watch new lessons, submit assignments, and more from here.",
    lbl_announcements: "📢 Announcements",
    lbl_no_announcements: "No announcements at this time.",

    // Stats cards
    stat_courses: "Enrolled Courses",
    stat_courses_teacher: "Created Courses",
    stat_exams: "Exams Completed",
    stat_exams_pending: "Pending Exams",
    stat_attendance: "Attendance Rate",
    stat_points: "Total Points",
    stat_students: "Total Students",
    stat_active_users: "Active Users",
    stat_child_attendance: "Child's Attendance",
    stat_child_points: "Child's Points",

    // Tables & Buttons
    btn_start_exam: "Start Exam",
    btn_view_report: "View Report",
    btn_delete: "Delete",
    btn_edit: "Edit",
    btn_add_course: "Add New Course",
    btn_add_lesson: "Add Lesson",
    btn_save: "Save Changes",

    // Dialog / Prompts
    toast_logout: "🚪 Logged out successfully!",
    toast_config_saved: "⚙️ Platform configuration saved!",
    toast_course_added: "📚 Course added successfully!",
    toast_lesson_added: "🎬 Lesson added successfully!"
  }
};

// Default Mock Data if not present
const DEFAULT_COURSES = [
  { id: 'c1', title: 'English Phonetics & Letters', titleEn: 'English Phonetics & Letters', level: 'primary', grade: 'primary-1', thumb: '🔤', lessons: 5, progress: 80 },
  { id: 'c2', title: 'Present Perfect Masterclass', titleEn: 'Present Perfect Masterclass', level: 'prep', grade: 'prep-2', thumb: '⏰', lessons: 8, progress: 40 },
  { id: 'c3', title: 'Secondary Essay Writing Secrets', titleEn: 'Secondary Essay Writing Secrets', level: 'secondary', grade: 'secondary-3', thumb: '✍️', lessons: 12, progress: 10 },
  { id: 'c4', title: 'IELTS Speaking Academic', titleEn: 'IELTS Speaking Academic', level: 'advanced', grade: 'advanced-ielts', thumb: '🎙️', lessons: 15, progress: 0 }
];

const DEFAULT_EXAMS = [
  { id: 'e1', title: 'Phonetics Placement Quiz', titleEn: 'Phonetics Placement Quiz', grade: 'primary-1', questions: 10, time: 15, score: null },
  { id: 'e2', title: 'Present Simple vs Present Perfect', titleEn: 'Present Simple vs Present Perfect', grade: 'prep-2', questions: 15, time: 20, score: 85 },
  { id: 'e3', title: 'Thanaweya General Grammar Mock', titleEn: 'Thanaweya General Grammar Mock', grade: 'secondary-3', questions: 20, time: 30, score: null },
  { id: 'e4', title: 'IELTS Academic Writing Task 1', titleEn: 'IELTS Academic Writing Task 1', grade: 'advanced-ielts', questions: 5, time: 45, score: 90 }
];

const DEFAULT_REPORTS = [
  { subject: 'Grammar: Present Tenses', date: '2026-05-15', attendance: 'حضور', homework: 'تم التسليم', grade: 'A', notes: 'ممتاز، متفاعل جداً في الحصة' },
  { subject: 'Reading: Vocab & Context', date: '2026-05-22', attendance: 'حضور', homework: 'تم التسليم', grade: 'B+', notes: 'أداء جيد، يرجى مراجعة الحروف المركبة' },
  { subject: 'Speaking: Weekly Interview', date: '2026-05-29', attendance: 'غياب بعذر', homework: 'لم يسلم', grade: '-', notes: 'اعتذر الطالب عن الحضور' }
];

const DEFAULT_ANNOUNCEMENTS = [
  { tag: 'هام', tagEn: 'Important', date: '2026-06-05', title: 'بداية المجموعات الجديدة لشهر يونيو', titleEn: 'New batches starting for June', body: 'تنويه لجميع الطلاب وأولياء الأمور: المجموعات الجديدة للمرحلتين الإعدادية والثانوية تبدأ الأسبوع القادم. يرجى مراجعة الجداول وتأكيد الحضور.', bodyEn: 'Notice to all students and parents: New preparatory and secondary level batches begin next week. Please check your schedule and confirm attendance.' },
  { tag: 'اختبار', tagEn: 'Exam', date: '2026-06-02', title: 'موعد الامتحان الشامل لطلاب الثانوية', titleEn: 'Final comprehensive exam schedule', body: 'الامتحان الشامل يغطي الوحدات 1 إلى 6 يوم الجمعة القادم 12 يونيو الساعة 4 عصراً. الحضور إلزامي لجميع المشتركين.', bodyEn: 'The comprehensive exam covering Units 1 to 6 is next Friday, June 12th at 4:00 PM. Attendance is mandatory for all subscribers.' }
];

// Initialize Mock Databases
function initMockDatabases() {
  if (!localStorage.getItem(MOCK_COURSES_KEY)) localStorage.setItem(MOCK_COURSES_KEY, JSON.stringify(DEFAULT_COURSES));
  if (!localStorage.getItem(MOCK_EXAMS_KEY)) localStorage.setItem(MOCK_EXAMS_KEY, JSON.stringify(DEFAULT_EXAMS));
  if (!localStorage.getItem(MOCK_REPORTS_KEY)) localStorage.setItem(MOCK_REPORTS_KEY, JSON.stringify(DEFAULT_REPORTS));
  if (!localStorage.getItem(MOCK_ANNOUNCEMENTS_KEY)) localStorage.setItem(MOCK_ANNOUNCEMENTS_KEY, JSON.stringify(DEFAULT_ANNOUNCEMENTS));
}

// Check session on load
document.addEventListener('DOMContentLoaded', () => {
  initMockDatabases();
  checkUserSession();
  if (currentUser) {
    initDashboardLayout();
    initThemeAndLang();
    loadDashboardData();
    initAnnouncements();
    initChatSystem();
    initAISystem();
    initGamification();
  }
});

function checkUserSession() {
  const session = localStorage.getItem('currentUser');
  if (!session) {
    // Redirect to login page if no active session
    window.location.href = 'login.html';
  } else {
    currentUser = JSON.parse(session);
  }
}

// Apply theme and lang
function initThemeAndLang() {
  // Lang toggle click
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const targetLang = localStorage.getItem('lang') === 'ar' ? 'en' : 'ar';
      localStorage.setItem('lang', targetLang);
      applyDashboardLanguage(targetLang);
      
      // Notify page
      const customEvent = new CustomEvent('langChanged', { detail: { lang: targetLang } });
      document.dispatchEvent(customEvent);
    });
  }
  
  const currentLang = localStorage.getItem('lang') || 'ar';
  applyDashboardLanguage(currentLang);
}

function applyDashboardLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  const t = dashTranslations[lang];
  if (!t) return;

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => btn.textContent = lang === 'ar' ? 'EN' : 'AR');

  // Sidebar link translations
  document.querySelectorAll('.menu-item').forEach(btn => {
    const action = btn.dataset.panel;
    if (action === 'overview') btn.innerHTML = `<span class="menu-item-icon">🏠</span> <span>${t.menu_overview.replace('🏠 ', '')}</span>`;
    if (action === 'courses') btn.innerHTML = `<span class="menu-item-icon">📚</span> <span>${t.menu_courses.replace('📚 ', '')}</span>`;
    if (action === 'exams') btn.innerHTML = `<span class="menu-item-icon">✏️</span> <span>${t.menu_exams.replace('✏️ ', '')}</span>`;
    if (action === 'chat') btn.innerHTML = `<span class="menu-item-icon">💬</span> <span>${t.menu_chat.replace('💬 ', '')}</span>`;
    if (action === 'ai') btn.innerHTML = `<span class="menu-item-icon">🤖</span> <span>${t.menu_ai.replace('🤖 ', '')}</span>`;
    if (action === 'gamification') btn.innerHTML = `<span class="menu-item-icon">🏆</span> <span>${t.menu_gamification.replace('🏆 ', '')}</span>`;
    if (action === 'reports') btn.innerHTML = `<span class="menu-item-icon">📊</span> <span>${t.menu_reports.replace('📊 ', '')}</span>`;
    if (action === 'users') btn.innerHTML = `<span class="menu-item-icon">👥</span> <span>${t.menu_users.replace('👥 ', '')}</span>`;
    if (action === 'config') btn.innerHTML = `<span class="menu-item-icon">⚙️</span> <span>${t.menu_config.replace('⚙️ ', '')}</span>`;
  });

  const btnLogout = document.getElementById('lbl-logout');
  if (btnLogout) btnLogout.textContent = t.lbl_logout;

  // Headings
  const activeBtn = document.querySelector('.menu-item.active');
  if (activeBtn) {
    const activePanel = activeBtn.dataset.panel;
    document.getElementById('dashboard-panel-title').textContent = t['panel_title_' + activePanel] || t.panel_title_overview;
  }

  // Welcome banner
  const name = lang === 'ar' ? currentUser.name : (currentUser.nameEn || currentUser.name);
  const welcomeEl = document.getElementById('lbl-panel-welcome');
  if (welcomeEl) welcomeEl.textContent = t.lbl_welcome.replace('{name}', name);
  const welcomeDesc = document.getElementById('lbl-panel-welcome-desc');
  if (welcomeDesc) welcomeDesc.textContent = t.lbl_welcome_desc;
  
  const announceTitle = document.getElementById('lbl-announcements-title');
  if (announceTitle) announceTitle.textContent = t.lbl_announcements;

  // Tabs labels
  const coursesH = document.getElementById('lbl-courses-header');
  if (coursesH) coursesH.textContent = t.panel_title_courses;
  const examsH = document.getElementById('lbl-exams-header');
  if (examsH) examsH.textContent = t.panel_title_exams;
  const aiH = document.getElementById('lbl-ai-header');
  if (aiH) aiH.textContent = t.panel_title_ai;
  const gamifyH = document.getElementById('lbl-gamification-header');
  if (gamifyH) gamifyH.textContent = t.panel_title_gamification;
  const reportsH = document.getElementById('lbl-reports-header');
  if (reportsH) reportsH.textContent = t.panel_title_reports;
  const usersH = document.getElementById('lbl-users-header');
  if (usersH) usersH.textContent = t.panel_title_users;
  const configH = document.getElementById('lbl-config-header');
  if (configH) configH.textContent = t.panel_title_config;

  // Reload dynamically rendered widgets in the new language
  loadDashboardData();
  initAnnouncements();
  initGamification();
}

// Initialize Sidebar Menu items based on Role
function initDashboardLayout() {
  const sidebarNav = document.getElementById('sidebar-nav-menu');
  const role = currentUser.role;
  const lang = localStorage.getItem('lang') || 'ar';
  const t = dashTranslations[lang];

  let menuHTML = '';

  // Setup Sidebar depending on Roles
  if (role === 'student') {
    menuHTML += `
      <button class="menu-item active" data-panel="overview"><span class="menu-item-icon">🏠</span><span>${t.menu_overview}</span></button>
      <button class="menu-item" data-panel="courses"><span class="menu-item-icon">📚</span><span>${t.menu_courses}</span></button>
      <button class="menu-item" data-panel="exams"><span class="menu-item-icon">✏️</span><span>${t.menu_exams}</span></button>
      <button class="menu-item" data-panel="chat"><span class="menu-item-icon">💬</span><span>${t.menu_chat}</span></button>
      <button class="menu-item" data-panel="ai"><span class="menu-item-icon">🤖</span><span>${t.menu_ai}</span></button>
      <button class="menu-item" data-panel="gamification"><span class="menu-item-icon">🏆</span><span>${t.menu_gamification}</span></button>
      <button class="menu-item" data-panel="reports"><span class="menu-item-icon">📊</span><span>${t.menu_reports}</span></button>
    `;
  } else if (role === 'teacher') {
    menuHTML += `
      <button class="menu-item active" data-panel="overview"><span class="menu-item-icon">🏠</span><span>${t.menu_overview}</span></button>
      <button class="menu-item" data-panel="courses"><span class="menu-item-icon">📚</span><span>${t.menu_courses}</span></button>
      <button class="menu-item" data-panel="exams"><span class="menu-item-icon">✏️</span><span>${t.menu_exams}</span></button>
      <button class="menu-item" data-panel="chat"><span class="menu-item-icon">💬</span><span>${t.menu_chat}</span></button>
      <button class="menu-item" data-panel="reports"><span class="menu-item-icon">📊</span><span>${t.menu_reports}</span></button>
    `;
  } else if (role === 'parent') {
    menuHTML += `
      <button class="menu-item active" data-panel="overview"><span class="menu-item-icon">🏠</span><span>${t.menu_overview}</span></button>
      <button class="menu-item" data-panel="reports"><span class="menu-item-icon">📊</span><span>${t.menu_reports}</span></button>
      <button class="menu-item" data-panel="chat"><span class="menu-item-icon">💬</span><span>${t.menu_chat}</span></button>
    `;
  } else if (role === 'admin') {
    menuHTML += `
      <button class="menu-item active" data-panel="overview"><span class="menu-item-icon">🏠</span><span>${t.menu_overview}</span></button>
      <button class="menu-item" data-panel="users"><span class="menu-item-icon">👥</span><span>${t.menu_users}</span></button>
      <button class="menu-item" data-panel="courses"><span class="menu-item-icon">📚</span><span>${t.menu_courses}</span></button>
      <button class="menu-item" data-panel="config"><span class="menu-item-icon">⚙️</span><span>${t.menu_config}</span></button>
    `;
  }

  sidebarNav.innerHTML = menuHTML;

  // Header user profile
  document.getElementById('header-user-avatar').textContent = currentUser.avatar || '👨‍🎓';
  document.getElementById('header-user-name').textContent = lang === 'ar' ? currentUser.name : (currentUser.nameEn || currentUser.name);

  // Panel Toggling Event Listeners
  document.querySelectorAll('.menu-item[data-panel]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panelId = btn.dataset.panel;
      
      const panel = document.getElementById('panel-' + panelId);
      if (panel) panel.classList.add('active');

      document.getElementById('dashboard-panel-title').textContent = t['panel_title_' + panelId] || t.panel_title_overview;
      
      // If mobile, close sidebar after clicking
      if (window.innerWidth <= 768) {
        document.getElementById('dashboard-sidebar').classList.remove('open');
      }
    });
  });

  // Mobile Toggle Sidebar Hamburger
  const burger = document.getElementById('sidebar-hamburger');
  if (burger) {
    burger.addEventListener('click', () => {
      document.getElementById('dashboard-sidebar').classList.toggle('open');
    });
  }

  // Logout button handler
  document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    showToast(t.toast_logout, 'success');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1200);
  });
}

// Load dynamic data widgets
function loadDashboardData() {
  const lang = localStorage.getItem('lang') || 'ar';
  const t = dashTranslations[lang];
  const role = currentUser.role;

  // Populate dynamic stats cards
  const statsGrid = document.getElementById('overview-stats-grid');
  const roleContent = document.getElementById('overview-role-content');
  let statsHTML = '';

  const courses = JSON.parse(localStorage.getItem(MOCK_COURSES_KEY) || '[]');
  const exams = JSON.parse(localStorage.getItem(MOCK_EXAMS_KEY) || '[]');

  if (role === 'student') {
    statsHTML += `
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_courses}</h3>
          <div class="stat-val">${courses.length}</div>
        </div>
        <div class="stat-icon-wrap">📚</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_exams}</h3>
          <div class="stat-val">${exams.filter(e => e.score !== null).length}</div>
        </div>
        <div class="stat-icon-wrap">✏️</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_attendance}</h3>
          <div class="stat-val">94%</div>
        </div>
        <div class="stat-icon-wrap">📅</div>
      </div>
      <div class="stat-card" style="border-color: var(--gold);">
        <div class="stat-info">
          <h3>${t.stat_points}</h3>
          <div class="stat-val" style="color: var(--gold);">${currentUser.points || 0}</div>
        </div>
        <div class="stat-icon-wrap" style="color: var(--gold); background: rgba(245,158,11,0.1);">⭐</div>
      </div>
    `;

    // Render Student Courses list on overview
    let coursesHTML = `
      <div class="custom-card">
        <div class="card-title-bar">
          <h2>📚 ${lang === 'ar' ? 'كورساتي الحالية' : 'My Current Courses'}</h2>
        </div>
        <div class="course-list-grid">
    `;
    courses.forEach(c => {
      const title = lang === 'ar' ? c.title : c.titleEn;
      coursesHTML += `
        <div class="course-progress-card">
          <div class="course-progress-thumb">${c.thumb}</div>
          <div class="course-progress-body">
            <span class="course-badge-level">${c.level.toUpperCase()}</span>
            <h3 class="course-progress-title">${title}</h3>
            <div class="course-progress-bar-container">
              <div class="course-progress-text">
                <span>${lang === 'ar' ? 'التقدم' : 'Progress'}</span>
                <span>${c.progress}%</span>
              </div>
              <div class="course-progress-bar-track">
                <div class="course-progress-bar-fill" style="width: ${c.progress}%"></div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    coursesHTML += `</div></div>`;
    roleContent.innerHTML = coursesHTML;

  } else if (role === 'teacher') {
    statsHTML += `
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_courses_teacher}</h3>
          <div class="stat-val">${courses.length}</div>
        </div>
        <div class="stat-icon-wrap">📚</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_students}</h3>
          <div class="stat-val">148</div>
        </div>
        <div class="stat-icon-wrap">👨‍🎓</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_exams}</h3>
          <div class="stat-val">${exams.length}</div>
        </div>
        <div class="stat-icon-wrap">✏️</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_active_users}</h3>
          <div class="stat-val">89%</div>
        </div>
        <div class="stat-icon-wrap">🟢</div>
      </div>
    `;
    roleContent.innerHTML = `<div class="custom-card"><h3>📈 ${lang === 'ar' ? 'تحليلات المعلم والطلاب' : 'Teacher & Student Analytics'}</h3><p style="margin-top:12px; color:var(--text-muted);">${lang === 'ar' ? 'متابعة أداء الطلاب في الامتحانات ونسب المشاهدة الأسبوعية.' : 'Monitor student performance in exams and weekly viewing rates.'}</p></div>`;

  } else if (role === 'parent') {
    statsHTML += `
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_child_attendance}</h3>
          <div class="stat-val">92%</div>
        </div>
        <div class="stat-icon-wrap">📅</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_exams}</h3>
          <div class="stat-val">4</div>
        </div>
        <div class="stat-icon-wrap">✏️</div>
      </div>
      <div class="stat-card" style="border-color: var(--gold);">
        <div class="stat-info">
          <h3>${t.stat_child_points}</h3>
          <div class="stat-val" style="color:var(--gold);">1,250</div>
        </div>
        <div class="stat-icon-wrap" style="color:var(--gold);">⭐</div>
      </div>
    `;
    roleContent.innerHTML = `<div class="custom-card"><h3>👦 ${lang === 'ar' ? 'تقارير أداء الابن (أحمد محمود)' : "Son's Performance Reports (Ahmed)"}</h3><p style="margin-top:12px; color:var(--text-muted);">${lang === 'ar' ? 'يمكنك رؤية كشف الدرجات والحضور والغياب الخاص بابنك بالذهاب لتبويب تقارير الأداء.' : 'You can see your child grade sheets and attendance record in the Performance Reports tab.'}</p></div>`;

  } else if (role === 'admin') {
    statsHTML += `
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_students}</h3>
          <div class="stat-val">1,240</div>
        </div>
        <div class="stat-icon-wrap">👨‍🎓</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_courses_teacher}</h3>
          <div class="stat-val">${courses.length}</div>
        </div>
        <div class="stat-icon-wrap">📚</div>
      </div>
      <div class="stat-card">
        <div class="stat-info">
          <h3>${t.stat_active_users}</h3>
          <div class="stat-val">412</div>
        </div>
        <div class="stat-icon-wrap">🟢</div>
      </div>
      <div class="stat-card" style="border-color: var(--gold);">
        <div class="stat-info">
          <h3>${lang === 'ar' ? 'الاشتراكات الشهرية' : 'Monthly Subscriptions'}</h3>
          <div class="stat-val" style="color:var(--gold);">$1,450</div>
        </div>
        <div class="stat-icon-wrap" style="color:var(--gold);">💰</div>
      </div>
    `;
    roleContent.innerHTML = `<div class="custom-card"><h3>🛡️ ${lang === 'ar' ? 'لوحة تحكم المدير العام' : 'Super Admin Dashboard'}</h3><p style="margin-top:12px; color:var(--text-muted);">${lang === 'ar' ? 'التحكم بإعدادات الموقع، تعديل الكورسات، إضافة أعضاء وإدارة قاعدة البيانات.' : 'Control site configuration, edit courses, add members and manage database.'}</p></div>`;
  }

  statsGrid.innerHTML = statsHTML;

  // Render Courses in Panel-courses
  const coursesGrid = document.getElementById('courses-grid-container');
  if (coursesGrid) {
    let listHTML = '';
    courses.forEach(c => {
      const title = lang === 'ar' ? c.title : c.titleEn;
      listHTML += `
        <div class="course-progress-card">
          <div class="course-progress-thumb">${c.thumb}</div>
          <div class="course-progress-body">
            <span class="course-badge-level">${c.level.toUpperCase()}</span>
            <h3 class="course-progress-title">${title}</h3>
            <div class="course-progress-bar-container">
              <div class="course-progress-text">
                <span>${lang === 'ar' ? 'التقدم' : 'Progress'}</span>
                <span>${c.progress}%</span>
              </div>
              <div class="course-progress-bar-track">
                <div class="course-progress-bar-fill" style="width: ${c.progress}%"></div>
              </div>
            </div>
            <button class="btn btn-ghost" style="padding: 8px 12px; font-size: 0.8rem; margin-top: 10px;" onclick="showToast('${lang === 'ar' ? '📚 فتح مشغل الكورس...' : '📚 Opening course player...'}','success')">
              ${lang === 'ar' ? '🎦 تشغيل الدرس' : '🎦 Play Course'}
            </button>
          </div>
        </div>
      `;
    });
    coursesGrid.innerHTML = listHTML;
  }

  // Render Exams in Panel-exams
  const examsTable = document.getElementById('exams-table-body');
  if (examsTable) {
    let tblHTML = '';
    exams.forEach(e => {
      const title = lang === 'ar' ? e.title : e.titleEn;
      const scoreTxt = e.score !== null ? `<span class="badge-status pass">${e.score}%</span>` : `<span class="badge-status pending">${lang === 'ar' ? 'غير مُمتحن' : 'Not Attempted'}</span>`;
      const actionTxt = e.score !== null ? 
        `<button class="btn btn-ghost" style="padding: 6px 12px; font-size: 0.75rem;" onclick="showToast('${lang === 'ar' ? '📊 عرض الإجابات...' : '📊 Showing review...'}','success')">${lang === 'ar' ? 'مراجعة' : 'Review'}</button>` : 
        `<button class="btn btn-primary" style="padding: 6px 12px; font-size: 0.75rem;" onclick="launchExamPlayer('${e.id}')">${t.btn_start_exam}</button>`;
      
      tblHTML += `
        <tr>
          <td><strong>${title}</strong></td>
          <td>${e.grade.toUpperCase()}</td>
          <td>${e.questions}</td>
          <td>${e.time} ${lang === 'ar' ? 'دقيقة' : 'mins'}</td>
          <td>${scoreTxt}</td>
          <td>${actionTxt}</td>
        </tr>
      `;
    });
    examsTable.innerHTML = tblHTML;
  }

  // Render Reports
  const reportsTable = document.getElementById('reports-table-body');
  if (reportsTable) {
    const reports = JSON.parse(localStorage.getItem(MOCK_REPORTS_KEY) || '[]');
    let rHTML = '';
    reports.forEach(r => {
      rHTML += `
        <tr>
          <td><strong>${r.subject}</strong></td>
          <td>${r.date}</td>
          <td><span class="badge-status pass">${r.attendance}</span></td>
          <td>${r.homework}</td>
          <td><span style="font-weight:700;">${r.grade}</span></td>
          <td><span style="font-size:0.82rem; color:var(--text-muted);">${r.notes}</span></td>
        </tr>
      `;
    });
    reportsTable.innerHTML = rHTML;
  }

  // Render Users List (Admin Only)
  const usersTable = document.getElementById('users-table-body');
  if (usersTable && role === 'admin') {
    const customUsers = JSON.parse(localStorage.getItem('customUsers') || '[]');
    let uHTML = '';
    
    // List default and custom registered users
    const allUsers = [
      { name: 'الأستاذ محمد سمير', email: 'teacher@samir.com', role: 'teacher', phone: '01121342026', grade: '-' },
      { name: 'أحمد محمود', email: 'student@samir.com', role: 'student', phone: '01121342026', grade: 'secondary-3' },
      { name: 'أم محمد', email: 'parent@samir.com', role: 'parent', phone: '01121342026', grade: '-' },
      ...customUsers
    ];

    allUsers.forEach(u => {
      uHTML += `
        <tr>
          <td><strong>${u.name}</strong></td>
          <td>${u.email}</td>
          <td><span class="badge-status pending">${u.role.toUpperCase()}</span></td>
          <td>${u.phone || '-'}</td>
          <td>${u.grade || '-'}</td>
          <td>
            <button class="btn btn-ghost" style="padding: 4px 8px; font-size: 0.72rem; color: var(--danger); border-color: rgba(239,68,68,0.2);" onclick="showToast('${lang === 'ar' ? '🛡️ لا يمكن حذف أعضاء النظام الأساسيين' : '🛡️ System core users cannot be deleted'}', 'error')">${t.btn_delete}</button>
          </td>
        </tr>
      `;
    });
    usersTable.innerHTML = uHTML;
  }
}

// Announcements Widget
function initAnnouncements() {
  const container = document.getElementById('overview-announcements');
  if (!container) return;

  const lang = localStorage.getItem('lang') || 'ar';
  const announcements = JSON.parse(localStorage.getItem(MOCK_ANNOUNCEMENTS_KEY) || '[]');

  if (announcements.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:20px;">${lang === 'ar' ? 'لا توجد إعلانات حالياً.' : 'No announcements at this time.'}</p>`;
    return;
  }

  let html = '';
  announcements.forEach(a => {
    const tag = lang === 'ar' ? a.tag : a.tagEn;
    const title = lang === 'ar' ? a.title : a.titleEn;
    const body = lang === 'ar' ? a.body : a.bodyEn;
    html += `
      <div class="announcement-box">
        <div class="announce-header">
          <span class="announce-tag">${tag}</span>
          <span class="announce-date">📅 ${a.date}</span>
        </div>
        <h3 class="announce-title">${title}</h3>
        <p class="announce-body">${body}</p>
      </div>
    `;
  });
  container.innerHTML = html;
}

// Simulated Chat System
function initChatSystem() {
  const searchInput = document.getElementById('chat-user-search');
  const listContainer = document.getElementById('chat-list-container');
  const chatMsgContainer = document.getElementById('chat-msg-container');
  const chatInputMsg = document.getElementById('chat-input-msg');
  const btnSendMsg = document.getElementById('btn-send-msg');
  
  if (!listContainer) return;
  
  const lang = localStorage.getItem('lang') || 'ar';

  // Available users depending on role
  let contacts = [];
  if (currentUser.role === 'student' || currentUser.role === 'parent') {
    contacts = [
      { id: 't1', name: 'الأستاذ محمد سمير', nameEn: 'Mr. Mohamed Samir', role: 'teacher', avatar: '👨‍🏫', online: true },
      { id: 'admin', name: 'الدعم الفني للمنصة', nameEn: 'Platform Support', role: 'admin', avatar: '🔑', online: true }
    ];
  } else {
    contacts = [
      { id: 's1', name: 'أحمد محمود', nameEn: 'Ahmed Mahmoud', role: 'student', avatar: '👨‍🎓', online: true },
      { id: 's2', name: 'سارة أحمد', nameEn: 'Sara Ahmed', role: 'student', avatar: '👩‍🎓', online: false },
      { id: 's3', name: 'عمر حسن', nameEn: 'Omar Hassan', role: 'student', avatar: '👨', online: true },
      { id: 'p1', name: 'أم محمد', nameEn: 'Um Mohamed', role: 'parent', avatar: '👩', online: false }
    ];
  }

  let activeContact = null;
  const mockMessages = {}; // Local message history database

  // Render contacts list
  function renderContacts(filter = '') {
    listContainer.innerHTML = '';
    const filtered = contacts.filter(c => {
      const name = lang === 'ar' ? c.name : c.nameEn;
      return name.toLowerCase().includes(filter.toLowerCase());
    });

    filtered.forEach(c => {
      const name = lang === 'ar' ? c.name : c.nameEn;
      const onlineClass = c.online ? 'online' : '';
      const activeClass = activeContact && activeContact.id === c.id ? 'active' : '';
      const lastMsg = mockMessages[c.id] && mockMessages[c.id].length > 0 ? 
        mockMessages[c.id][mockMessages[c.id].length - 1].text : 
        (lang === 'ar' ? 'اضغط لبدء المحادثة...' : 'Click to chat...');

      const div = document.createElement('div');
      div.className = `chat-user-item ${activeClass}`;
      div.innerHTML = `
        <div class="chat-user-avatar">${c.avatar}<span class="status-dot ${onlineClass}"></span></div>
        <div>
          <div class="chat-user-name">${name}</div>
          <div class="chat-user-lastmsg">${lastMsg}</div>
        </div>
      `;
      div.addEventListener('click', () => selectContact(c));
      listContainer.appendChild(div);
    });
  }

  function selectContact(contact) {
    activeContact = contact;
    renderContacts();
    
    // Enable inputs
    chatInputMsg.disabled = false;
    btnSendMsg.disabled = false;
    chatInputMsg.placeholder = lang === 'ar' ? 'اكتب رسالتك...' : 'Type a message...';

    // Header updates
    document.getElementById('active-chat-avatar').textContent = contact.avatar;
    document.getElementById('active-chat-name').textContent = lang === 'ar' ? contact.name : contact.nameEn;
    document.getElementById('active-chat-status').textContent = contact.online ? (lang === 'ar' ? 'نشط الآن' : 'online') : '';

    // Load message history
    loadMessages();
  }

  function loadMessages() {
    chatMsgContainer.innerHTML = '';
    const history = mockMessages[activeContact.id] || [];
    
    if (history.length === 0) {
      chatMsgContainer.innerHTML = `<div style="text-align:center;color:var(--text-muted);font-size:0.8rem;padding:40px;">${lang === 'ar' ? 'لا توجد رسائل سابقة. ابدأ المحادثة الآن!' : 'No previous messages. Start chatting!'}</div>`;
      return;
    }

    history.forEach(m => {
      const sentClass = m.sender === 'me' ? 'sent' : 'received';
      const div = document.createElement('div');
      div.className = `msg-bubble-wrap ${sentClass}`;
      div.innerHTML = `
        <div class="msg-bubble">${m.text}</div>
        <span class="msg-time">${m.time}</span>
      `;
      chatMsgContainer.appendChild(div);
    });

    // Auto-scroll
    chatMsgContainer.scrollTop = chatMsgContainer.scrollHeight;
  }

  // Send message
  function sendMessage() {
    const text = chatInputMsg.value.trim();
    if (!text) return;

    if (!mockMessages[activeContact.id]) mockMessages[activeContact.id] = [];
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    mockMessages[activeContact.id].push({
      sender: 'me',
      text: text,
      time: timeStr
    });

    chatInputMsg.value = '';
    loadMessages();
    renderContacts();

    // Simulated Auto response
    setTimeout(() => {
      if (!activeContact || activeContact.id !== activeContact.id) return;
      
      const teacherResponses = [
        lang === 'ar' ? 'أهلاً بك! لقد تلقيت رسالتك وسأقوم بالرد عليك بالتفصيل قريباً جداً.' : 'Hello! I received your message and will get back to you shortly.',
        lang === 'ar' ? 'ممتاز جداً! هل قمت بحل الواجب الدراسي الأخير؟' : 'Great! Did you finish the last homework assignment?',
        lang === 'ar' ? 'تواصل رائع. يرجى مراجعة الجدول الدراسي للتأكد من مواعيد الحصة القادمة.' : 'Excellent communication. Please check the schedule for next class times.'
      ];

      const supportResponses = [
        lang === 'ar' ? 'أهلاً بك في الدعم الفني. كيف يمكننا مساعدتك اليوم؟' : 'Welcome to Platform Support. How can we help you today?',
        lang === 'ar' ? 'تم استلام طلبك وجاري مراجعته من قبل المشرفين.' : 'Your request has been received and is being reviewed by moderators.'
      ];

      const responsePool = activeContact.role === 'teacher' ? teacherResponses : supportResponses;
      const randomReply = responsePool[Math.floor(Math.random() * responsePool.length)];

      mockMessages[activeContact.id].push({
        sender: activeContact.id,
        text: randomReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      loadMessages();
      renderContacts();
      showToast(lang === 'ar' ? '📩 رسالة جديدة!' : '📩 New message!', 'success');
    }, 2500);
  }

  // Bind actions
  btnSendMsg.addEventListener('click', sendMessage);
  chatInputMsg.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
  searchInput.addEventListener('input', (e) => {
    renderContacts(e.target.value);
  });

  renderContacts();
}

// AI Grammar & Vocabulary Tutor Simulator
function initAISystem() {
  const aiInput = document.getElementById('ai-input-text');
  const btnSend = document.getElementById('btn-send-ai');
  const btnMic = document.getElementById('btn-mic-ai');
  const container = document.getElementById('ai-messages-container');

  if (!container) return;

  const lang = localStorage.getItem('lang') || 'ar';

  // Speech Recognition hook
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    
    recognition.onstart = () => {
      btnMic.textContent = '🛑';
      showToast(lang === 'ar' ? '🎤 جاري الاستماع... تحدث بالإنجليزية' : '🎤 Listening... Speak in English', 'success');
    };

    recognition.onresult = (e) => {
      const speechToText = e.results[0][0].transcript;
      aiInput.value = speechToText;
      btnMic.textContent = '🎤';
    };

    recognition.onerror = () => {
      btnMic.textContent = '🎤';
      showToast('❌ لم يتم التعرف على الصوت!', 'error');
    };

    recognition.onend = () => {
      btnMic.textContent = '🎤';
    };
  }

  if (btnMic) {
    btnMic.addEventListener('click', () => {
      if (!recognition) {
        showToast(lang === 'ar' ? '⚠️ متصفحك لا يدعم التعرف على الصوت!' : '⚠️ Speech Recognition not supported in this browser!', 'error');
        return;
      }
      recognition.start();
    });
  }

  function sendAIMessage() {
    const text = aiInput.value.trim();
    if (!text) return;

    // Append user bubble
    const userWrap = document.createElement('div');
    userWrap.className = 'ai-bubble-wrap user-msg';
    userWrap.innerHTML = `
      <div class="ai-msg-avatar">👤</div>
      <div class="ai-msg-bubble">${text}</div>
    `;
    container.appendChild(userWrap);
    aiInput.value = '';

    // Scroll
    container.scrollTop = container.scrollHeight;

    // AI Processing response (rules simulation)
    setTimeout(() => {
      const normalized = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      let feedback = '';
      let reply = '';

      // Grammar Checker Logic Rules
      if (normalized.includes('she go') || normalized.includes('he go') || normalized.includes('it go')) {
        feedback = `
          <div class="grammar-suggestion-card">
            <strong>💡 Grammar Correction:</strong>
            <div class="grammar-diff">
              <span class="grammar-wrong">✗ ${text}</span>
              <span class="grammar-right">✓ She/He goes to school</span>
            </div>
            <p style="margin-top: 6px; font-size: 0.75rem;">قاعدة المضارع البسيط: نستخدم الفعل مع حرف "s" مع الضمائر المفردة الغائبة (He, She, It).</p>
          </div>
        `;
        reply = lang === 'ar' ? 'لقد لاحظت وجود خطأ قواعدي طفيف في جملتك! يرجى الاطلاع على التصحيح أدناه.' : 'I noticed a minor grammatical error in your sentence! Please review the correction below.';
      } else if (normalized.includes('i is') || normalized.includes('you is') || normalized.includes('we is') || normalized.includes('they is')) {
        feedback = `
          <div class="grammar-suggestion-card">
            <strong>💡 Grammar Correction:</strong>
            <div class="grammar-diff">
              <span class="grammar-wrong">✗ ${text}</span>
              <span class="grammar-right">✓ I am / You are</span>
            </div>
            <p style="margin-top: 6px; font-size: 0.75rem;">قاعدة Verb to Be: نستخدم "am" مع "I"، ونستخدم "are" مع الجمع (You, We, They).</p>
          </div>
        `;
        reply = lang === 'ar' ? 'قواعد Verb to Be: يرجى التحقق من تصريف الفعل الصحيح في الأسفل.' : 'Verb to Be Rule: Please check the correct verb conjugation below.';
      } else if (normalized.includes('yesterday i go') || normalized.includes('i go yesterday')) {
        feedback = `
          <div class="grammar-suggestion-card">
            <strong>💡 Grammar Correction:</strong>
            <div class="grammar-diff">
              <span class="grammar-wrong">✗ ${text}</span>
              <span class="grammar-right">✓ Yesterday I went</span>
            </div>
            <p style="margin-top: 6px; font-size: 0.75rem;">قاعدة الماضي البسيط: الكلمة دالة "Yesterday" تتطلب تصريف الفعل للماضي البسيط (went وليس go).</p>
          </div>
        `;
        reply = lang === 'ar' ? 'خطأ في زمن الماضي! تم التدقيق أدناه.' : 'Past tense error! Please check the correction below.';
      } else {
        reply = lang === 'ar' ? `جملة رائعة وممتازة قواعدياً! "<strong>${text}</strong>". استمر في هذا الأداء المتميز! يمكنك سؤالي عن المعاني أو القواعد بأي وقت.` : `Excellent and grammatically correct sentence! "<strong>${text}</strong>". Keep up the great work! You can ask me any language question.`;
      }

      const assistantWrap = document.createElement('div');
      assistantWrap.className = 'ai-bubble-wrap assistant-msg';
      assistantWrap.innerHTML = `
        <div class="ai-msg-avatar">🤖</div>
        <div class="ai-msg-bubble">
          ${reply}
          ${feedback}
        </div>
      `;
      container.appendChild(assistantWrap);
      container.scrollTop = container.scrollHeight;
    }, 1500);
  }

  btnSend.addEventListener('click', sendAIMessage);
  aiInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendAIMessage();
  });
}

// Gamification System & Certificates
function initGamification() {
  const table = document.getElementById('leaderboard-table-body');
  if (!table) return;

  const lang = localStorage.getItem('lang') || 'ar';
  
  // Custom leaderboard database
  const leaderBoard = [
    { rank: 1, name: 'سارة أحمد', nameEn: 'Sara Ahmed', level: '🚀 متقدم / IELTS', score: 2840, avatar: '👩‍🎓' },
    { rank: 2, name: 'أحمد محمود', nameEn: 'Ahmed Mahmoud', level: '🎯 ثانوي', score: 2650, avatar: '👨‍🎓' },
    { rank: 3, name: 'عمر حسن', nameEn: 'Omar Hassan', level: '🎯 ثانوي', score: 2410, avatar: '👨' },
    { rank: 4, name: 'يوسف إبراهيم', nameEn: 'Youssef Ibrahim', level: '📖 إعدادي', score: 2180, avatar: '👦' },
    { rank: 5, name: 'فاطمة حسين', nameEn: 'Fatma Hussein', level: '🎯 ثانوي', score: 1990, avatar: '👧' }
  ];

  let boardHTML = '';
  leaderBoard.forEach(l => {
    const name = lang === 'ar' ? l.name : l.nameEn;
    const rankBadgeClass = l.rank <= 3 ? `rank-${l.rank}` : 'rank-other';
    boardHTML += `
      <tr>
        <td><span class="rank-badge ${rankBadgeClass}">${l.rank}</span></td>
        <td><div style="display:flex;gap:10px;align-items:center;"><span>${l.avatar}</span><strong>${name}</strong></div></td>
        <td>${l.level}</td>
        <td><span style="font-weight:900;color:var(--accent);">${l.score}</span></td>
      </tr>
    `;
  });
  table.innerHTML = boardHTML;

  // Render badges
  const badgesContainer = document.getElementById('badges-container');
  if (badgesContainer) {
    const badges = [
      { name: 'بداية الرحلة', nameEn: 'First Steps', icon: '🌱', desc: 'أول تسجيل دخول بالمنصة', descEn: 'First login to the platform', unlocked: true },
      { name: 'بطل الواجبات', nameEn: 'Homework Hero', icon: '📝', desc: 'تسليم 3 واجبات متتالية', descEn: 'Submit 3 homeworks in a row', unlocked: true },
      { name: 'نجم الكويزات', nameEn: 'Quiz Master', icon: '⭐', desc: 'الحصول على 100% باختبار', descEn: 'Score 100% in a quiz', unlocked: false }
    ];

    let badgeHTML = '';
    badges.forEach(b => {
      const unlockedClass = b.unlocked ? 'unlocked' : '';
      const name = lang === 'ar' ? b.name : b.nameEn;
      const desc = lang === 'ar' ? b.desc : b.descEn;
      badgeHTML += `
        <div class="badge-card ${unlockedClass}">
          <div class="badge-icon">${b.icon}</div>
          <div class="badge-name">${name}</div>
          <div class="badge-desc">${desc}</div>
        </div>
      `;
    });
    badgesContainer.innerHTML = badgeHTML;
  }

  // Update Points values
  const pointsVal = document.getElementById('my-points-value');
  if (pointsVal) {
    pointsVal.textContent = currentUser.points || 0;
  }
}

// Global functions exposed to window
window.launchExamPlayer = function(examId) {
  // We will detail the Exam Engine in exam.html, but let's redirect/mock for simple dashboard action
  showToast(localStorage.getItem('lang') === 'ar' ? '✍️ جاري بدء محرك الاختبارات...' : '✍️ Launching exam engine...', 'success');
  setTimeout(() => {
    window.location.href = `exam.html?id=${examId}`;
  }, 1000);
};

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
