let toggle = document.querySelector('.toggle-btn');
let body = document.querySelector('body')
let right = document.querySelector('.right-2 ul');
let menu = document.querySelector('.menu');
let container = document.querySelector('.container');



toggle.addEventListener('click', () => {
    console.log(right);
    right.classList.toggle('show');
    menu.classList.toggle('fa-xmark');
    body.classList.toggle('blurred');
});

container.addEventListener('click', () => {
    right.classList.remove('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // Adjust this breakpoint as needed
        right.classList.remove('show');
        body.classList.remove('blurred');
    }
});
