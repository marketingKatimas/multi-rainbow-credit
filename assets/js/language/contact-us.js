// Get the language toggle checkbox and the text elements
// Navbar
const languageToggle = document.getElementById('language-toggle');
const HomeNav = document.getElementById('HomeNav');
const AboutNav = document.getElementById('AboutNav');
const OurServiceNav = document.getElementById('OurServiceNav');
const ContactUsNav = document.getElementById('ContactUsNav');
const CalculatorNav = document.getElementById('CalculatorNav');
const ApplyNav = document.getElementById('ApplyNav');

//The Header
const ContactUsHeader = document.getElementById('ContactUsHeader');
const HomeHeader = document.getElementById('HomeHeader');
const ContactUsHeaderLink = document.getElementById('ContactUsHeaderLink');

//Free Consultation
const FreeConsultation = document.getElementById('FreeConsultation');
const FreeConsultationDes = document.getElementById('FreeConsultationDes');
const fname = document.getElementById('name');
const fphone = document.getElementById('phone');
const femail = document.getElementById('email');
const fmessage = document.getElementById('message');
const SendMessage = document.getElementById('SendMessage');

// Footer
const FooterDes = document.getElementById('FooterDes');
const UsefulLink = document.getElementById('UsefulLink');
const HomeFooter = document.getElementById('HomeFooter');
const AboutFooter = document.getElementById('AboutFooter');
const OurServicesFooter = document.getElementById('OurServicesFooter');
const ContactUsFooter = document.getElementById('ContactUsFooter');
const CalculatorFooter = document.getElementById('CalculatorFooter');
const ApplyNowFooter = document.getElementById('ApplyNowFooter');
const GetInTouch = document.getElementById('GetInTouch');

// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
    languageToggle.checked = true;
    updateNavbar('bm');
    updateHeader('bm');
    updateContactUs('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateHeader('en');
    updateContactUs('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateHeader('bm');
        updateContactUs('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateHeader('en');
        updateContactUs('en');
        updateFooter('en');
        localStorage.setItem('language', 'en');
    }
});

function updateNavbar(language) {
    if (language === 'bm') {
        HomeNav.textContent = 'LAMAN UTAMA';
        AboutNav.textContent = 'TENTANG KAMI';
        OurServiceNav.textContent = 'PERKHIDMATAN KAMI';
        ContactUsNav.textContent = 'HUBUNGI KAMI';
        CalculatorNav.textContent = 'KALKULATOR';
        ApplyNav.textContent = 'MOHON SEKARANG';
    } else {
        HomeNav.textContent = 'HOME';
        AboutNav.textContent = 'ABOUT';
        OurServiceNav.textContent = 'OUR SERVICES';
        ContactUsNav.textContent = 'CONTACT US';
        CalculatorNav.textContent = 'CALCULATOR';
        ApplyNav.textContent = 'APPLY NOW';
    }
}

function updateHeader(language) {
    if (language === 'bm') {
        ContactUsHeader.textContent = 'Hubungi Kami';
        HomeHeader.textContent = 'Laman Utama';
        ContactUsHeaderLink.textContent = 'Hubungi Kami';
    } else {
        ContactUsHeader.textContent = 'Contact Us';
        HomeHeader.textContent = 'Home';
        ContactUsHeaderLink.textContent = 'Contact Us';
    }
}

function updateContactUs(language) {
    if (language === 'bm') {
        FreeConsultation.textContent = 'Konsultasi Percuma';
        FreeConsultationDes.textContent = 'Anda juga boleh meninggalkan mesej kepada kami dan kami akan mengaturkan panggilan semula secepat mungkin.';
        fname.placeholder = 'Nama Anda';
        fphone.placeholder = 'Telefon Anda';
        femail.placeholder = 'Emel anda';
        fmessage.placeholder = 'Mesej anda';
        SendMessage.textContent = 'HANTAR PERMINTAAN';
    } else {
        FreeConsultation.textContent = 'Free Consultation';
        FreeConsultationDes.textContent = 'You can also leave us a message and we will arrange for a call back as soon as possible.';
        fname.placeholder = 'Your Name';
        fphone.placeholder = 'Your Phone';
        femail.placeholder = 'Your Email';
        fmessage.placeholder = 'Your Message';
        SendMessage.textContent = 'SEND REQUEST';
    }
}

function updateFooter(language) {
    if (language === 'bm') {
        FooterDes.textContent = 'Setiap maklumat akan disampaikan dengan mudah dan tepat untuk mempromosikan ketelusan yang menyeluruh supaya anda tahu anda berada di tangan yang baik.';
        UsefulLink.textContent = 'Pautan Berguna';
        HomeFooter.textContent = 'Laman Utama';
        AboutFooter.textContent = 'Tentang Kami';
        OurServicesFooter.textContent = 'Perkhidmatan Kami';
        ContactUsFooter.textContent = 'Hubungi Kami';
        CalculatorFooter.textContent = 'Kalkulator';
        ApplyNowFooter.textContent = 'Mohon Sekarang';
        GetInTouch.textContent = 'Hubungi Kami';
    } else {
        FooterDes.textContent = 'Every piece of information will be relayed easily and accurately to promote total transparency so you know you’re in good hands.';
        UsefulLink.textContent = 'Useful Link';
        HomeFooter.textContent = 'Home';
        AboutFooter.textContent = 'About';
        OurServicesFooter.textContent = 'Our Services';
        ContactUsFooter.textContent = 'Contact us';
        CalculatorFooter.textContent = 'Calculator';
        ApplyNowFooter.textContent = 'Apply Now';
        GetInTouch.textContent = 'Get In Touch';
    }
}