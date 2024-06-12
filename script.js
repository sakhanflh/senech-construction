const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', function(){
    let dropdownList = document.querySelector('.dropdown-list');
    dropdownList.classList.toggle('dropdown-list-active')
});

// Ligh Dark Mode
const buttonMode = document.querySelector('.mode-toggle');

buttonMode.addEventListener('click', function(){
    let lightDarkBtn = document.querySelector('.light-dark-btn');
    let lightIcon = document.querySelector('.light-icon');
    let darkIcon = document.querySelector('.dark-icon');
    let aboutSection = document.querySelector('#about-us')

    lightDarkBtn.classList.toggle('dark')
    lightIcon.classList.toggle('dark')
    darkIcon.classList.toggle('dark')
    aboutSection.classList.toggle('dark')
    buttonMode.classList.toggle('dark');

})
// Ligh Dark Mode

// Header Fix
const header = document.querySelector('header');
let dropdownList = document.querySelector('.dropdown-list');
const loginButton = document.querySelector('.login-btn');
const ourImg = document.querySelector('.our-img');

// Project
let structureProject = document.querySelector('.structure-project');
let constructionProject = document.querySelector('.construction-project');
let interiorProject = document.querySelector('.interior-project');

window.addEventListener('scroll', function(){
    header.classList.toggle('header-active', window.scrollY > 0);
    dropdownList.classList.toggle('dropdown-active', window.scrollY > 0);
    loginButton.classList.toggle('login-active', window.scrollY > 0);
    ourImg.classList.toggle('our-img-active', window.scrollY > 300);

    // Project
    structureProject.classList.toggle('structure-project-active', window.scrollY > 1200);
    constructionProject.classList.toggle('construction-project-active', window.scrollY > 1200);
    interiorProject.classList.toggle('interior-project-active', window.scrollY > 1200);
});

const utility = document.querySelector('.utility');

function utilityReveal(){
    utility.classList.add('utility-active');
    // if(this.window.scrollY > 100){
    //     utility.classList.remove('utility-active');
    // }
};

setTimeout(utilityReveal, 1000);


window.addEventListener('scroll',  function(){
    if  (this.window.scrollY > 600) {
        utility.classList.remove('utility-active');
    } else if (this.window.scrollY < 500){
        utility.classList.add('utility-active');
    }
})

// 
// Modal
// 
const modalLoginOverlay = document.querySelector('.modal-login-overlay');
const modalLoginWrapper = document.querySelector('.modal-login-wrapper');
const loginBtn = document.querySelector('.login-click');

loginBtn.addEventListener('click', function(){
    modalLoginOverlay.classList.toggle('modal-login-overlay-active');
    modalLoginWrapper.classList.toggle('modal-login-wrapper-active');
    // modalRegisterOverlay.classList.remove('modal-register-active');
    // modalRegisterWrapper.classList.remove('modal-register-card-active');
});

const createAccount = document.querySelector('.create-account');
const modalRegisterOverlay = document.querySelector('.modal-register-overlay');
const modalRegisterWrapper = document.querySelector('.modal-register-card');

createAccount.addEventListener('click', function(){

    // modalRegisterOverlay.classList.add('modal-register-active');
    modalRegisterWrapper.classList.add('modal-register-card-active');
    // modalOverlay.classList.remove('modal-login-overlay-active');
    modalLoginWrapper.classList.remove('modal-login-wrapper-active');
});

function closeModal(){
    modalLoginOverlay.classList.remove('modal-login-overlay-active');
    modalRegisterWrapper.classList.remove('modal-register-card-active');
}
// 
// Modal
// 
// Nav Mobile 
const navmobile = document.querySelector('.nav-mobile');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    navmobile.classList.toggle('nav-mobile-active');
});
