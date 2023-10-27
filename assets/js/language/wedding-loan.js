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
const WeddingLoanHeader = document.getElementById('WeddingLoanHeader');
const HomeHeader = document.getElementById('HomeHeader');
const WeddingLoanHeaderLink = document.getElementById('WeddingLoanHeaderLink');

//Wedding Loan
const WeddingLoanPages = document.getElementById('WeddingLoanPages');
const WeddingLoanPagesDes = document.getElementById('WeddingLoanPagesDes');
const ApplyNowBtn = document.getElementById('ApplyNowBtn');

//Benefits Loan With Us
const Benefits = document.getElementById('Benefits');
const TheBenefits = document.getElementById('TheBenefits');
const BetterCreditScore = document.getElementById('BetterCreditScore');
const Flexible = document.getElementById('Flexible');
const EaseApproval = document.getElementById('EaseApproval');
const Convenience = document.getElementById('Convenience');

//Sidebar
const OurServicesSidebar = document.getElementById('OurServicesSidebar');
const PersonalLoanSidebar = document.getElementById('PersonalLoanSidebar');
const PaydayLoanSidebar = document.getElementById('PaydayLoanSidebar');
const DebtConsolidationSidebar = document.getElementById('DebtConsolidationSidebar');
const IslamicLoanSidebar = document.getElementById('IslamicLoanSidebar');
const WeddingLoanSidebar = document.getElementById('WeddingLoanSidebar');
const RenovationLoanSidebar = document.getElementById('RenovationLoanSidebar');
const MedicalLoanSidebar = document.getElementById('MedicalLoanSidebar');
const EducationLoanSidebar = document.getElementById('EducationLoanSidebar');

//Calculator
const LoanAmount = document.getElementById('LoanAmount');
const TenureInMonths = document.getElementById('TenureInMonths');
const YourMonthlyPayment = document.getElementById('YourMonthlyPayment');
const TotalAmountYouPay = document.getElementById('TotalAmountYouPay');
const months = document.getElementById('months');
const ApplyNowCalculator = document.getElementById('ApplyNowCalculator'); 

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
    updateWeddingLoan('bm');
    updateBenefits('bm');
    updateSidebar('bm');
    updateCalculator('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateHeader('en');
    updateWeddingLoan('en');
    updateBenefits('en');
    updateSidebar('en');
    updateCalculator('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateHeader('bm');
        updateWeddingLoan('bm');
        updateBenefits('bm');
        updateSidebar('bm');
        updateCalculator('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateHeader('en');
        updateWeddingLoan('en');
        updateBenefits('en');
        updateSidebar('en');
        updateCalculator('en');
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
        WeddingLoanHeader.textContent = 'Pembiayaan Kahwin';
        HomeHeader.textContent = 'Laman Utama';
        WeddingLoanHeaderLink.textContent = 'Pembiayaan Kahwin';
    } else {
        WeddingLoanHeader.textContent = 'Wedding Loan';
        HomeHeader.textContent = 'Home';
        WeddingLoanHeaderLink.textContent = 'Wedding Loan';
    }
}

function updateWeddingLoan(language) {
    if (language === 'bm') {
        WeddingLoanPages.textContent = 'Pembiayaan Kahwin';
        WeddingLoanPagesDes.textContent = 'Untuk yang ingin berkahwin, biayai majlis kahwin idaman anda dengan pembiayaan perkahwinan kami! Pembiayaan ini merangkumi segala keperluan kahwin anda supaya anda dapat nikmati hari bahagia tanpa gelisah.';
        ApplyNowBtn.textContent = 'Mohon Sekarang';
    } else {
        WeddingLoanPages.textContent = 'Wedding Loan';
        WeddingLoanPagesDes.textContent = 'Getting married? Fund your dream wedding with us! Our wedding loan is designed to cover all your wedding expenses so you can enjoy the day you’ll remember forever.';
        ApplyNowBtn.textContent = 'Apply Now';
    }
}

function updateBenefits(language) {
    if (language === 'bm') {
        Benefits.textContent = 'Faedah Pinjaman Peribadi Dengan Kami';
        TheBenefits.innerHTML = 'Pinjaman kami menonjol kerana kami menyediakan peminjam kami dengan pelbagai <br>manfaat unik.';
        BetterCreditScore.textContent = 'Skor Kredit yang Lebih Baik dan Diperbaiki';
        Flexible.textContent = 'Tempoh Pinjaman Fleksibel';
        EaseApproval.textContent = 'Kemudahan Permohonan dan Kelulusan';
        Convenience.textContent = 'Meningkatkan Keselesaan';
    } else {
        Benefits.textContent = 'Benefits Loan With Us';
        TheBenefits.textContent = 'Our loans stand out as we provide our borrowers with a wide range of unique benefits.';
        BetterCreditScore.textContent = 'Better and Improved Credit Score';
        Flexible.textContent = 'Flexible Loan Tenure';
        EaseApproval.textContent = 'Ease of Application and Approval';
        Convenience.textContent = 'Increased Convenience';
    }
}

function updateSidebar(language) {
    if (language === 'bm') {
        OurServicesSidebar.textContent = 'Perkhidmatan Kami';
        PersonalLoanSidebar.textContent = 'Pembiayaan Peribadi';
        PaydayLoanSidebar.textContent = 'Pembiayaan Hari Gaji';
        DebtConsolidationSidebar.textContent = 'Penyatuan Hutang';
        IslamicLoanSidebar.textContent = 'Pembiayaan Islamik';
        WeddingLoanSidebar.textContent = 'Pembiayaan Kahwin';
        RenovationLoanSidebar.textContent = 'Pembiayaan Renovasi';
        MedicalLoanSidebar.textContent = 'Pembiayaan Perubatan';
        EducationLoanSidebar.textContent = 'Pembiayaan Pendidikan';
    } else {
        OurServicesSidebar.textContent = 'Our Services';
        PersonalLoanSidebar.textContent = 'Personal Loan';
        PaydayLoanSidebar.textContent = 'Payday Loan';
        DebtConsolidationSidebar.textContent = 'Debt Consolidation';
        IslamicLoanSidebar.textContent = 'Islamic Loan';
        WeddingLoanSidebar.textContent = 'Wedding Loan';
        RenovationLoanSidebar.textContent = 'Renovation Loan';
        MedicalLoanSidebar.textContent = 'Medical Loan';
        EducationLoanSidebar.textContent = 'Education Loan';
    }
}

function updateCalculator(language) {
    if (language === 'bm') {
        LoanAmount.textContent = 'Jumlah Pinjaman:';
        TenureInMonths.textContent = 'Tempoh (dalam bulan):';
        YourMonthlyPayment.textContent = 'Bayaran Bulanan Anda:';
        TotalAmountYouPay.textContent = 'Jumlah amaun yang anda bayar dalam';
        months.textContent = 'bulan';
        ApplyNowCalculator.textContent = 'Mohon Sekarang'; 
    } else {
        LoanAmount.textContent = 'Loan Amount:';
        TenureInMonths.textContent = 'Tenure (in months):';
        YourMonthlyPayment.textContent = 'Your Monthly Payment:';
        TotalAmountYouPay.textContent = 'Total amount you pay in';
        months.textContent = 'months';
        ApplyNowCalculator.textContent = 'Apply Now'; 
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