// ===== EXAM ENGINE & CERTIFICATE GENERATOR FOR MR. MOHAMED SAMIR PLATFORM =====

// Detailed Question database categorized by Exam IDs
const QUESTIONS_DATABASE = {
  e1: [
    { q: "What is the sound of the letter 'A' in 'Cat'?", options: ["Long A (ay)", "Short A (ah)", "Silent", "O sound"], correct: 1 },
    { q: "Choose the word starting with a vowel sound:", options: ["Dog", "Apple", "Banana", "Tree"], correct: 1 },
    { q: "Which letter is silent in the word 'Write'?", options: ["r", "i", "t", "W"], correct: 3 },
    { q: "Identify the pronoun in: 'She is a student.'", options: ["is", "student", "She", "a"], correct: 2 },
    { q: "Complete: The cat is sitting ___ the table.", options: ["under", "between", "during", "of"], correct: 0 },
    { q: "Select the plural form of 'Child':", options: ["Childs", "Children", "Childrens", "Childes"], correct: 1 },
    { q: "Which word is a noun?", options: ["Run", "Beautiful", "Table", "Quickly"], correct: 2 },
    { q: "What is the opposite of 'Big'?", options: ["Tall", "Heavy", "Small", "Short"], correct: 2 },
    { q: "Identify the silent letter in 'Knee':", options: ["K", "n", "e", "none"], correct: 0 },
    { q: "Complete the alphabet: A, B, C, D, __", options: ["F", "E", "G", "H"], correct: 1 }
  ],
  e2: [
    { q: "She ___ to the club yesterday.", options: ["goes", "went", "has gone", "going"], correct: 1 },
    { q: "I ___ my homework already.", options: ["finished", "have finished", "finishes", "was finishing"], correct: 1 },
    { q: "Since 2020, we ___ in Cairo.", options: ["lived", "are living", "have lived", "live"], correct: 2 },
    { q: "They ___ seen that movie yet.", options: ["has not", "did not", "have not", "were not"], correct: 2 },
    { q: "Have you ever ___ a camel?", options: ["ride", "rode", "ridden", "riding"], correct: 2 },
    { q: "He ___ for 3 hours before he took a break.", options: ["studied", "has studied", "was studying", "studies"], correct: 0 },
    { q: "He ___ finished his studies last year.", options: ["has", "did", "was", "no helping verb needed"], correct: 3 },
    { q: "I haven't eaten sushi ___ my trip to Tokyo.", options: ["for", "since", "during", "ago"], correct: 1 },
    { q: "How long ___ they been learning English?", options: ["did", "have", "were", "are"], correct: 1 },
    { q: "She has been teaching ___ ten years.", options: ["since", "for", "ago", "during"], correct: 1 }
  ],
  e3: [
    { q: "If I ___ rich, I would buy a villa in London.", options: ["am", "were", "had been", "will be"], correct: 1 },
    { q: "By next month, we ___ this course.", options: ["will finish", "will have finished", "finish", "are finishing"], correct: 1 },
    { q: "She wished she ___ the ticket yesterday.", options: ["bought", "had bought", "buys", "would buy"], correct: 1 },
    { q: "He is senior ___ me in the company.", options: ["than", "to", "of", "from"], correct: 1 },
    { q: "Hardly ___ entered the room when the bell rang.", options: ["he had", "had he", "did he", "he has"], correct: 1 },
    { q: "I look forward to ___ Mr. Mohamed next week.", options: ["meet", "meeting", "met", "be meeting"], correct: 1 },
    { q: "Neither the teacher nor the students ___ present.", options: ["was", "were", "is", "has been"], correct: 1 },
    { q: "It is high time we ___ home.", options: ["go", "went", "should go", "are going"], correct: 1 },
    { q: "The thief confessed ___ the money.", options: ["to steal", "to stealing", "stolen", "of stealing"], correct: 1 },
    { q: "I would rather you ___ talk during class.", options: ["don't", "didn't", "won't", "haven't"], correct: 1 }
  ]
};

// Default fallback exam questions
const FALLBACK_QUESTIONS = [
  { q: "She ___ to school every day.", options: ["go", "goes", "going", "gone"], correct: 1 },
  { q: "What is the past tense of 'write'?", options: ["wrote", "written", "writed", "writes"], correct: 0 },
  { q: "Which word is a synonym of 'abundant'?", options: ["scarce", "plentiful", "limited", "rare"], correct: 1 },
  { q: "Choose the correct article: ___ Nile is the longest river.", options: ["A", "An", "The", "No article"], correct: 2 },
  { q: "If it rains, we ___ stay at home.", options: ["would", "will", "did", "were"], correct: 1 }
];

// Translations for Exam Gateway
const examTranslations = {
  ar: {
    questionCount: "سؤال {curr} من {total}",
    btnNext: "التالي",
    btnSkip: "تخطي السؤال",
    btnSubmit: "تقديم الامتحان 🚀",
    resultsPassTitle: "🏆 تهانينا، لقد نجحت!",
    resultsPassDesc: "أداء ممتاز ومستوى رائع في اختبار اليوم. استمر في السعي نحو التميز!",
    resultsFailTitle: "💪 حاول مجدداً، لا تيأس!",
    resultsFailDesc: "لم تجتز درجة النجاح المطلوبة (70%) هذه المرة. المراجعة والتكرار مفتاح التفوق.",
    finalScoreLabel: "الدرجة النهائية",
    backDash: "العودة للوحة التحكم",
    btnDownloadCert: "🎓 تحميل شهادة التفوق",
    reviewTitle: "📝 مراجعة إجاباتك",
    toastPassed: "🎉 أحسنت! نجحت في الاختبار!",
    toastFailed: "📚 لم تجتز هذه المرة، راجع المواد وحاول مجدداً!"
  },
  en: {
    questionCount: "Question {curr} of {total}",
    btnNext: "Next",
    btnSkip: "Skip Question",
    btnSubmit: "Submit Exam 🚀",
    resultsPassTitle: "🏆 Congratulations, You Passed!",
    resultsPassDesc: "Excellent performance and great level in today's exam. Keep striving for excellence!",
    resultsFailTitle: "💪 Keep trying, don't give up!",
    resultsFailDesc: "You did not pass the required passing score (70%) this time. Review and repetition are the keys to success.",
    finalScoreLabel: "Final Score",
    backDash: "Return to Dashboard",
    btnDownloadCert: "🎓 Download Certificate",
    reviewTitle: "📝 Review Your Answers",
    toastPassed: "🎉 Congratulations! You passed the exam!",
    toastFailed: "📚 Did not pass this time, review and try again!"
  }
};

let currentExamId = 'e1';
let questions = [];
let currentIndex = 0;
let userAnswers = []; // stores chosen option index
let timer = null;
let timeLeft = 0;
let totalExamTime = 0;
let currentUser = null;

document.addEventListener('DOMContentLoaded', () => {
  // Load current user
  const session = localStorage.getItem('currentUser');
  if (!session) {
    window.location.href = 'login.html';
    return;
  }
  currentUser = JSON.parse(session);

  // Read URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  currentExamId = urlParams.get('id') || 'e1';

  // Load questions
  questions = QUESTIONS_DATABASE[currentExamId] || FALLBACK_QUESTIONS;
  
  // Set times (3 minutes per question)
  totalExamTime = questions.length * 90; // seconds
  timeLeft = totalExamTime;

  initExamLanguage();
  initTimer();
  renderQuestion();
  initExamEvents();
});

// Localization
function initExamLanguage() {
  const currentLang = localStorage.getItem('lang') || 'ar';
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

  // Hook lang switcher
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setTimeout(() => {
        const updatedLang = localStorage.getItem('lang');
        applyExamTranslations(updatedLang);
      }, 50);
    });
  }

  applyExamTranslations(currentLang);
}

function applyExamTranslations(lang) {
  const t = examTranslations[lang];
  if (!t) return;

  document.getElementById('btn-skip-q').textContent = t.btnSkip;
  document.getElementById('btn-back-dash').textContent = t.backDash;
  document.getElementById('btn-download-cert').textContent = t.btnDownloadCert;
  document.getElementById('lbl-review-title').textContent = t.reviewTitle;
  document.getElementById('results-score-label-text').textContent = t.finalScoreLabel;
  
  // Update UI indicators
  updateProgressUI();
}

function updateProgressUI() {
  const lang = localStorage.getItem('lang') || 'ar';
  const t = examTranslations[lang];
  
  const progressText = document.getElementById('lbl-question-count');
  if (progressText) {
    progressText.textContent = t.questionCount.replace('{curr}', currentIndex + 1).replace('{total}', questions.length);
  }

  const percentText = document.getElementById('lbl-percent-complete');
  if (percentText) {
    const pct = Math.round((currentIndex / questions.length) * 100);
    percentText.textContent = pct + '%';
    document.getElementById('exam-progress-bar').style.width = pct + '%';
  }

  // Submit/Next button text
  const nextBtn = document.getElementById('btn-next-q');
  if (currentIndex === questions.length - 1) {
    nextBtn.innerHTML = t.btnSubmit;
  } else {
    nextBtn.innerHTML = `${t.btnNext} <span>${lang === 'ar' ? '←' : '→'}</span>`;
  }
}

// Timer
function initTimer() {
  const timerVal = document.getElementById('exam-timer-value');
  const timerWidget = document.getElementById('exam-timer-widget');
  
  timer = setInterval(() => {
    timeLeft--;
    
    // Format minutes and seconds
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerVal.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    // Warnings if less than 1.5 mins
    if (timeLeft <= 90) {
      timerWidget.classList.add('warning');
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      submitExam(true); // force submit
    }
  }, 1000);
}

// Render questions
function renderQuestion() {
  const q = questions[currentIndex];
  
  document.getElementById('question-text-value').textContent = q.q;

  const container = document.getElementById('question-options-container');
  container.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const isSelected = userAnswers[currentIndex] === idx ? 'selected' : '';
    const btn = document.createElement('div');
    btn.className = `option-item ${isSelected}`;
    btn.innerHTML = `
      <span class="option-badge">${['A', 'B', 'C', 'D'][idx]}</span>
      <span>${opt}</span>
    `;
    btn.addEventListener('click', () => {
      // Toggle selection
      document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
      btn.classList.add('selected');
      userAnswers[currentIndex] = idx;
    });
    container.appendChild(btn);
  });

  updateProgressUI();
}

function initExamEvents() {
  document.getElementById('btn-next-q').addEventListener('click', () => {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      submitExam();
    }
  });

  document.getElementById('btn-skip-q').addEventListener('click', () => {
    // Save answer as null
    if (userAnswers[currentIndex] === undefined) {
      userAnswers[currentIndex] = null;
    }
    
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      submitExam();
    }
  });
}

function submitExam(timeout = false) {
  clearInterval(timer);
  document.getElementById('exam-timer-widget').style.display = 'none';
  document.getElementById('question-panel').style.display = 'none';
  
  const resultsPanel = document.getElementById('results-panel');
  resultsPanel.style.display = 'block';

  // Evaluate Score
  let correctCount = 0;
  questions.forEach((q, idx) => {
    if (userAnswers[idx] === q.correct) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / questions.length) * 100);
  const passed = percentage >= 70;

  // Save score to database
  const exams = JSON.parse(localStorage.getItem('mockExams') || '[]');
  const matchedExam = exams.find(e => e.id === currentExamId);
  if (matchedExam) {
    matchedExam.score = percentage;
    localStorage.setItem('mockExams', JSON.stringify(exams));
  }

  // Update points in user session
  if (passed) {
    currentUser.points = (currentUser.points || 0) + 200;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  const lang = localStorage.getItem('lang') || 'ar';
  const t = examTranslations[lang];

  // Set Result panel texts
  const resultTitle = document.getElementById('results-title-text');
  const resultDesc = document.getElementById('results-desc-text');
  const resultEmoji = document.getElementById('results-emoji');
  const resultScore = document.getElementById('results-score-pct');
  const scoreCircle = document.getElementById('score-circle-color');

  resultScore.textContent = `${percentage}%`;

  if (passed) {
    resultEmoji.textContent = '🏆';
    resultTitle.textContent = t.resultsPassTitle;
    resultDesc.textContent = t.resultsPassDesc;
    scoreCircle.style.borderColor = 'var(--success)';
    resultScore.style.color = 'var(--success)';
    
    // Enable Certificate downloader
    const certBtn = document.getElementById('btn-download-cert');
    if (certBtn) {
      certBtn.style.display = 'inline-flex';
      certBtn.addEventListener('click', () => generateCertificate(percentage));
    }
    
    showToast(t.toastPassed, 'success');
  } else {
    resultEmoji.textContent = '💪';
    resultTitle.textContent = t.resultsFailTitle;
    resultDesc.textContent = t.resultsFailDesc;
    scoreCircle.style.borderColor = 'var(--danger)';
    resultScore.style.color = 'var(--danger)';
    showToast(t.toastFailed, 'error');
  }

  // Load Review list
  const reviewContainer = document.getElementById('exam-review-container');
  reviewContainer.innerHTML = '';

  questions.forEach((q, idx) => {
    const chosenOpt = userAnswers[idx] !== null && userAnswers[idx] !== undefined ? q.options[userAnswers[idx]] : (lang === 'ar' ? 'لم تجب' : 'Skipped');
    const correctOpt = q.options[q.correct];
    const isCorrect = userAnswers[idx] === q.correct;

    const div = document.createElement('div');
    div.className = 'review-item';
    div.innerHTML = `
      <div class="review-q">${idx + 1}. ${q.q}</div>
      <div class="review-ans ${isCorrect ? 'correct' : 'wrong'}">
        <span>${isCorrect ? '✓' : '✗'}</span>
        <span>${lang === 'ar' ? 'إجابتك' : 'Your Answer'}: ${chosenOpt}</span>
      </div>
      ${!isCorrect ? `
      <div class="review-ans correct">
        <span>✓</span>
        <span>${lang === 'ar' ? 'الإجابة الصحيحة' : 'Correct Answer'}: ${correctOpt}</span>
      </div>
      ` : ''}
    `;
    reviewContainer.appendChild(div);
  });
}

// HTML5 Canvas Certificate Generator
function generateCertificate(score) {
  const canvas = document.getElementById('certificate-canvas');
  const ctx = canvas.getContext('2d');

  const lang = localStorage.getItem('lang') || 'ar';
  const name = currentUser.name || 'Student Name';
  const exams = JSON.parse(localStorage.getItem('mockExams') || '[]');
  const matched = exams.find(e => e.id === currentExamId);
  const examTitle = matched ? (lang === 'ar' ? matched.title : matched.titleEn) : 'Final English Exam';

  // Draw background border template
  ctx.fillStyle = '#060E1F';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Outer gold border
  ctx.strokeStyle = '#F59E0B';
  ctx.lineWidth = 14;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  // Inner thin border
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
  ctx.lineWidth = 2;
  ctx.strokeRect(34, 34, canvas.width - 68, canvas.height - 68);

  // Draw corner flourishes (gold triangles)
  ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
  ctx.beginPath();
  ctx.moveTo(34, 34); ctx.lineTo(120, 34); ctx.lineTo(34, 120); ctx.closePath(); ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(canvas.width - 34, 34); ctx.lineTo(canvas.width - 120, 34); ctx.lineTo(canvas.width - 34, 120); ctx.closePath(); ctx.fill();

  ctx.beginPath();
  ctx.moveTo(34, canvas.height - 34); ctx.lineTo(120, canvas.height - 34); ctx.lineTo(34, canvas.height - 120); ctx.closePath(); ctx.fill();

  ctx.beginPath();
  ctx.moveTo(canvas.width - 34, canvas.height - 34); ctx.lineTo(canvas.width - 120, canvas.height - 34); ctx.lineTo(canvas.width - 34, canvas.height - 120); ctx.closePath(); ctx.fill();

  // Draw Content Texts (Bilingual support)
  ctx.fillStyle = '#EFF6FF';
  ctx.textAlign = 'center';

  if (lang === 'ar') {
    // ARABIC CERTIFICATE TEXT
    ctx.font = 'bold 20px Cairo, sans-serif';
    ctx.fillText('منصة الأستاذ محمد سمير لتعليم اللغة الإنجليزية', canvas.width / 2, 80);

    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 44px Cairo, sans-serif';
    ctx.fillText('شهادة تقدير وتفوق', canvas.width / 2, 160);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '16px Cairo, sans-serif';
    ctx.fillText('تمنح هذه الشهادة بكل فخر واعتزاز للطالب/الطالبة:', canvas.width / 2, 220);

    ctx.fillStyle = '#38BDF8';
    ctx.font = 'bold 36px Cairo, sans-serif';
    ctx.fillText(name, canvas.width / 2, 280);

    ctx.fillStyle = '#EFF6FF';
    ctx.font = '18px Cairo, sans-serif';
    ctx.fillText(`وذلك لاجتيازه بنجاح وتفوق اختبار: "${examTitle}"`, canvas.width / 2, 340);

    ctx.font = 'bold 20px Cairo, sans-serif';
    ctx.fillText(`بنسبة نجاح متميزة بلغت: ${score}%`, canvas.width / 2, 390);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '14px Cairo, sans-serif';
    ctx.fillText(`تاريخ الإصدار: ${new Date().toLocaleDateString('ar-EG')}`, canvas.width / 2 + 180, 480);

    // Signature
    ctx.fillStyle = '#EFF6FF';
    ctx.font = 'italic 18px cursive';
    ctx.fillText('Mr. Mohamed Samir', canvas.width / 2 - 180, 470);
    ctx.fillStyle = '#94A3B8';
    ctx.font = '14px Cairo, sans-serif';
    ctx.fillText('توقيع معلم المادة', canvas.width / 2 - 180, 495);

  } else {
    // ENGLISH CERTIFICATE TEXT
    ctx.font = 'bold 20px Outfit, sans-serif';
    ctx.fillText('MR. MOHAMED SAMIR ENGLISH PLATFORM', canvas.width / 2, 80);

    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 40px Outfit, sans-serif';
    ctx.fillText('CERTIFICATE OF ACHIEVEMENT', canvas.width / 2, 160);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '16px Outfit, sans-serif';
    ctx.fillText('This is proudly presented to:', canvas.width / 2, 220);

    ctx.fillStyle = '#38BDF8';
    ctx.font = 'bold 36px Outfit, sans-serif';
    ctx.fillText(name, canvas.width / 2, 280);

    ctx.fillStyle = '#EFF6FF';
    ctx.font = '18px Outfit, sans-serif';
    ctx.fillText(`For successfully passing the examination: "${examTitle}"`, canvas.width / 2, 340);

    ctx.font = 'bold 20px Outfit, sans-serif';
    ctx.fillText(`With a final passing score of: ${score}%`, canvas.width / 2, 390);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '14px Outfit, sans-serif';
    ctx.fillText(`Date: ${new Date().toLocaleDateString('en-US')}`, canvas.width / 2 + 180, 480);

    // Signature
    ctx.fillStyle = '#EFF6FF';
    ctx.font = 'italic 18px cursive';
    ctx.fillText('Mr. Mohamed Samir', canvas.width / 2 - 180, 470);
    ctx.fillStyle = '#94A3B8';
    ctx.font = '14px Outfit, sans-serif';
    ctx.fillText('Teacher Signature', canvas.width / 2 - 180, 495);
  }

  // Draw small decorative golden circle stamp
  ctx.fillStyle = 'rgba(245, 158, 11, 0.4)';
  ctx.beginPath();
  ctx.arc(canvas.width / 2, 470, 30, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#F59E0B';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, 470, 26, 0, Math.PI * 2);
  ctx.stroke();

  // Export Canvas as image download
  const image = canvas.toDataURL("image/png");
  const link = document.createElement('a');
  link.download = `${name.replace(/\s+/g, '_')}_certificate.png`;
  link.href = image;
  link.click();
}
