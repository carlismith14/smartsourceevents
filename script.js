const navToggle = document.querySelector('.header__nav-toggle');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__li')

navToggle.addEventListener('click', function(){
    nav.classList.toggle('active');
});


// nav.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = e.target;
//     if (target.classList.contains('link--a')) {
//         const id = target.getAttribute('href').slice(1);
//         document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
//     }
// });

const removeActive = function(){
    nav.classList.remove('active');
}

navLink.forEach(link => link.addEventListener('click', function(){
    
    setTimeout(removeActive, 500);
    
}));
