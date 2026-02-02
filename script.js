// Mobile menu toggle
var navToggle = document.querySelector('.nav-toggle');
var navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Close menu when link clicked
document.querySelectorAll('.nav-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});
