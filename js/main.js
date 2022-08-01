//alert('Alright?');
window.addEventListener('scroll',()=> {
    //alert('scrolled');
    sticyNav();
});

const sticyNav = ()=> {
    const header = document.querySelector('.header-section');
    if(window.pageYOffset > 50) {
        header.classList.add('sticy');
        //header.style.animation = 'fade 1s ease-in';
    } else{
        header.classList.remove('sticy');
    }
};

const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li');
    burger.addEventListener('click', () => {
        //alert('Clicked');
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index)=> {
            //link.style.animation = `fade 1s ease forwards ${index / 7+2}`;
             link.style.animation = 'fade 1s ease-in';
        });

        burger.classList.toggle('toggle');
    });
};

navSlide();


