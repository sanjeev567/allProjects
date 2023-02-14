const headings = document.getElementsByTagName('h1')
const left = document.querySelector('.left');
const right = document.querySelector('.right');
var flage = false;
var time = 5000;

var i =0;
var images = [];



images[0] = 'img/img-1.webp'
images[1] = 'img/img-2.webp'
images[2] = 'img/img-3.webp'

function chageImg(){
    headings[0].style.display = 'none'
    headings[1].style.display = 'none'
    headings[2].style.display = 'none'
    document.slide.src = images[i];
    headings[i].style.display = 'block'
    if(i < images.length -1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout(chageImg, time);
}




window.onload = chageImg;
