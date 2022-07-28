const navItem = document.querySelector('.nav__list__item:last-child');
const navItemDropdown = document.querySelector('.nav__item__dropdown');

navItem.addEventListener('click', openDropdown);

function openDropdown() {
    navItemDropdown.classList.toggle('open');
}

//Open Dropdown Mobile Menu
const navMobileItem = document.querySelector('#drpdwn');
const navMobileItemDropdown = document.querySelector('#dropdown');

navMobileItem.addEventListener('click', openMobileDropdown);

function openMobileDropdown() {
    navMobileItemDropdown.classList.toggle('open');
}

// Open Main Mobile Menu
const hamburgerIcon = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobileMenu');

hamburgerIcon.addEventListener('click', openMobileMenu);

function openMobileMenu() {
    mobileMenu.classList.toggle('openMobileMenu');
}


// Services section filer
const buttons = document.querySelectorAll('.services__content__categories > button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        const article = document.querySelectorAll('.services__content > article');

        for (item of article) {
            item.style.display = 'none';
        }

        if (category === 'all') {
            for (item of article) {
                item.style.display = 'block';
            }
        }

        for (item of article) {
            if (item.getAttribute('data-category').includes(category)) {
                item.style.display = 'block';
            }
        }
    });
});


// Open login modal

const btnModal = document.querySelector('.hero > button');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close');

btnModal.addEventListener('click', openModal);

function openModal() {
    modal.classList.remove('hidden');
}

btnCloseModal.addEventListener('click', closeLoginModal);

function closeLoginModal() {
    modal.classList.add('hidden');
}


// Show scroll to top btn
window.onscroll = function () {
    myFunction();
    subHero();
    about();
    services();
    blog();
    contact();
    team();
};

function myFunction() {
    if (document.documentElement.scrollTop > 150) {
        document.querySelector(".scrolltop").classList.add('animated');
    } else {
        document.querySelector(".scrolltop").classList.remove('animated');
    }
}

// Scroll to top
let scrollBtn = document.querySelector('.scrolltop');
scrollBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
}


// AOS
function subHero() {
    const subHeroSection = document.querySelector('.sub-hero');
    const positionSubHeroSection = subHeroSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    const subHeroItems = document.querySelectorAll('.sub-hero > .sub-hero__item');

    for (subHeroItem of subHeroItems) {
        if (positionSubHeroSection < screenPosition) {
            subHeroItem.classList.add('animated');
        }
    }
}

function about() {
    const aboutSection = document.querySelector('.about');
    const positionAboutSection = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    const AboutItems = document.querySelectorAll('.about > .about__item');

    for (aboutItem of AboutItems) {
        if (positionAboutSection < screenPosition) {
            aboutItem.classList.add('animated');
        }
    }
}

function services() {
    const servicesSection = document.querySelector('.services');
    const positionServicesSection = servicesSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;
    const servicesItems = document.querySelectorAll('.services  .services__content__item');

    for (servicesItem of servicesItems) {
        if (positionServicesSection < screenPosition) {
            servicesItem.classList.add('animated');
        }
    }
}

function blog() {
    const blogSection = document.querySelector('.blog');
    const positionBlogSection = blogSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;
    const blogItems = document.querySelectorAll('.blog  .blog__content__item');

    for (blogItem of blogItems) {
        if (positionBlogSection < screenPosition) {
            blogItem.classList.add('animated');
        }
    }
}

function contact() {
    const contactSection = document.querySelector('.contact');
    const positionContactSection = contactSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;
    const contactItems = document.querySelectorAll('.contact  .contact__content__item');

    for (contactItem of contactItems) {
        if (positionContactSection < screenPosition) {
            contactItem.classList.add('animated');
        }
    }
}

function team() {
    const teamSection = document.querySelector('.team');
    const positionTeamSection = teamSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.8;
    const teamItems = document.querySelectorAll('.team  .team__content__item');

    for (teamItem of teamItems) {
        if (positionTeamSection < screenPosition) {
            teamItem.classList.add('animated');
        }
    }
}




