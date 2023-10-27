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
const OurServicesHeader = document.getElementById('OurServicesHeader');
const HomeHeader = document.getElementById('HomeHeader');
const OurServicesLink = document.getElementById('OurServicesLink');

//Our Services
const OurServices = document.getElementById('OurServices');
const OurServicesDes = document.getElementById('OurServicesDes');
const PersonalLoan = document.getElementById('PersonalLoan');
const PersonalLoanDes = document.getElementById('PersonalLoanDes');
const ReadMorePersonalLoan = document.getElementById('ReadMorePersonalLoan');
const PaydayLoan = document.getElementById('PaydayLoan');
const PaydayLoanDes = document.getElementById('PaydayLoanDes');
const ReadMorePaydayLoan = document.getElementById('ReadMorePaydayLoan');
const DebtConsolidation = document.getElementById('DebtConsolidation');
const DebtConsolidationDes = document.getElementById('DebtConsolidationDes');
const ReadMoreDebtConsolidation = document.getElementById('ReadMoreDebtConsolidation');
const IslamicLoan = document.getElementById('IslamicLoan');
const IslamicLoanDes = document.getElementById('IslamicLoanDes');
const ReadMoreIslamicLoan = document.getElementById('ReadMoreIslamicLoan');
const WeddingLoan = document.getElementById('WeddingLoan');
const WeddingLoanDes = document.getElementById('WeddingLoanDes');
const ReadMoreWeddingLoan = document.getElementById('ReadMoreWeddingLoan');
const RenovationLoan = document.getElementById('RenovationLoan');
const RenovationLoanDes = document.getElementById('RenovationLoanDes');
const ReadMoreRenovationLoan = document.getElementById('ReadMoreRenovationLoan');
const MedicalLoan = document.getElementById('MedicalLoan');
const MedicalLoanDes = document.getElementById('MedicalLoanDes');
const ReadMoreMedicalLoan = document.getElementById('ReadMoreMedicalLoan');
const EducationLoan = document.getElementById('EducationLoan');
const EducationLoanDes = document.getElementById('EducationLoanDes');
const ReadMoreEducationLoan = document.getElementById('ReadMoreEducationLoan');

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
    updateOurServices('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateHeader('en');
    updateOurServices('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateHeader('bm');
        updateOurServices('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateHeader('en');
        updateOurServices('en');
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
        OurServicesHeader.textContent = 'Perkhidmatan Kami';
        HomeHeader.textContent = 'Laman Utama';
        OurServicesLink.textContent = 'Perkhidmatan Kami';
    } else {
        OurServicesHeader.textContent = 'Our Services';
        HomeHeader.textContent = 'Home';
        OurServicesLink.textContent = 'Our Services';
    }
}

function updateOurServices(language) {
    if (language === 'bm') {
        OurServices.textContent = 'Perkhidmatan Kami';
        OurServicesDes.textContent = 'kami menawarkan pelbagai penyelesaian pembiayaan untuk memenuhi keperluan peribadi anda dengan aplikasi tanpa kerumitan dan keperluan dokumen mudah';
        PersonalLoan.textContent = 'Pembiayaan Peribadi';
        PersonalLoanDes.textContent = 'Dengan pembiayaan peribadi kami, anda akan menerima pelan direka khas';
        ReadMorePersonalLoan.textContent = 'Ketahui Lebih Lanjut';
        PaydayLoan.textContent = 'Pembiayaan Hari Gaji';
        PaydayLoanDes.textContent = 'Bagi situasi tidak diduga, pembiayaan hari gaji diwujudkan untuk memberi anda';
        ReadMorePaydayLoan.textContent = 'Ketahui Lebih Lanjut';
        DebtConsolidation.textContent = 'Penyatuan Hutang';
        DebtConsolidationDes.textContent = 'Jangan biarkan hutang berlambak membebankan anda! Urus dan kurangkan';
        ReadMoreDebtConsolidation.textContent = 'Ketahui Lebih Lanjut';
        IslamicLoan.textContent = 'Pembiayaan Islamik';
        IslamicLoanDes.textContent = 'Pembiayaan Islamik kami patuh pada syariah dan mengikuti sistem tawarruq,';
        ReadMoreIslamicLoan.textContent = 'Ketahui Lebih Lanjut';
        WeddingLoan.textContent = 'Pembiayaan Kahwin';
        WeddingLoanDes.textContent = 'Untuk yang ingin berkahwin, biayai majlis kahwin idaman anda dengan pembiayaan';
        ReadMoreWeddingLoan.textContent = 'Ketahui Lebih Lanjut';
        RenovationLoan.textContent = 'Pembiayaan Renovasi';
        RenovationLoanDes.textContent = 'Dapatkan modal untuk ubahsuai rumah anda yang sekarang kepada rumah impian!';
        ReadMoreRenovationLoan.textContent = 'Ketahui Lebih Lanjut';
        MedicalLoan.textContent = 'Pembiayaan Perubatan';
        MedicalLoanDes.textContent = 'Kesihatan anda keutamaan kami. Dengan pembiayaan perubatan kami, dapatkan';
        ReadMoreMedicalLoan.textContent = 'Ketahui Lebih Lanjut';
        EducationLoan.textContent = 'Pembiayaan Pendidikan';
        EducationLoanDes.textContent = 'Tumpukan pada pendidikan anda tanpa beban kewangan! Pembiayaan Pendidikan';
        ReadMoreEducationLoan.textContent = 'Ketahui Lebih Lanjut';
    } else {
        OurServices.textContent = 'Our Services';
        OurServicesDes.textContent = 'we offer a variety of financing solutions to cater to your personal needs with hassle-free applications and simple documents requirements.';
        PersonalLoan.textContent = 'Personal Loan';
        PersonalLoanDes.textContent = 'With our personal loan, you will receive a personalised plan based on your credit';
        ReadMorePersonalLoan.textContent = 'Learn More';
        PaydayLoan.textContent = 'Payday Loan';
        PaydayLoanDes.textContent = 'For unexpected situations, our payday loans exist to provide instant financial relief';
        ReadMorePaydayLoan.textContent = 'Learn More';
        DebtConsolidation.textContent = 'Debt Consolidation';
        DebtConsolidationDes.textContent = 'Don’t let multiple debts weigh you down! Manage and reduce your interest burden';
        ReadMoreDebtConsolidation.textContent = 'Learn More';
        IslamicLoan.textContent = 'Islamic Loan';
        IslamicLoanDes.textContent = 'Our Islamic loans are shariah-compliant with complete adherence to the tawarruq';
        ReadMoreIslamicLoan.textContent = 'Learn More';
        WeddingLoan.textContent = 'Wedding Loan';
        WeddingLoanDes.textContent = 'Getting married? Fund your dream wedding with us! Our wedding loan is';
        ReadMoreWeddingLoan.textContent = 'Learn More';
        RenovationLoan.textContent = 'Renovation Loan';
        RenovationLoanDes.textContent = 'Get the necessary funds to renovate your current home into your ideal home! Give';
        ReadMoreRenovationLoan.textContent = 'Learn More';
        MedicalLoan.textContent = 'Medical Loan';
        MedicalLoanDes.textContent = 'Your health is our priority, and with our medical loan, you can receive the support';
        ReadMoreMedicalLoan.textContent = 'Learn More';
        EducationLoan.textContent = 'Education Loan';
        EducationLoanDes.textContent = 'Concentrate on your education without the financial burden. Our education loans';
        ReadMoreEducationLoan.textContent = 'Learn More';
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