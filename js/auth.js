// ===== AUTHENTICATION LOGIC FOR MR. MOHAMED SAMIR ENGLISH PLATFORM =====

// Demo users database
const DEMO_USERS = {
  student: {
    email: 'student@samir.com',
    password: 'student123',
    name: 'أحمد محمود',
    nameEn: 'Ahmed Mahmoud',
    grade: 'secondary-3',
    points: 1250,
    avatar: '👨‍🎓'
  },
  teacher: {
    email: 'teacher@samir.com',
    password: 'teacher123',
    name: 'الأستاذ محمد سمير',
    nameEn: 'Mr. Mohamed Samir',
    avatar: '👨‍🏫'
  },
  parent: {
    email: 'parent@samir.com',
    password: 'parent123',
    name: 'أم محمد',
    nameEn: 'Um Mohamed',
    childEmail: 'student@samir.com',
    avatar: '👩'
  },
  admin: {
    email: 'admin@samir.com',
    password: 'admin123',
    name: 'المشرف العام',
    nameEn: 'Super Admin',
    avatar: '🔑'
  }
};

// Translations for login/register page elements
const authTranslations = {
  ar: {
    title: "بوابة الدخول | منصة الأستاذ محمد",
    backHome: "← العودة للرئيسية",
    tabLogin: "تسجيل الدخول",
    tabRegister: "إنشاء حساب جديد",
    lblUser: "البريد الإلكتروني أو اسم المستخدم *",
    lblPass: "كلمة المرور *",
    lblRole: "تسجيل الدخول كـ *",
    btnSubmitLogin: "🚀 دخول البوابة",
    lblRegName: "الاسم الكامل *",
    lblRegEmail: "البريد الإلكتروني *",
    lblRegPass: "كلمة المرور *",
    lblRegPhone: "رقم الهاتف *",
    lblRegRole: "التسجيل كـ *",
    lblRegGrade: "المرحلة الدراسية *",
    lblRegChildEmail: "البريد الإلكتروني للطالب (الابن) *",
    btnSubmitRegister: "🚀 إنشاء حساب مجاني",
    demoTitle: "🔑 حسابات تجريبية سريعة (Demo Logins)",
    toastLoginSuccess: "🎉 تم تسجيل الدخول بنجاح! جاري تحويلك...",
    toastLoginFailed: "❌ خطأ في البريد الإلكتروني أو كلمة المرور!",
    toastRegSuccess: "✨ تم إنشاء الحساب بنجاح! أهلاً بك معنا..."
  },
  en: {
    title: "Auth Gateway | Mr. Mohamed Samir Platform",
    backHome: "← Back to Home",
    tabLogin: "Login",
    tabRegister: "Register",
    lblUser: "Email or Username *",
    lblPass: "Password *",
    lblRole: "Login as *",
    btnSubmitLogin: "🚀 Access Gateway",
    lblRegName: "Full Name *",
    lblRegEmail: "Email *",
    lblRegPass: "Password *",
    lblRegPhone: "Phone Number *",
    lblRegRole: "Register as *",
    lblRegGrade: "Grade / Level *",
    lblRegChildEmail: "Student's Email (Son/Daughter) *",
    btnSubmitRegister: "🚀 Create Free Account",
    demoTitle: "🔑 Quick Demo Logins",
    toastLoginSuccess: "🎉 Login successful! Redirecting...",
    toastLoginFailed: "❌ Invalid email or password!",
    toastRegSuccess: "✨ Registration successful! Welcome to the family..."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initAuthLanguage();
  initAuthForms();
});

// Translation handling for auth page
function initAuthLanguage() {
  const currentLang = localStorage.getItem('lang') || 'ar';
  
  // Set doc attributes
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  
  // Add listeners to toggles (they are in main.js, but since navbar handles toggles, we link them)
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setTimeout(() => {
        const updatedLang = localStorage.getItem('lang');
        applyAuthTranslations(updatedLang);
      }, 50);
    });
  }
  
  applyAuthTranslations(currentLang);
}

function applyAuthTranslations(lang) {
  const t = authTranslations[lang];
  if (!t) return;

  document.title = t.title;
  
  const backHome = document.getElementById('btn-back-home');
  if (backHome) {
    backHome.innerHTML = `<span>${lang === 'ar' ? '←' : '→'}</span> ${t.backHome.replace('← ', '').replace('→ ', '')}`;
  }

  // Tabs
  const tabLogin = document.getElementById('tab-login-btn');
  if (tabLogin) tabLogin.textContent = t.tabLogin;
  const tabRegister = document.getElementById('tab-register-btn');
  if (tabRegister) tabRegister.textContent = t.tabRegister;

  // Labels Login
  const lblUser = document.getElementById('lbl-login-user');
  if (lblUser) lblUser.textContent = t.lblUser;
  const lblPass = document.getElementById('lbl-login-pass');
  if (lblPass) lblPass.textContent = t.lblPass;
  const lblRole = document.getElementById('lbl-login-role');
  if (lblRole) lblRole.textContent = t.lblRole;
  const btnSubLogin = document.getElementById('btn-submit-login');
  if (btnSubLogin) btnSubLogin.innerHTML = `<span>🚀</span> ${t.btnSubmitLogin.replace('🚀 ', '')}`;

  // Labels Register
  const lblRegName = document.getElementById('lbl-reg-name');
  if (lblRegName) lblRegName.textContent = t.lblRegName;
  const lblRegEmail = document.getElementById('lbl-reg-email');
  if (lblRegEmail) lblRegEmail.textContent = t.lblRegEmail;
  const lblRegPass = document.getElementById('lbl-reg-pass');
  if (lblRegPass) lblRegPass.textContent = t.lblRegPass;
  const lblRegPhone = document.getElementById('lbl-reg-phone');
  if (lblRegPhone) lblRegPhone.textContent = t.lblRegPhone;
  const lblRegRole = document.getElementById('lbl-reg-role');
  if (lblRegRole) lblRegRole.textContent = t.lblRegRole;
  const lblRegGrade = document.getElementById('lbl-reg-grade');
  if (lblRegGrade) lblRegGrade.textContent = t.lblRegGrade;
  const lblRegChildEmail = document.getElementById('lbl-reg-child-email');
  if (lblRegChildEmail) lblRegChildEmail.textContent = t.lblRegChildEmail;
  const btnSubReg = document.getElementById('btn-submit-register');
  if (btnSubReg) btnSubReg.innerHTML = `<span>🚀</span> ${t.btnSubmitRegister.replace('🚀 ', '')}`;

  // Demo Title
  const demoTitle = document.getElementById('demo-title-text');
  if (demoTitle) demoTitle.textContent = t.demoTitle;
}

// Authentication handling
function initAuthForms() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form-sec');

  // Handle Login Submission
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('login-username').value.trim();
      const password = document.getElementById('login-password').value;
      const role = document.getElementById('login-role').value;
      const lang = localStorage.getItem('lang') || 'ar';
      
      // Get custom registered users if any
      const customUsers = JSON.parse(localStorage.getItem('customUsers') || '[]');
      
      let matchedUser = null;
      
      // 1. Check custom registered users first
      const matchedCustom = customUsers.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password && u.role === role);
      
      if (matchedCustom) {
        matchedUser = matchedCustom;
      } else {
        // 2. Check demo users database
        const demoUser = DEMO_USERS[role];
        if (demoUser && demoUser.email.toLowerCase() === email.toLowerCase() && demoUser.password === password) {
          matchedUser = {
            email: demoUser.email,
            name: demoUser.name,
            nameEn: demoUser.nameEn,
            role: role,
            grade: demoUser.grade || null,
            points: demoUser.points || 0,
            avatar: demoUser.avatar
          };
        }
      }

      if (matchedUser) {
        // Successful login
        localStorage.setItem('currentUser', JSON.stringify(matchedUser));
        showToast(authTranslations[lang].toastLoginSuccess, 'success');
        
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1200);
      } else {
        // Failed login
        showToast(authTranslations[lang].toastLoginFailed, 'error');
      }
    });
  }

  // Handle Register Submission
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('reg-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const password = document.getElementById('reg-password').value;
      const phone = document.getElementById('reg-phone').value.trim();
      const role = document.getElementById('reg-role').value;
      const grade = document.getElementById('reg-grade').value;
      const childEmail = document.getElementById('reg-child-email').value.trim();
      const lang = localStorage.getItem('lang') || 'ar';

      const newUser = {
        email: email,
        password: password,
        name: name,
        nameEn: name, // simplified for demo
        role: role,
        phone: phone,
        grade: role === 'student' ? grade : null,
        childEmail: role === 'parent' ? childEmail : null,
        points: 0,
        avatar: role === 'student' ? '👨‍🎓' : '👩'
      };

      // Add to custom user list in local storage
      const customUsers = JSON.parse(localStorage.getItem('customUsers') || '[]');
      
      // Check if user already exists
      if (customUsers.some(u => u.email.toLowerCase() === email.toLowerCase()) || 
          Object.values(DEMO_USERS).some(u => u.email.toLowerCase() === email.toLowerCase())) {
        showToast(lang === 'ar' ? '❌ البريد الإلكتروني مسجل بالفعل!' : '❌ Email is already registered!', 'error');
        return;
      }

      customUsers.push(newUser);
      localStorage.setItem('customUsers', JSON.stringify(customUsers));

      // Automatically log the new user in
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      
      showToast(authTranslations[lang].toastRegSuccess, 'success');
      
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    });
  }
}
