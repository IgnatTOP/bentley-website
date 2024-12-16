document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
        body.classList.toggle('mobile-menu-open');
    });

    // Закрываем меню при клике на ссылку
    document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            body.classList.remove('mobile-menu-open');
        });
    });
});
