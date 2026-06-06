# 🎓 منصة الأستاذ محمد - الدليل الكامل

## البنية الكاملة للمشروع

```
mr-mohamed-samir/
├── server.js              # Server الرئيسي
├── package.json           # Dependencies
├── .env.example           # متغيرات البيئة
├── models/
│   ├── User.js           # نموذج المستخدم
│   ├── Course.js         # نموذج الكورس
│   └── Lesson.js         # نموذج الدرس
├── routes/
│   ├── auth.js           # تسجيل الدخول
│   ├── courses.js        # إدارة الكورسات
│   ├── lessons.js        # إدارة الدروس
│   ├── users.js          # ملف المستخدم
│   ├── enrollments.js    # التسجيلات
│   └── quizzes.js        # الاختبارات
├── middleware/
│   └── auth.js           # المصادقة
├── utils/
│   └── jwt.js            # JWT tokens
└── js/
    └── api-client.js     # Frontend API Client
```

## الميزات الديناميكية 🚀

✅ نظام المصادقة (Login/Register)
✅ إدارة الكورسات (Create/Read/Update/Delete)
✅ إدارة الدروس مع الفيديوهات
✅ التسجيل في الكورسات
✅ تتبع تقدم الطالب
✅ ملفات المستخدم المتكاملة

## التثبيت والتشغيل

```bash
# تثبيت المتطلبات
npm install

# إعداد ملف .env
cp .env.example .env

# تشغيل الـ Server
npm run dev
```

Server سيعمل على `http://localhost:5000`

## استخدام API من Frontend

```javascript
import api from './js/api-client.js';

// تسجيل مستخدم جديد
await api.register({
  name: 'أحمد',
  email: 'ahmed@example.com',
  password: 'pass123',
  role: 'student'
});

// تسجيل الدخول
await api.login({
  email: 'ahmed@example.com',
  password: 'pass123'
});

// الحصول على الكورسات
const courses = await api.getCourses('secondary');

// التسجيل في كورس
await api.enrollCourse(courseId);
```

## API Endpoints 📡

**Authentication**
- POST `/api/auth/register`
- POST `/api/auth/login`

**Courses**
- GET `/api/courses`
- GET `/api/courses/:id`
- POST `/api/courses` (Teacher/Admin)
- PUT `/api/courses/:id`
- DELETE `/api/courses/:id`
- POST `/api/courses/:id/enroll`

**Lessons**
- GET `/api/lessons/course/:courseId`
- GET `/api/lessons/:id`
- POST `/api/lessons` (Teacher/Admin)
- PUT `/api/lessons/:id`
- DELETE `/api/lessons/:id`

**Users**
- GET `/api/users/profile`
- PUT `/api/users/profile`
- POST `/api/users/complete-lesson/:lessonId`

مبروك! 🎉 لديك الآن تطبيق ديناميكي كامل!
