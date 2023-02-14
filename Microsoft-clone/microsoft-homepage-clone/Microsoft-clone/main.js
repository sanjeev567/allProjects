const menuBtn = document.querySelector('.menu-btn');
const menuIcon = menuBtn.children[0];
const overlay = document.querySelector('#over');
menuBtn.addEventListener('click', () => {
    document.querySelector('.navbar-list').classList.toggle('show-list')
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    document.body.classList.toggle('over-flow');
    overlay.classList.toggle('overlay');
});
