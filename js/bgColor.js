let body = document.querySelector("body")
let btn = document.getElementById("theme");
let colors = ['#BFC3C5','#F4F7FF','#9CB7FF','#F6F9E3',];

body.style.backgroundColor ='#BFC3C5';

btn.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
} ) 
