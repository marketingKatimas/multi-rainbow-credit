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
const AboutUsHeader = document.getElementById('AboutUsHeader');
const HomeHeader = document.getElementById('HomeHeader');
const AboutUsHeaderLink = document.getElementById('AboutUsHeaderLink');

//About Us
const AboutUs = document.getElementById('AboutUs');
const AboutUsOne = document.getElementById('AboutUsOne');
const AboutUsTwo = document.getElementById('AboutUsTwo');
const ContactUs = document.getElementById('ContactUs');

//What Make Us Different
const WhatMakeUsDifferent = document.getElementById('WhatMakeUsDifferent');
const FastApprovalProcess = document.getElementById('FastApprovalProcess');
const FastApprovalProcesDes = document.getElementById('FastApprovalProcesDes');
const LowInterestRate = document.getElementById('LowInterestRate');
const LowInterestRateDes = document.getElementById('LowInterestRateDes');
const ShariahComplaint = document.getElementById('ShariahComplaint');
const ShariahComplaintDes = document.getElementById('ShariahComplaintDes');
const FlexibleRepaymentPlan = document.getElementById('FlexibleRepaymentPlan');
const FlexibleRepaymentPlanDes = document.getElementById('FlexibleRepaymentPlanDes');

// Footer
const FooterDes = document.getElementById('FooterDes');
const UsefulLink = document.getElementById('UsefulLink');
const HomeFooter = document.getElementById('HomeFooter');
const AboutFooter = document.getElementById('AboutFooter');
const OurServicesFooter = document.getElementById('OurServicesFooter');
const ContactUsFooter = document.getElementById('ContactUsFooter');
const CalculatorFooter = document.getElementById('CalculatorFooter');
const ApplyNowFooter = document.getElementById('ApplyNowFooter');

// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
    languageToggle.checked = true;
    updateNavbar('bm');
    updateHeader('bm');
    updateAboutUs('bm');
    updateMakeUsDifferent('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateHeader('en');
    updateAboutUs('en');
    updateMakeUsDifferent('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateHeader('bm');
        updateAboutUs('bm');
        updateMakeUsDifferent('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateHeader('en');
        updateAboutUs('en');
        updateMakeUsDifferent('en');
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
        AboutUsHeader.textContent = 'Tentang Kami';
        HomeHeader.textContent = 'Laman Utama';
        AboutUsHeaderLink.textContent = 'Tentang Kami';
    } else {
        AboutUsHeader.textContent = 'About Us';
        HomeHeader.textContent = 'Home';
        AboutUsHeaderLink.textContent = 'About Us';
    }
}

function updateAboutUs(language) {
    if (language === 'bm') {
        AboutUs.textContent = 'Tentang Kami';
        AboutUsOne.textContent = 'Multi Rainbow Credit Sdn Bhd ialah pilihan bijak anda untuk pinjaman yang selamat. ';
        AboutUsTwo.textContent = 'Objektif utama kami adalah untuk membantu anda dalam perjalanan kewangan anda, tidak kira apa matlamat anda. Multi Rainbow Credit mereka pelan khas pinjaman berdasarkan pendapatan bulanan anda supaya anda tidak mengalami beban kewangan. ';
        ContactUs.value = 'Hubungi Kami';
    } else {
        AboutUs.textContent = 'About Us';
        AboutUsOne.textContent = 'Multi Rainbow Credit Sdn Bhd is your wisest choice for safe financing.';
        AboutUsTwo.textContent = 'Our core purpose is to help you in your financial journey, regardless of your goals and intentions. We will personalize a financing plan that caters to your budget to ease your financial burden.';
        ContactUs.value = 'Contact Us';
    }
}

function  updateMakeUsDifferent(language) {
    if (language === 'bm') {
        WhatMakeUsDifferent.textContent = 'Apa Yang Membezakan Kami';
        FastApprovalProcess.innerHTML = 'Proses Kelulusan Pantas';
        FastApprovalProcesDes.textContent = 'Proses senang & pantas membenarkan anda untuk meluangkan masa lebih untuk diri sendiri kerana kelulusan pinjaman kami hanya memakan masa yang pendek selepas penyemakan dokumen.';
        LowInterestRate.innerHTML = 'Kadar Faedah Rendah';
        LowInterestRateDes.textContent = 'Buang risau dengan kadar faedah rendah untuk bayaran balik bulanan yang senang.';
        ShariahComplaint.innerHTML = 'Patuh Shariah';
        ShariahComplaintDes.textContent = 'Kami terapkan khidmat pinjaman yang halal dan diluluskan seiring dengan undang-undang syariah. Setiap transaksi adalah sah & selamat.';
        FlexibleRepaymentPlan.innerHTML = 'Plan Bayaran Balik Fleksibel';
        FlexibleRepaymentPlanDes.textContent = 'Berdasarkan kelayakan kredit & pendapatan bulanan, anda akan menerima pelan pinjaman khas dari konsultan anda untuk meringankan beban kewangan anda.';
    } else {
        WhatMakeUsDifferent.textContent = 'What Makes Us Different';
        FastApprovalProcess.innerHTML = 'Fast Approval Process';
        FastApprovalProcesDes.textContent = 'Our time-efficient & convenient process leaves you with more time to spend on yourself after document submission.';
        LowInterestRate.innerHTML = 'Low Interest Rate';
        LowInterestRateDes.textContent = 'Throw your worries out the window with our low interest rate to ease your monthly repayments.';
        ShariahComplaint.innerHTML = 'Shariah-Complaint';
        ShariahComplaintDes.textContent = 'We implement a halal financing service, approved in accordance with Shariah law, to ensure every transaction is legal and safe.';
        FlexibleRepaymentPlan.innerHTML = 'Flexible Repayment Plan';
        FlexibleRepaymentPlanDes.textContent = 'We personalise a loan plan that caters to your needs based on your creditworthiness and income, so you won’t have to live from paycheck to paycheck every month.';
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
    } else {
        FooterDes.textContent = 'Every piece of information will be relayed easily and accurately to promote total transparency so you know you’re in good hands.';
        UsefulLink.textContent = 'Useful Link';
        HomeFooter.textContent = 'Home';
        AboutFooter.textContent = 'About';
        OurServicesFooter.textContent = 'Our Services';
        ContactUsFooter.textContent = 'Contact us';
        CalculatorFooter.textContent = 'Calculator';
        ApplyNowFooter.textContent = 'Apply Now';
    }
}