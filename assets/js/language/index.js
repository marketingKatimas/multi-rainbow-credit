// Get the language toggle checkbox and the text elements
// Navbar
const languageToggle = document.getElementById('language-toggle');
const HomeNav = document.getElementById('HomeNav');
const AboutNav = document.getElementById('AboutNav');
const OurServiceNav = document.getElementById('OurServiceNav');
const ContactUsNav = document.getElementById('ContactUsNav');
const CalculatorNav = document.getElementById('CalculatorNav');
const ApplyNav = document.getElementById('ApplyNav');

//Banner
const BannerOne = document.getElementById('BannerOne');
const BannerOneDes = document.getElementById('BannerOneDes');
const ContactUs = document.getElementById('ContactUs');
const BannerTwo = document.getElementById('BannerTwo');
const BannerTwoDes = document.getElementById('BannerTwoDes');
const ApplyNow = document.getElementById('ApplyNow');
const BannerThree = document.getElementById('BannerThree');
const BannerThreeDes = document.getElementById('BannerThreeDes');
const LearnMore = document.getElementById('LearnMore');

//Counter
const LowInterestRate = document.getElementById('LowInterestRate');
const LowProcessingFee = document.getElementById('LowProcessingFee');
const FastProcess = document.getElementById('FastProcess');
const OnlineApplication = document.getElementById('OnlineApplication');

//Our Services
const OurServices = document.getElementById('OurServices');
const OurServicesDes = document.getElementById('OurServicesDes');
const PersonalLoan = document.getElementById('PersonalLoan');
const PersonalLoanDes = document.getElementById('PersonalLoanDes');
const PaydayLoan = document.getElementById('PaydayLoan');
const PaydayLoanDes = document.getElementById('PaydayLoanDes');
const DebtConsolidation = document.getElementById('DebtConsolidation');
const DebtConsolidationDes = document.getElementById('DebtConsolidationDes');
const IslamicLoan = document.getElementById('IslamicLoan');
const IslamicLoanDes = document.getElementById('IslamicLoanDes');
const WeddingLoan = document.getElementById('WeddingLoan');
const WeddingLoanDes = document.getElementById('WeddingLoanDes');
const RenovationLoan = document.getElementById('RenovationLoan');
const RenovationLoanDes = document.getElementById('RenovationLoanDes');
const LearnMoreServices = document.getElementById('LearnMoreServices');

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
  updateBanner('bm');
  updateCounter('bm');
  updateServices('bm');
  updateFooter('bm');
} else {
  languageToggle.checked = false;
  updateNavbar('en');
  updateBanner('en');
  updateCounter('en');
  updateServices('en');
  updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function() {
  if (this.checked) {
    updateNavbar('bm');
    updateBanner('bm');
    updateCounter('bm');
    updateServices('bm');
    updateFooter('bm');
    localStorage.setItem('language', 'bm');
  } else {
    updateNavbar('en');
    updateBanner('en');
    updateCounter('en');
    updateServices('en');
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

function updateBanner(language) {
  if (language === 'bm') {
    BannerOne.textContent = 'Selamat Datang ke Multi Rainbow';
    BannerOneDes.textContent = 'Pinjaman kami yang sangat mudah direka untuk memenuhi pelbagai keperluan, memastikan fleksibiliti dan penyesuaian.';
    ContactUs.textContent = 'Hubungi Kami';
    BannerTwo.textContent = 'Selamat Datang ke Multi Rainbow';
    BannerTwoDes.textContent = 'Rasakan ketenangan hati semasa anda merancang pembiayaan anda dengan mudah dan keyakinan';
    ApplyNow.textContent = 'Mohon Sekarang';
    BannerThree.textContent = 'Selamat Datang ke Multi Rainbow';
    BannerThreeDes.textContent = 'Meringankan dan menyederhanakan situasi kewangan anda dengan menggabungkan pelbagai hutang menjadi satu!';
    LearnMore.textContent = 'Ketahui Lebih Lanjut';
  } else {
    BannerOne.textContent = 'Welcome to Multi Rainbow';
    BannerOneDes.textContent = 'Our highly adaptable plans are designed to cater to a diverse range of needs, ensuring flexibility and customization';
    ContactUs.textContent = 'Contact Us';
    BannerTwo.textContent = 'Welcome to Multi Rainbow';
    BannerTwoDes.textContent = 'Enjoy the peace of mind as you effortlessly plan your financing with ease and confidence in your heart.';
    ApplyNow.textContent = 'Apply Now';
    BannerThree.textContent = 'Welcome to Multi Rainbow';
    BannerThreeDes.textContent = 'Streamline and simplify your financial situation by consolidating multiple debts into one!';
    LearnMore.textContent = 'Learn More';
  }
}

function updateCounter(language) {
  if (language === 'bm') {
    LowInterestRate.innerHTML = 'Kadar faedah rendah';
    LowProcessingFee.innerHTML = 'Yuran proses rendah';
    FastProcess.innerHTML = 'Proses yang pantas';
    OnlineApplication.innerHTML = 'Aplikasi atas talian';
  } else {
    LowInterestRate.innerHTML = 'Low <br>Interest <br>Rate';
    LowProcessingFee.innerHTML = 'Low <br>processing <br>fee';
    FastProcess.innerHTML = 'Fast <br>process';
    OnlineApplication.innerHTML = 'Online application';
  }
}

function updateServices(language) {
  if (language === 'bm') {
    OurServices.textContent = 'Perkhidmatan Kami';
    OurServicesDes.textContent = 'kami menawarkan pelbagai penyelesaian pembiayaan untuk memenuhi keperluan peribadi anda dengan aplikasi tanpa kerumitan dan keperluan dokumen mudah';
    PersonalLoan.textContent = 'Pembiayaan Peribadi';
    PersonalLoanDes.textContent = 'Dengan pembiayaan peribadi kami, anda akan menerima pelan direka khas';
    PaydayLoan.textContent = 'Pembiayaan Hari Gaji';
    PaydayLoanDes.textContent = 'Bagi situasi tidak diduga, pembiayaan hari gaji diwujudkan untuk memberi anda ';
    DebtConsolidation.textContent = 'Penyatuan Hutang';
    DebtConsolidationDes.textContent = 'Jangan biarkan hutang berlambak membebankan anda! Urus dan kurangkan';
    IslamicLoan.textContent = 'Pembiayaan Islamik';
    IslamicLoanDes.textContent = 'Pembiayaan Islamik kami patuh pada syariah dan mengikuti sistem tawarruq,';
    WeddingLoan.textContent = 'Pembiayaan Kahwin';
    WeddingLoanDes.textContent = 'Untuk yang ingin berkahwin, biayai majlis kahwin idaman anda dengan pembiayaan';
    RenovationLoan.textContent = 'Pembiayaan Renovasi';
    RenovationLoanDes.textContent = 'Dapatkan modal untuk ubahsuai rumah anda yang sekarang kepada rumah impian!';
    LearnMoreServices.value = 'Ketahui Lebih Lanjut';
  } else {
    OurServices.textContent = 'our Services';
    OurServicesDes.textContent = 'we offer a variety of financing solutions to cater to your personal needs with hassle-free applications and simple documents requirements.';
    PersonalLoan.textContent = 'Personal Loan';
    PersonalLoanDes.textContent = 'With our personal loan, you will receive a personalised plan based on your credit';
    PaydayLoan.textContent = 'Payday Loan';
    PaydayLoanDes.textContent = 'For unexpected situations, our payday loans exist to provide instant financial relief';
    DebtConsolidation.textContent = 'Debt Consolidation';
    DebtConsolidationDes.textContent = 'Don’t let multiple debts weigh you down! Manage and reduce your interest burden';
    IslamicLoan.textContent = 'Islamic Loan';
    IslamicLoanDes.textContent = 'Our Islamic loans are shariah-compliant with complete adherence to the tawarruq';
    WeddingLoan.textContent = 'Wedding Loan';
    WeddingLoanDes.textContent = 'Getting married? Fund your dream wedding with us! Our wedding loan is';
    RenovationLoan.textContent = 'Renovation Loan';
    RenovationLoanDes.textContent = 'Get the necessary funds to renovate your current home into your ideal home! Give';
    LearnMoreServices.value = 'Learn More';
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