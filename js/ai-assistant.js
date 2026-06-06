// ===== AI ENGLISH LEARNING ASSISTANT FOR MR. MOHAMED SAMIR PLATFORM =====

// Vocabulary Database by Educational Stages
const VOCABULARY_DATABASE = {
  primary: [
    { word: 'Elephant', ipa: '/ˈelɪfənt/', translation: 'فيل', level: 'Primary', example: 'The elephant is the largest land animal.' },
    { word: 'Computer', ipa: '/kəmˈpjuːtə/', translation: 'حاسوب', level: 'Primary', example: 'I use the computer to watch my online classes.' },
    { word: 'Teacher', ipa: '/ˈtiːtʃə/', translation: 'معلم', level: 'Primary', example: 'Mr. Mohamed is my favorite English teacher.' },
    { word: 'Beautiful', ipa: '/ˈbjuːtɪfl/', translation: 'جميل', level: 'Primary', example: 'Spring is a beautiful season with colorful flowers.' }
  ],
  prep: [
    { word: 'Comfortable', ipa: '/ˈkʌmftəbl/', translation: 'مريح', level: 'Preparatory', example: 'This sofa is very comfortable to sit on.' },
    { word: 'Interesting', ipa: '/ˈɪntrəstɪŋ/', translation: 'ممتع / مثير للاهتمام', level: 'Preparatory', example: 'English grammar is very interesting once you learn the rules.' },
    { word: 'Vegetable', ipa: '/ˈvedʒtəbl/', translation: 'خضار', level: 'Preparatory', example: 'Eating fresh vegetables every day keeps you healthy.' },
    { word: 'Accomplish', ipa: '/əˈkʌmplɪʃ/', translation: 'ينجز / يحقق', level: 'Preparatory', example: 'You can accomplish your goals if you practice daily.' }
  ],
  secondary: [
    { word: 'Phenomenon', ipa: '/fəˈnɒmɪnən/', translation: 'ظاهرة', level: 'Secondary', example: 'Northern Lights are a beautiful natural phenomenon.' },
    { word: 'Literally', ipa: '/ˈlɪtərəli/', translation: 'حرفياً', level: 'Secondary', example: 'The translator translated the poem literally.' },
    { word: 'Mischievous', ipa: '/ˈmɪstʃɪvəs/', translation: 'مؤذٍ / شقيّ', level: 'Secondary', example: 'The mischievous boy played a prank on his classmates.' },
    { word: 'Anachronism', ipa: '/əˈnækrənɪzəm/', translation: 'مفارقة تاريخية', level: 'Secondary', example: 'Using a dial telephone today is an anachronism.' }
  ],
  advanced: [
    { word: 'Entrepreneur', ipa: '/ˌɒntrəprəˈnɜː/', translation: 'رائد أعمال', level: 'Advanced', example: 'An innovative entrepreneur started this online academy.' },
    { word: 'Ubiquitous', ipa: '/juːˈbɪkwɪtəs/', translation: 'واسع الانتشار / كلي الوجود', level: 'Advanced', example: 'Cell phones are ubiquitous in modern society.' },
    { word: 'Sesquipedalian', ipa: '/ˌseskwɪpɪˈdeɪliən/', translation: 'طويل الكلمات', level: 'Advanced', example: 'Using sesquipedalian vocabulary can make writing hard to read.' },
    { word: 'Kakistocracy', ipa: '/ˌkækɪˈstɒkrəsi/', translation: 'حكم الأسوأ', level: 'Advanced', example: 'History has seen rise and fall of many kakistocracies.' }
  ]
};

// Dialogue Simulation preset topics and scripts
const DIALOGUE_TOPICS = {
  intro: {
    start: "Hello! Nice to meet you. I am Mr. Mohamed's AI speaking coach. Let's practice introducing ourselves. What is your name and where are you from?",
    startAr: "أهلاً بك! أنا مدرب المحادثة الذكي للمنصة. دعنا نتدرب على التعريف بالنفس. ما اسمك ومن أين أنت؟",
    reply: (text) => {
      const t = text.toLowerCase();
      if (t.includes('my name is') || t.includes('im') || t.includes('i am')) {
        return "That's a lovely name! Learning English can open many doors. What is your main goal for studying English with Mr. Mohamed?";
      }
      return "Interesting! It is great to meet you. Tell me, how long have you been studying English?";
    }
  },
  cafe: {
    start: "Welcome to Mr. Mohamed's English Cafe! What can I get started for you today?",
    startAr: "مرحباً بك في مقهى الإنجليزية الخاص بنا! ماذا يمكنني أن أقدم لك اليوم؟",
    reply: (text) => {
      const t = text.toLowerCase();
      if (t.includes('coffee') || t.includes('tea') || t.includes('latte') || t.includes('cappuccino')) {
        return "Excellent choice! Would you like that hot or iced? And what size (small, medium, or large)?";
      }
      if (t.includes('iced') || t.includes('hot') || t.includes('medium') || t.includes('large')) {
        return "Perfect! Would you like anything to eat with that, perhaps a fresh chocolate croissant or a muffin?";
      }
      return "Sure thing! Your order will be ready in a minute. Anything else I can help you with?";
    }
  },
  travel: {
    start: "Good morning. Passport control here. May I please see your passport and your landing card?",
    startAr: "صباح الخير. هنا مكتب الجوازات. هل يمكنني رؤية جواز سفرك وبطاقة الهبوط من فضلك؟",
    reply: (text) => {
      const t = text.toLowerCase();
      if (t.includes('here') || t.includes('passport') || t.includes('yes')) {
        return "Thank you. What is the main purpose of your visit to the UK? Is it business, study, or tourism?";
      }
      if (t.includes('tourism') || t.includes('holiday') || t.includes('business') || t.includes('study')) {
        return "I see. And how long do you plan to stay in the country, and where will you be residing?";
      }
      return "Alright, everything seems to be in order. Enjoy your stay! Next passenger please.";
    }
  },
  interview: {
    start: "Thank you for coming in today for the translator job interview. To start, could you please tell me a bit about your background and why you want this position?",
    startAr: "شكراً لحضورك مقابلة العمل لوظيفة مترجم اليوم. لنبدأ، هل يمكنك إخباري بنبذة عن خلفيتك ولماذا تريد هذه الوظيفة؟",
    reply: (text) => {
      const t = text.toLowerCase();
      if (t.includes('experience') || t.includes('translate') || t.includes('study') || t.includes('english')) {
        return "That sounds very impressive. How do you handle stressful situations and tight translation deadlines?";
      }
      return "I see. What do you consider to be your greatest strength when translating complex English texts?";
    }
  }
};

let dialogueHistory = [];
let currentTopic = 'intro';
let currentSpeechLang = 'en-US';

// Translations specific to AI assistant page
const aiTranslations = {
  ar: {
    dialogTopic: "اختر موضوع المحادثة:",
    btnRestart: "🔄 إعادة البدء",
    lblGrammarTitle: "⚡ مصحح القواعد السريع",
    lblEssayTitle: "📝 مدرب كتابة المقالات والفقرات",
    lblPrTitle: "تدريب المخارج والنطق",
    lblPrAccuracy: "الدقة والنطق",
    lblPrListen: "🔊 استمع للنطق",
    lblPrSpeak: "🎤 انطق الكلمة",
    lblPrFeedback: "اضغط على الزر واستمع ثم انطق الكلمة في الميكروفون",
    lblPrWordlist: "📚 اختر كلمة للتدرب عليها:",
    lblRecTitle: "🎯 خطة تعليمية مقترحة لك",
    lblVocabTitle: "📚 مفردات مقترحة لمستواك الدراسي",
    btnCheckGrammar: "🔍 فحص وتدقيق القواعد",
    btnCheckEssay: "📝 تحليل الكتابة وتقييمها",
    toastPrSuccess: "🎉 نطق ممتاز! أحسنت.",
    toastPrRetry: "💪 نطقك مفهوم ولكن حاول الاقتراب من اللكنة الصحيحة."
  },
  en: {
    dialogTopic: "Choose conversation topic:",
    btnRestart: "🔄 Restart Conversation",
    lblGrammarTitle: "⚡ Quick Grammar Corrector",
    lblEssayTitle: "📝 Essay & Paragraph Writing Coach",
    lblPrTitle: "Pronunciation & Phonetics Trainer",
    lblPrAccuracy: "Accuracy Rate",
    lblPrListen: "🔊 Listen Pronunciation",
    lblPrSpeak: "🎤 Pronounce Word",
    lblPrFeedback: "Click Listen, then click Pronounce and speak into the mic",
    lblPrWordlist: "📚 Choose a word to practice:",
    lblRecTitle: "🎯 Personalized Learning Plan",
    lblVocabTitle: "📚 Vocabulary for Your Grade",
    btnCheckGrammar: "🔍 Analyze Grammar",
    btnCheckEssay: "📝 Analyze Writing & Score",
    toastPrSuccess: "🎉 Excellent pronunciation! Good job.",
    toastPrRetry: "💪 Understood, but try to match the correct accent."
  }
};

// Initialize AI Assistant modules
document.addEventListener('DOMContentLoaded', () => {
  initSubpanelNavigation();
  initDialogueSimulator();
  initGrammarAndEssayCoach();
  initPronunciationTrainer();
  initPersonalizedRecommendations();
  
  // Listen to lang changes from app.js
  document.addEventListener('langChanged', (e) => {
    translateAIPanel(e.detail.lang);
  });

  const lang = localStorage.getItem('lang') || 'ar';
  translateAIPanel(lang);
});

// 1. Subpanels Navigation
function initSubpanelNavigation() {
  const tabs = document.querySelectorAll('#ai-subtabs-bar .tab-btn');
  const panels = document.querySelectorAll('.ai-subpanel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const target = tab.dataset.subpanel;
      document.getElementById(target).classList.add('active');
    });
  });
}

function translateAIPanel(lang) {
  const t = aiTranslations[lang];
  if (!t) return;

  // Update tabs
  const tabDialog = document.getElementById('btn-subtab-dialog');
  if (tabDialog) tabDialog.textContent = lang === 'ar' ? '💬 المحادثة والطلاقة (Dialogue)' : '💬 Conversation Practice';
  const tabCoach = document.getElementById('btn-subtab-coach');
  if (tabCoach) tabCoach.textContent = lang === 'ar' ? '📝 مدرب الكتابة والقواعد (Writing Coach)' : '📝 Grammar & Writing Coach';
  const tabPronounce = document.getElementById('btn-subtab-pronounce');
  if (tabPronounce) tabPronounce.textContent = lang === 'ar' ? '🗣️ مدرب النطق الصحيح (Pronunciation)' : '🗣️ Pronunciation Trainer';
  const tabRecommends = document.getElementById('btn-subtab-recommends');
  if (tabRecommends) tabRecommends.textContent = lang === 'ar' ? '🎯 التوصيات ومفردات اليوم' : '🎯 Learning Recommendations';

  // Subpanel elements
  const topicSelect = document.getElementById('lbl-dialog-topic-select');
  if (topicSelect) topicSelect.textContent = t.dialogTopic;
  const restartBtn = document.getElementById('btn-restart-dialog');
  if (restartBtn) restartBtn.textContent = t.btnRestart;

  const grammarTitle = document.getElementById('lbl-quick-grammar-title');
  if (grammarTitle) grammarTitle.textContent = t.lblGrammarTitle;
  const essayTitle = document.getElementById('lbl-essay-coach-title');
  if (essayTitle) essayTitle.textContent = t.lblEssayTitle;
  const checkGrammarBtn = document.getElementById('btn-check-grammar');
  if (checkGrammarBtn) checkGrammarBtn.textContent = t.btnCheckGrammar;
  const checkEssayBtn = document.getElementById('btn-check-essay');
  if (checkEssayBtn) checkEssayBtn.textContent = t.btnCheckEssay;

  const prBadge = document.getElementById('lbl-pr-badge-text');
  if (prBadge) prBadge.textContent = t.lblPrTitle;
  const prListenBtn = document.getElementById('btn-pr-listen');
  if (prListenBtn) prListenBtn.textContent = t.lblPrListen;
  const prSpeakBtn = document.getElementById('btn-pr-speak');
  if (prSpeakBtn) prSpeakBtn.textContent = t.lblPrSpeak;
  const prFeedback = document.getElementById('pr-speech-text-feedback');
  if (prFeedback && prFeedback.textContent.includes('اضغط')) prFeedback.textContent = t.lblPrFeedback;
  const prWordlistTitle = document.getElementById('lbl-pr-wordlist-title');
  if (prWordlistTitle) prWordlistTitle.textContent = t.lblPrWordlist;
  const prAccuracy = document.getElementById('lbl-pr-accuracy');
  if (prAccuracy) prAccuracy.textContent = t.lblPrAccuracy;

  const recTitle = document.getElementById('lbl-recommends-title');
  if (recTitle) recTitle.textContent = t.lblRecTitle;
  const vocabTitle = document.getElementById('lbl-ai-words-title');
  if (vocabTitle) vocabTitle.textContent = t.lblVocabTitle;

  // Refresh lists
  initPersonalizedRecommendations();
}

// 2. Dialogue Practice Simulator (Speaking & Fluency)
function initDialogueSimulator() {
  const selectTopic = document.getElementById('ai-dialog-topic');
  const messagesArea = document.getElementById('ai-dialog-messages');
  const input = document.getElementById('ai-dialog-input');
  const sendBtn = document.getElementById('btn-send-dialog-msg');
  const micBtn = document.getElementById('btn-mic-dialog-msg');
  const restartBtn = document.getElementById('btn-restart-dialog');

  if (!messagesArea) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    
    recognition.onstart = () => {
      micBtn.textContent = '🛑';
    };
    recognition.onresult = (e) => {
      input.value = e.results[0][0].transcript;
      micBtn.textContent = '🎤';
    };
    recognition.onerror = () => {
      micBtn.textContent = '🎤';
    };
    recognition.onend = () => {
      micBtn.textContent = '🎤';
    };
  }

  if (micBtn) {
    micBtn.addEventListener('click', () => {
      if (!recognition) {
        showToast('⚠️ التعرف على الصوت غير مدعوم في متصفحك!', 'error');
        return;
      }
      recognition.start();
    });
  }

  function startDialogue() {
    currentTopic = selectTopic.value;
    dialogueHistory = [];
    messagesArea.innerHTML = '';
    
    const lang = localStorage.getItem('lang') || 'ar';
    const startText = lang === 'ar' ? DIALOGUE_TOPICS[currentTopic].startAr : DIALOGUE_TOPICS[currentTopic].start;

    appendBubble('assistant', startText);
    speakSynthesis(startText);
  }

  function appendBubble(sender, text) {
    const wrap = document.createElement('div');
    wrap.className = `ai-bubble-wrap ${sender === 'user' ? 'user-msg' : 'assistant-msg'}`;
    wrap.innerHTML = `
      <div class="ai-msg-avatar">${sender === 'user' ? '👤' : '🤖'}</div>
      <div class="ai-msg-bubble">${text}</div>
    `;
    messagesArea.appendChild(wrap);
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  function handleUserReply() {
    const text = input.value.trim();
    if (!text) return;

    appendBubble('user', text);
    input.value = '';

    setTimeout(() => {
      // Get reply based on rules
      const reply = DIALOGUE_TOPICS[currentTopic].reply(text);
      appendBubble('assistant', reply);
      speakSynthesis(reply);
    }, 1500);
  }

  sendBtn.addEventListener('click', handleUserReply);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserReply();
  });
  selectTopic.addEventListener('change', startDialogue);
  restartBtn.addEventListener('click', startDialogue);

  // Auto-start first
  setTimeout(startDialogue, 1000);
}

// Speech Synthesis Speaker
function speakSynthesis(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // cancel current
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    
    // Find a premium English voice if possible
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google'));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }
    
    window.speechSynthesis.speak(utterance);
  }
}

// 3. Grammar & Essay Coach (Writing Feedback & Grammar correction)
function initGrammarAndEssayCoach() {
  const grammarInput = document.getElementById('ai-grammar-text');
  const grammarBtn = document.getElementById('btn-check-grammar');
  const grammarResult = document.getElementById('ai-grammar-result-area');
  
  const essayInput = document.getElementById('ai-essay-text');
  const essayBtn = document.getElementById('btn-check-essay');
  const essayResult = document.getElementById('ai-essay-report-area');

  const lang = localStorage.getItem('lang') || 'ar';

  if (grammarBtn) {
    grammarBtn.addEventListener('click', () => {
      const text = grammarInput.value.trim();
      if (!text) return;

      grammarBtn.disabled = true;
      grammarBtn.textContent = lang === 'ar' ? '⏳ جاري التدقيق...' : '⏳ Analyzing...';

      setTimeout(() => {
        const normalized = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        let corrected = text;
        let mistakes = [];

        // Check common rules
        if (normalized.includes('she go') && !normalized.includes('she goes')) {
          corrected = corrected.replace(/she go/gi, 'She goes');
          mistakes.push({ wrong: 'she go', right: 'She goes', rule: 'Subject-Verb Agreement: She (singular) takes verb with "s" in present tense.' });
        }
        if (normalized.includes('he go') && !normalized.includes('he goes')) {
          corrected = corrected.replace(/he go/gi, 'He goes');
          mistakes.push({ wrong: 'he go', right: 'He goes', rule: 'Subject-Verb Agreement: He takes verb with "s" in present tense.' });
        }
        if (normalized.includes('i is')) {
          corrected = corrected.replace(/i is/gi, 'I am');
          mistakes.push({ wrong: 'I is', right: 'I am', rule: 'Verb to Be: pronoun "I" always pairs with "am".' });
        }
        if (normalized.includes('you is')) {
          corrected = corrected.replace(/you is/gi, 'You are');
          mistakes.push({ wrong: 'you is', right: 'You are', rule: 'Verb to Be: plural/singular "You" always pairs with "are".' });
        }
        if (normalized.includes('yesterday i go')) {
          corrected = corrected.replace(/yesterday i go/gi, 'Yesterday I went');
          mistakes.push({ wrong: 'yesterday i go', right: 'Yesterday I went', rule: 'Past Tense: "Yesterday" requires past simple form of verb (went).' });
        }
        if (normalized.includes('a apple')) {
          corrected = corrected.replace(/a apple/gi, 'an apple');
          mistakes.push({ wrong: 'a apple', right: 'an apple', rule: 'Articles: Use "an" before words starting with vowel sounds.' });
        }
        if (normalized.includes('interested on')) {
          corrected = corrected.replace(/interested on/gi, 'interested in');
          mistakes.push({ wrong: 'interested on', right: 'interested in', rule: 'Prepositions: The adjective "interested" pairs with preposition "in".' });
        }

        grammarResult.style.display = 'block';
        grammarBtn.disabled = false;
        grammarBtn.textContent = lang === 'ar' ? '🔍 فحص وتدقيق القواعد' : '🔍 Analyze Grammar';

        if (mistakes.length === 0) {
          grammarResult.innerHTML = `
            <div style="padding:16px; background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.2); border-radius:var(--radius-sm); text-align:center;">
              <span style="font-size:2rem; display:block; margin-bottom:8px;">✅</span>
              <strong style="color:var(--success);">${lang === 'ar' ? 'جملة صحيحة قواعدياً!' : 'Grammatically Correct!'}</strong>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-top:6px;">"${text}"</p>
            </div>
          `;
        } else {
          let cardsHTML = '';
          mistakes.forEach(m => {
            cardsHTML += `
              <div class="grammar-suggestion-card" style="margin-bottom: 12px; text-align:start;">
                <strong>💡 Grammar Correction:</strong>
                <div class="grammar-diff">
                  <span class="grammar-wrong">✗ ${m.wrong}</span>
                  <span class="grammar-right">✓ ${m.right}</span>
                </div>
                <p style="margin-top: 6px; font-size: 0.75rem; color: var(--text-muted);">${m.rule}</p>
              </div>
            `;
          });
          grammarResult.innerHTML = `
            <div style="padding:16px; background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.2); border-radius:var(--radius-sm);">
              <strong style="color:var(--danger); display:block; margin-bottom:12px; text-align:center;">⚠️ تم العثور على أخطاء قواعدية:</strong>
              ${cardsHTML}
              <div style="margin-top:14px; padding-top:12px; border-top:1px solid var(--glass-border); text-align:start;">
                <span style="font-size:0.8rem; font-weight:700;">${lang === 'ar' ? 'الجملة المقترحة المصححة:' : 'Suggested Sentence:'}</span>
                <p style="font-size:0.9rem; color:var(--accent); font-weight:700; margin-top:4px;">"${corrected}"</p>
              </div>
            </div>
          `;
          
          // Save session error for recommendations trigger
          localStorage.setItem('lastGrammarError', mistakes[0].wrong);
        }
      }, 1500);
    });
  }

  if (essayBtn) {
    essayBtn.addEventListener('click', () => {
      const text = essayInput.value.trim();
      if (!text) return;

      essayBtn.disabled = true;
      essayBtn.textContent = lang === 'ar' ? '⏳ جاري تحليل الكتابة...' : '⏳ Evaluating essay...';

      setTimeout(() => {
        // Count words
        const words = text.split(/\s+/).filter(w => w.length > 0).length;
        
        let scoreGrammar = 8.5;
        let scoreVocab = 7.0;
        let scoreCoherence = 6.0;
        
        const lower = text.toLowerCase();
        const mistakes = [];

        // Check grammar rules inside essay
        if (lower.includes('she go ') || lower.includes('he go ')) {
          scoreGrammar -= 1.0;
          mistakes.push({ error: 'she go / he go', suggestion: 'she goes / he goes', explanation: 'Subject-Verb agreement error.' });
        }
        if (lower.includes(' i is ') || lower.includes(' you is ')) {
          scoreGrammar -= 1.0;
          mistakes.push({ error: 'I is / you is', suggestion: 'I am / you are', explanation: 'Incorrect conjugation of Verb to Be.' });
        }
        if (lower.includes('a apple')) {
          scoreGrammar -= 0.5;
          mistakes.push({ error: 'a apple', suggestion: 'an apple', explanation: 'Incorrect article before vowel.' });
        }

        // Coherence scores based on transitional words
        const transitions = ['however', 'therefore', 'furthermore', 'in addition', 'moreover', 'consequently', 'on the other hand'];
        let transitionCount = 0;
        transitions.forEach(tr => {
          if (lower.includes(tr)) {
            transitionCount++;
          }
        });

        scoreCoherence += Math.min(3.0, transitionCount * 1.0);
        
        // Vocabulary variety (word length / advanced words)
        const advancedWords = ['abundant', 'accomplish', 'beautiful', 'comfortable', 'interesting', 'phenomenon', 'literally', 'entrepreneur', 'ubiquitous'];
        let advancedCount = 0;
        advancedWords.forEach(adv => {
          if (lower.includes(adv)) {
            advancedCount++;
          }
        });
        
        scoreVocab += Math.min(2.0, advancedCount * 0.5);

        // Compute overall band score
        const overallBand = Math.round(((scoreGrammar + scoreVocab + scoreCoherence) / 3) * 10) / 10;
        
        essayResult.style.display = 'block';
        essayBtn.disabled = false;
        essayBtn.textContent = lang === 'ar' ? '📝 تحليل الكتابة وتقييمها' : '📝 Analyze Writing & Score';

        let listHTML = '';
        mistakes.forEach(m => {
          listHTML += `
            <div style="padding:10px; background:rgba(239,68,68,0.06); border-radius:var(--radius-sm); margin-bottom:10px; border-inline-start:4px solid var(--danger);">
              <span style="font-weight:700; color:var(--danger);">✗ Error: ${m.error}</span> &rarr; <span style="font-weight:700; color:var(--success);">✓ Suggestion: ${m.suggestion}</span>
              <p style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">${m.explanation}</p>
            </div>
          `;
        });

        if (mistakes.length === 0) {
          listHTML = `<p style="color:var(--success);font-weight:700;margin-bottom:12px;">✅ No grammar mistakes found! Excellent writing style.</p>`;
        }

        essayResult.innerHTML = `
          <div class="writing-coach-report">
            <h3 style="font-size:1.1rem; font-weight:800; margin-bottom:16px;">📊 Writing Analysis Report</h3>
            
            <div class="coach-score-row">
              <div class="coach-score-card" style="border-color:var(--accent);">
                <div class="coach-score-num" style="color:var(--accent);">${overallBand}</div>
                <div class="coach-score-lbl">Overall Band</div>
              </div>
              <div class="coach-score-card">
                <div class="coach-score-num">${scoreGrammar.toFixed(1)}</div>
                <div class="coach-score-lbl">Grammar</div>
              </div>
              <div class="coach-score-card">
                <div class="coach-score-num">${scoreVocab.toFixed(1)}</div>
                <div class="coach-score-lbl">Vocabulary</div>
              </div>
              <div class="coach-score-card">
                <div class="coach-score-num">${scoreCoherence.toFixed(1)}</div>
                <div class="coach-score-lbl">Coherence</div>
              </div>
            </div>

            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:20px; line-height:1.5;">
              <strong>Writing statistics:</strong> ${words} words. ${transitionCount} transitional markers. ${advancedCount} advanced vocabulary words utilized.
            </p>

            <div class="coach-feedback-list">
              <h4 style="font-size:0.9rem; font-weight:800; margin-bottom:10px;">🔍 Detailed Feedback:</h4>
              ${listHTML}
              
              <div style="margin-top:14px; padding:12px; background:rgba(56,189,248,0.05); border-radius:var(--radius-sm); border:1px solid rgba(56,189,248,0.1);">
                <strong>💡 Mr. Mohamed's Recommendation:</strong>
                <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px; line-height:1.5;">
                  ${overallBand >= 7.5 ? 'Excellent work! Keep expressing yourself using complex sentence structures and advanced conjunctions like "consequently".' : 'Good attempt. Focus on spelling correctness and review subject-verb agreement rules. Try utilizing transitional words to structure paragraphs better.'}
                </p>
              </div>
            </div>
          </div>
        `;
        
        // Award points for essay submission!
        const session = localStorage.getItem('currentUser');
        if (session) {
          const user = JSON.parse(session);
          user.points = (user.points || 0) + 100;
          localStorage.setItem('currentUser', JSON.stringify(user));
          // Refresh top points counter
          const pointsVal = document.getElementById('my-points-value');
          if (pointsVal) pointsVal.textContent = user.points;
        }
      }, 2000);
    });
  }
}

// 4. Pronunciation Training Station
function initPronunciationTrainer() {
  const targetWordEl = document.getElementById('pr-target-word');
  const targetIpaEl = document.getElementById('pr-target-ipa');
  const listenBtn = document.getElementById('btn-pr-listen');
  const speakBtn = document.getElementById('btn-pr-speak');
  const feedbackEl = document.getElementById('pr-speech-text-feedback');
  const scorePercent = document.getElementById('pr-score-percentage');
  const scoreBorder = document.getElementById('pr-score-border');
  const grid = document.getElementById('pr-words-grid');

  if (!grid) return;

  const currentLang = localStorage.getItem('lang') || 'ar';
  
  // Words listing depending on role/level
  const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const levelKey = (user.role === 'student' && user.grade) ? user.grade.split('-')[0] : 'prep'; // default prep
  const wordsList = VOCABULARY_DATABASE[levelKey] || VOCABULARY_DATABASE.prep;

  let activeWord = wordsList[0];

  // Render words list
  function renderWordsGrid() {
    grid.innerHTML = '';
    wordsList.forEach(w => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-ghost';
      btn.style.padding = '10px';
      btn.style.fontSize = '0.85rem';
      btn.textContent = w.word;
      if (w.word === activeWord.word) {
        btn.style.borderColor = 'var(--accent)';
        btn.style.color = 'var(--accent)';
      }
      btn.addEventListener('click', () => {
        activeWord = w;
        targetWordEl.textContent = w.word;
        targetIpaEl.textContent = w.ipa;
        scorePercent.textContent = '--%';
        scoreBorder.style.borderColor = 'var(--glass-border)';
        feedbackEl.textContent = currentLang === 'ar' ? 'اضغط على زر النطق وتحدث بالميكروفون' : 'Click pronounce button and speak into the mic';
        renderWordsGrid();
      });
      grid.appendChild(btn);
    });
  }

  // Speak Synthesis
  listenBtn.addEventListener('click', () => {
    speakSynthesis(activeWord.word);
  });

  // Voice recognition to score
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      speakBtn.textContent = '🛑';
      feedbackEl.textContent = currentLang === 'ar' ? '🎧 استماع... تحدث الآن' : '🎧 Listening... Speak now';
    };

    recognition.onresult = (e) => {
      const outputText = e.results[0][0].transcript;
      speakBtn.textContent = currentLang === 'ar' ? '🎤 انطق الكلمة' : '🎤 Pronounce';

      // Evaluate pronunciation similarity
      const target = activeWord.word.toLowerCase();
      const output = outputText.toLowerCase().trim();

      // Compute simple word-match accuracy
      let score = 0;
      if (output === target) {
        score = 100;
      } else if (target.includes(output) || output.includes(target)) {
        score = 80;
      } else {
        // Levenshtein distance simple simulation
        const commonLetters = Array.from(target).filter(char => output.includes(char)).length;
        score = Math.round((commonLetters / target.length) * 80);
      }
      
      score = Math.max(10, Math.min(100, score));

      // UI updates
      scorePercent.textContent = `${score}%`;
      
      if (score >= 80) {
        scoreBorder.style.borderColor = 'var(--success)';
        scorePercent.style.color = 'var(--success)';
        feedbackEl.innerHTML = `<span style="color:var(--success); font-weight:700;">"${outputText}"</span> - ${aiTranslations[currentLang].toastPrSuccess}`;
        showToast(aiTranslations[currentLang].toastPrSuccess, 'success');
        
        // Award points!
        const session = localStorage.getItem('currentUser');
        if (session) {
          const u = JSON.parse(session);
          u.points = (u.points || 0) + 15;
          localStorage.setItem('currentUser', JSON.stringify(u));
          const pointsVal = document.getElementById('my-points-value');
          if (pointsVal) pointsVal.textContent = u.points;
        }
      } else {
        scoreBorder.style.borderColor = 'var(--danger)';
        scorePercent.style.color = 'var(--danger)';
        feedbackEl.innerHTML = `<span style="color:var(--danger); font-weight:700;">"${outputText}"</span> - ${aiTranslations[currentLang].toastPrRetry}`;
      }
    };

    recognition.onerror = () => {
      speakBtn.textContent = currentLang === 'ar' ? '🎤 انطق الكلمة' : '🎤 Pronounce';
      feedbackEl.textContent = currentLang === 'ar' ? '⚠️ لم نتمكن من التقاط صوتك. حاول ثانية' : '⚠️ Speech not detected. Try again.';
    };
  }

  speakBtn.addEventListener('click', () => {
    if (!recognition) {
      showToast('⚠️ متصفحك لا يدعم التعرف على الصوت!', 'error');
      return;
    }
    recognition.start();
  });

  // First render
  targetWordEl.textContent = activeWord.word;
  targetIpaEl.textContent = activeWord.ipa;
  renderWordsGrid();
}

// 5. Personalized recommendations & Vocab list
function initPersonalizedRecommendations() {
  const recommendsContainer = document.getElementById('ai-recommends-list');
  const vocabContainer = document.getElementById('ai-vocab-list');

  if (!recommendsContainer) return;

  const lang = localStorage.getItem('lang') || 'ar';

  // Recommendations builder based on user logs
  const watchedLessons = JSON.parse(localStorage.getItem('watchedLessons') || '[]');
  const mockExams = JSON.parse(localStorage.getItem('mockExams') || '[]');
  const lastError = localStorage.getItem('lastGrammarError') || null;

  let recommends = [];

  if (lastError) {
    recommends.push({
      title: lang === 'ar' ? `مراجعة قاعدة: ${lastError}` : `Review grammar: ${lastError}`,
      desc: lang === 'ar' ? 'لقد قمت بارتكاب خطأ في هذه القاعدة خلال هذه الجلسة. ننصح بمراجعة كورس القواعد العامة.' : 'You made a mistake in this rule in this session. We suggest checking the General Grammar Masterclass.',
      action: 'courses',
      btnText: lang === 'ar' ? '🚀 اذهب للدرس' : '🚀 Go to lesson'
    });
  }

  // Check exams progress
  const hasPendingExams = mockExams.some(e => e.score === null);
  if (hasPendingExams) {
    const pending = mockExams.find(e => e.score === null);
    recommends.push({
      title: lang === 'ar' ? '✏️ اختبار معلق ينتظرك' : '✏️ Pending Exam Waiting',
      desc: lang === 'ar' ? `لديك اختبار غير مجتاز: "${matchedExamTitle(pending, lang)}". اختبر مستواك الآن!` : `You have a pending quiz: "${matchedExamTitle(pending, lang)}". Test your skills now!`,
      action: 'exams',
      btnText: lang === 'ar' ? '✍️ ابدأ الآن' : '✍️ Attempt Quiz'
    });
  }

  // Default recommendations
  recommends.push({
    title: lang === 'ar' ? '🗣️ مارس المحادثة اليومية' : '🗣️ Practice Daily Conversation',
    desc: lang === 'ar' ? 'استخدم محاكي المحادثات الذكي بالمنصة لتحسين الطلاقة واللكنة الإنجليزية لديك.' : 'Utilize the dialogue simulator tab on the assistant to improve fluency and speech accent.',
    action: 'dialog',
    btnText: lang === 'ar' ? '💬 ابدأ المحادثة' : '💬 Start Dialogue'
  });

  // Render recommendations
  let recHTML = '';
  recommends.forEach(r => {
    recHTML += `
      <div style="padding: 16px; background: var(--surface-2); border: 1px solid var(--glass-border); border-radius: var(--radius-sm); border-inline-start: 4px solid var(--accent); text-align:start;">
        <strong style="display: block; font-size: 1rem; color: var(--accent); margin-bottom: 6px;">${r.title}</strong>
        <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">${r.desc}</p>
        <button class="btn btn-ghost" style="padding: 6px 12px; font-size: 0.75rem;" onclick="handleRecommendationAction('${r.action}')">${r.btnText}</button>
      </div>
    `;
  });
  recommendsContainer.innerHTML = recHTML;

  // Render Vocab suggestions by user stage
  const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const levelKey = (user.role === 'student' && user.grade) ? user.grade.split('-')[0] : 'prep'; // default prep
  const stageVocabs = VOCABULARY_DATABASE[levelKey] || VOCABULARY_DATABASE.prep;

  let vocabHTML = '';
  stageVocabs.forEach(v => {
    vocabHTML += `
      <div style="padding: 12px; background: var(--surface-2); border-radius: var(--radius-sm); border-inline-start: 4px solid var(--gold); text-align:start;">
        <strong style="display: inline-block; font-size: 1.1rem; color: var(--gold);">${v.word}</strong>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-inline-start: 8px;">${v.ipa} · ${v.level}</span>
        <p style="font-size: 0.85rem; line-height: 1.4; font-weight:700; margin-top:4px; color:var(--text);">${v.translation}</p>
        <p style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.4; margin-top: 4px; border-top:1px dashed var(--glass-border); padding-top:4px;">
          <em>Ex: ${v.example}</em>
        </p>
      </div>
    `;
  });
  vocabContainer.innerHTML = vocabHTML;
}

function matchedExamTitle(exam, lang) {
  if (!exam) return '';
  return lang === 'ar' ? exam.title : exam.titleEn;
}

// Global action handler for recommendations buttons shortcut
window.handleRecommendationAction = function(action) {
  const lang = localStorage.getItem('lang') || 'ar';
  
  if (action === 'courses') {
    // Simulate clicking Courses in menu
    const btn = document.querySelector('.menu-item[data-panel="courses"]');
    if (btn) btn.click();
  } else if (action === 'exams') {
    // Simulate clicking Exams in menu
    const btn = document.querySelector('.menu-item[data-panel="exams"]');
    if (btn) btn.click();
  } else if (action === 'dialog') {
    // Switch to dialogue tab in AI
    const tab = document.getElementById('btn-subtab-dialog');
    if (tab) tab.click();
  }
};
