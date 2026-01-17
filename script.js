function setArabic() {
    document.body.dir = "rtl";

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

    if (document.getElementById("contactTitle")) {
        document.getElementById("contactTitle").innerText = "تواصل معنا";
        document.getElementById("contactSubtitle").innerText = "نحن في خدمتك";
        document.getElementById("backBtn").innerText = "رجوع";
        document.getElementById("whatsText").innerText = "التواصل عبر واتساب";
        document.getElementById("emailText").innerText = "إرسال بريد إلكتروني";
    }
}

function setEnglish() {
    document.body.dir = "ltr";

    if (document.getElementById("contactTitle")) {
        document.getElementById("contactTitle").innerText = "Contact Us";
        document.getElementById("contactSubtitle").innerText = "Get in touch with us";
        document.getElementById("backBtn").innerText = "Back";
        document.getElementById("whatsText").innerText = "Chat on WhatsApp";
        document.getElementById("emailText").innerText = "Send Email";
    }
}
