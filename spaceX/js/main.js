const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let flage = false;


document.addEventListener('scroll', scrollPage);
function scrollPage(){
    const scrollPos = window.scrollY;
    if(scrollPos > 100 && !flage){
        countUp();
        flage = true;
    }
    else if(scrollPos <100 && flage){
        reset()
        flage = false;
    }
}
scrollPage()
// counters
function countUp(){
    counters.forEach((counter) =>{
        counter.innerText = '0';
        
        // console.log(c);
        // console.log(target)

        // console.log(counter.innerText)
        // console.log('hello world')

        const updateCount = ()=> {
            const c = +counter.innerText; // 0
        const target = +counter.getAttribute('data-target')

        const increment = target/100;
            if(target > c ) {
                // c +=1;
                // counter.innerText = c.toString();

                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCount, 75)
            }
        }
        updateCount();
    });
}


// right side-bar cross
btn.addEventListener('click', navToggle)

function reset(){
    counters.forEach((counter)=> counter.innerHTML = '0')
}

function navToggle(){
    btn.classList.toggle('open')
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrolling')
    mobileMenu.classList.toggle('show-mobile-item')
}
