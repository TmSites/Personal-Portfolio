document.addEventListener('DOMContentLoaded', () => {
    const navLinks =document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e){
            if (this.hash != ""){
                e.preventDefault();
                const hash = this.hash;

                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        })
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


















