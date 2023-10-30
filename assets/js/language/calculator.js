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
const CalculatorHeader = document.getElementById('CalculatorHeader');
const HomeHeader = document.getElementById('HomeHeader');
const CalculatorHeaderLink = document.getElementById('CalculatorHeaderLink');

//The Calculator
const PersonalLoanCalculator = document.getElementById('PersonalLoanCalculator');
const PersonalLoanCalculatorDes = document.getElementById('PersonalLoanCalculatorDes');
const LoanAmount = document.getElementById('LoanAmount');
const TenureInMonths = document.getElementById('TenureInMonths');
const YourMonthlyPayment = document.getElementById('YourMonthlyPayment');
const TotalAmountYouPay = document.getElementById('TotalAmountYouPay');
const months = document.getElementById('months');

//Loan Application Eligibility
const LoanEligibility = document.getElementById('LoanEligibility');
const LoanEligibilityDes = document.getElementById('LoanEligibilityDes');
const MalaysianDes = document.getElementById('MalaysianDes');
const Epf = document.getElementById('Epf');
const EpfDes = document.getElementById('EpfDes');
const Salary = document.getElementById('Salary');
const SalaryDes = document.getElementById('SalaryDes');
const LearnMore = document.getElementById('LearnMore');

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
    updateCalculator("bm");
    updateEligibility('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateHeader('en');
    updateCalculator("en");
    updateEligibility('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateHeader('bm');
        updateCalculator("bm");
        updateEligibility('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateHeader('en');
        updateCalculator("en");
        updateEligibility('en');
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
        CalculatorHeader.textContent = 'Kalkulator';
        HomeHeader.textContent = 'Laman Utama';
        CalculatorHeaderLink.textContent = 'Kalkulator';
    } else {
        CalculatorHeader.textContent = 'Calculator';
        HomeHeader.textContent = 'Home';
        CalculatorHeaderLink.textContent = 'Calculator';
    }
}

function updateCalculator(language) {
    if (language === 'bm') {
        PersonalLoanCalculator.textContent = 'Kalkulator Pinjaman Peribadi';
        PersonalLoanCalculatorDes.textContent = 'Gunakan kalkulator ini untuk mendapatkan anggaran.';
        LoanAmount.textContent = 'Jumlah Pinjaman:';
        TenureInMonths.textContent = 'Tempoh (dalam bulan):';
        YourMonthlyPayment.textContent = 'Bayaran Bulanan Anda:';
        TotalAmountYouPay.textContent = 'Jumlah amaun yang anda bayar dalam';
        months.textContent = 'bulan';
    } else {
        PersonalLoanCalculator.textContent = 'Personal Loan Calculator';
        PersonalLoanCalculatorDes.textContent = 'Use this calculator to get an estimation.';
        LoanAmount.textContent = 'Loan Amount:';
        TenureInMonths.textContent = 'Tenure (in months):';
        YourMonthlyPayment.textContent = 'Your Monthly Payment:';
        TotalAmountYouPay.textContent = 'Total amount you pay in';
        months.textContent = 'months';
    }
}

function updateEligibility(language) {
    if (language === 'bm') {
        LoanEligibility.textContent = 'Kelayakan Permohonan Pinjaman';
        LoanEligibilityDes.textContent = 'Jika anda menjawab “YA” kepada semua soalan di bawah, maka anda layak! Mohon segera untuk dapatkan bantuan kewangan untuk keperluan anda.';
        MalaysianDes.textContent = 'Adakah anda warganegara Malaysia berumur 18 - 60?';
        Epf.textContent = 'Pencarum KWSP';
        EpfDes.textContent = 'Adakah anda pencarum KWSP?';
        Salary.textContent = 'Keperluan Gaji';
        SalaryDes.textContent = 'Adakah anda menerima gaji minimum RM1,200 dan dibayar melalui akaun bank?';
        LearnMore.textContent = 'Ketahui Lebih Lanjut';
    } else {
        LoanEligibility.textContent = 'Loan Application Eligibility';
        LoanEligibilityDes.textContent = 'If you answer “YES” to all the below questions, then you are eligible! Apply for our loan and get the financial relief you need.';
        MalaysianDes.textContent = 'Are you a Malaysian aged 18 - 60?';
        Epf.textContent = 'EPF Contributor';
        EpfDes.textContent = 'Are you a consistent EPF contributor?';
        Salary.textContent = 'Salary Requirement';
        SalaryDes.textContent = 'Do you have a minimum salary of RM1,200 and you receive the salary through your bank account?';
        LearnMore.textContent = 'Learn More';;
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