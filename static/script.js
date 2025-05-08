// Place this in a <script> tag before your closing </body> or in a linked .js file
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = mainNav.querySelectorAll('a'); // Get all links in the nav

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Optional: Change burger icon to an 'X' when menu is open
            const icon = navToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked (useful for single-page navigation or quick closes)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active') && window.innerWidth < 769) { // 769px is your breakpoint
                mainNav.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Mobile Dropdown Toggle
    const dropdowns = document.querySelectorAll('.main-nav .dropdown > a');
    dropdowns.forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', function(event) {
            if (window.innerWidth < 769 && this.nextElementSibling && this.nextElementSibling.classList.contains('dropdown-content')) {
                event.preventDefault(); // Prevent link navigation only for parent dropdown item
                this.parentElement.classList.toggle('active'); // Toggle active on the li.dropdown
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // ... other JS ...
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Adjust scroll distance as needed
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});