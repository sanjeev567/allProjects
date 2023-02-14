const menuBtn = document.querySelector('.menu-bar'),
     sideBar = document.querySelector('.menu-content'),
     overlay = document.querySelector('#overlay-item'),
     body = document.getElementsByTagName('body')[0];

     menuBtn.addEventListener('click', ()=>{
        // this.classList.toggle('open');
        menuBtn.classList.toggle('open');
        sideBar.classList.toggle('show');
        overlay.classList.toggle('overlay');
        body.classList.toggle('scroll-none');

     })