// دالة لتغيير اللغة للعربي
function setArabic() {
    document.body.dir = "rtl";

    // حفظ اللغة في LocalStorage
    localStorage.setItem('lang', 'ar');

    // الصفحة الرئيسية
    if (document.getElementById("title")) {
        document.getElementById("title").innerText = "محمد للتسويق الإلكتروني";
        document.getElementById("subtitle").innerText = "حلول التسويق الرقمي";
        document.getElementById("contactMainBtn").innerText = "تواصل معنا";
        document.getElementById("navHome").innerText = "الرئيسية";
        document.getElementById("navAbout").innerText = "من نحن";
        document.getElementById("navServices").innerText = "الخدمات";
        document.getElementById("aboutTitle").innerText = "من نحن";
        document.getElementById("aboutText").innerText =
            "شركة محمد للتسويق الإلكتروني تساعد الشركات على النجاح عبر الإنترنت.";
        document.getElementById("servicesTitle").innerText = "خدماتنا";
        document.getElementById("service1").innerText = "التسويق عبر وسائل التواصل";
        document.getElementById("service2").innerText = "تصميم المواقع";
        document.getElementById("service3").innerText = "الإعلانات الإلكترونية";
    }

    // صفحة التواصل
    if (document.getElementById("contactTitle")) {
        document.getElementById("contactTitle").innerText = "تواصل معنا";
        document.getElementById("contactSubtitle").innerText = "نحن في خدمتك";
        document.getElementById("backBtn").innerText = "رجوع";
        document.getElementById("whatsText").innerText = "التواصل عبر واتساب";
        document.getElementById("emailText").innerText = "إرسال بريد إلكتروني";
    }
}

// دالة لتغيير اللغة للإنجليزي
function setEnglish() {
    document.body.dir = "ltr";

    // حفظ اللغة في LocalStorage
    localStorage.setItem('lang', 'en');

    if (document.getElementById("title")) {
        document.getElementById("title").innerText = "Mohammed Marketing";
        document.getElementById("subtitle").innerText = "Digital Marketing Solutions";
        document.getElementById("contactMainBtn").innerText = "Contact Us";
        document.getElementById("navHome").innerText = "Home";
        document.getElementById("navAbout").innerText = "About";
        document.getElementById("navServices").innerText = "Services";
        document.getElementById("aboutTitle").innerText = "About Us";
        document.getElementById("aboutText").innerText =
            "Mohammed Marketing is a digital marketing company that helps businesses grow online.";
        document.getElementById("servicesTitle").innerText = "Our Services";
        document.getElementById("service1").innerText = "Social Media Marketing";
        document.getElementById("service2").innerText = "Website Design";
        document.getElementById("service3").innerText = "Online Advertising";
    }

    if (document.getElementById("contactTitle")) {
        document.getElementById("contactTitle").innerText = "Contact Us";
        document.getElementById("contactSubtitle").innerText = "Get in touch with us";
        document.getElementById("backBtn").innerText = "Back";
        document.getElementById("whatsText").innerText = "Chat on WhatsApp";
        document.getElementById("emailText").innerText = "Send Email";
    }
}

// تشغيل اللغة المحفوظة عند تحميل الصفحة
window.onload = function() {
    const lang = localStorage.getItem('lang');
    if(lang === 'ar') {
        setArabic();
    } else {
        setEnglish();
    }
};
