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
const ApplyNowHeader = document.getElementById('ApplyNowHeader');
const HomeHeader = document.getElementById('HomeHeader');
const ApplyNowHeaderLink = document.getElementById('ApplyNowHeaderLink');

//Apply Form
const OnlineApplicationForm = document.getElementById('OnlineApplicationForm');
const OnlineApplicationFormDes = document.getElementById('OnlineApplicationFormDes');
const LoanAmount = document.getElementById('LoanAmount');
const LoanAge = document.getElementById('LoanAge');
const NameAs = document.getElementById('NameAs');
const Email = document.getElementById('Email');
const Mobile = document.getElementById('Mobile');
const EmploymentSector = document.getElementById('EmploymentSector');
const PleaseSelect = document.getElementById('PleaseSelect');
const Government = document.getElementById('Government');
const GovernmentLink = document.getElementById('GovernmentLink');
const Private = document.getElementById('Private');
const MonthlyGrossSalary = document.getElementById('MonthlyGrossSalary');
const MonthlyNettSalary = document.getElementById('MonthlyNettSalary');
const SendMessage = document.getElementById('SendMessage');

//Document Section & Transaction Channels
const DocumentSection = document.getElementById('DocumentSection');
const DocumentSectionDes = document.getElementById('DocumentSectionDes');
const PhotocopyMyKad = document.getElementById('PhotocopyMyKad');
const Statements = document.getElementById('Statements');
const Utilities = document.getElementById('Utilities');
const TransactionChannels = document.getElementById('TransactionChannels');
const MadeThrough = document.getElementById('MadeThrough');

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
    updateApplyForm('bm');
    updateDocumentTransaction('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateHeader('en');
    updateApplyForm('en');
    updateDocumentTransaction('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateHeader('bm');
        updateApplyForm('bm');
        updateDocumentTransaction('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateHeader('en');
        updateApplyForm('en');
        updateDocumentTransaction('en');
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
        ApplyNowHeader.textContent = 'Mohon Sekarang';
        HomeHeader.textContent = 'Laman Utama';
        ApplyNowHeaderLink.textContent = 'Mohon Sekarang';
    } else {
        ApplyNowHeader.textContent = 'Apply Now';
        HomeHeader.textContent = 'Home';
        ApplyNowHeaderLink.textContent = 'Apply Now';
    }
}

function updateApplyForm(language) {
    if (language === 'bm') {
        OnlineApplicationForm.textContent = 'Borang Permohonan Atas Talian';
        OnlineApplicationFormDes.textContent = 'Kami boleh memberi anda fleksibiliti kewangan untuk menggunakan dana - untuk semua kemudahan dan keperluan anda.';
        LoanAmount.textContent = 'Jumlah Pinjaman (RM):';
        LoanAge.textContent = 'Umur:';
        NameAs.textContent = 'Nama seperti Dalam NRIC:';
        Email.textContent = 'Emel:';
        Mobile.textContent = 'Nombor telefon:';
        EmploymentSector.textContent = 'Sektor Pekerjaan:';
        PleaseSelect.textContent = 'Sila Pilih';
        Government.textContent = 'Kerajaan';
        GovernmentLink.textContent = 'Syarikat Berkaitan Kerajaan';
        Private.textContent = 'Swasta';
        MonthlyGrossSalary.textContent = 'Gaji Kasar Bulanan (RM):';
        MonthlyNettSalary.textContent = 'Gaji Bersih Bulanan (RM):';
        SendMessage.textContent = 'MENGHANTAR MESEJ';
    } else {
        OnlineApplicationForm.textContent = 'Online Application Form';
        OnlineApplicationFormDes.textContent = 'We can give you the financial flexibility to use the funds - for all your convenience and needs.';
        LoanAmount.textContent = 'Loan Amount (RM):';
        LoanAge.textContent = 'Age:';
        NameAs.textContent = 'Name as In NRIC:';
        Email.textContent = 'Email:';
        Mobile.textContent = 'Mobile Contact No.:';
        EmploymentSector.textContent = 'Employment Sector:';
        PleaseSelect.textContent = 'Please Select';
        Government.textContent = 'Government';
        GovernmentLink.textContent = 'Government Link';
        Private.textContent = 'Private';
        MonthlyGrossSalary.textContent = 'Monthly Gross Salary (RM):';
        MonthlyNettSalary.textContent = 'Monthly Nett Salary (RM):';
        SendMessage.textContent = 'SEND MESSAGE';
    }
}

function updateDocumentTransaction(language) {
    if (language === 'bm') {
        DocumentSection.textContent = 'Bahagian Dokumen';
        DocumentSectionDes.textContent = 'Pastikan anda menyediakan dokumen ini:';
        PhotocopyMyKad.textContent = 'Salinan MyKad';
        Statements.textContent = 'Slip gaji, kenyataan bank & KWSP 3 bulan terkini';
        Utilities.textContent = 'Bil utiliti terkini (bil elektrik atau air)';
        TransactionChannels.textContent = 'Saluran Transaksi';
        MadeThrough.textContent = 'Semua transaksi dibuat melalui saluran ini:';
    } else {
        DocumentSection.textContent = 'Document Section';
        DocumentSectionDes.textContent = 'Make sure to prepare these documents:';
        PhotocopyMyKad.textContent = 'Photocopy MyKad';
        Statements.textContent = 'Latest 3 months’ payslip, bank statements & EPF statement';
        Utilities.textContent = 'Latest Utilities bill (electric or water bill)';
        TransactionChannels.textContent = 'Transaction Channels';
        MadeThrough.textContent = 'All transaction are made through these channels:';
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