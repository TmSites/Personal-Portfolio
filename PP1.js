document.addEventListener('DOMContentLoaded', () => {
    const navLinks =document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e){
            if (this.cash != ""){
                e.preventDefault();
                const hash = this.hash;

                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        })
    });
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formMessage.style.display = 'block';
        formMessage.textContent = 'Thank you for your message! I will get back soon';
        formMessage.style.color = 'green';
        contactForm.reset();
        setTimeout(() => {
            formMessage.style.display = 'none';
            }, 5000);
        });

    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50){
            header.classList.add('scrolled');
        } else{
            header.classList.remove('scrolled');
        }
    });
});


















