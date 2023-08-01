let list=document.querySelector('.slider .list');
let items=document.querySelectorAll('.slider .list .item');
let dots=document.querySelectorAll('.slider .dots li')
let prev=document.getElementById('prev');
let next=document.getElementById('next');

let active = 0;// vi tri li dau tien
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems)//thay doi vi tri cua active len vi tri tiep theo
    {
        active = 0;
    }
    else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick=function(){
    if(active-1<0)
    {
        active=lengthItems;
    }else{
        active=active - 1;
    }
    reloadSlider();
}
let refreshSlider =setInterval(()=>{next.click()}, 4000)
function reloadSlider(){
    let checkLeft = items[active].offsetLeft ;
    // checkleft: khoang cach mep ben trai cua class list den mep trai cua item dang active
    list.style.left = -checkLeft + 'px';
    let lastActiveDot = document.querySelector('.slider .dots li.active');// tim dot dang dc active
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active'); 
    clearInterval(refreshSlider);
    refreshSlider =setInterval(()=>{next.click()}, 4000);
}
dots.forEach((li, key) =>{
    li.addEventListener('click', function(){
       active = key; 
       reloadSlider();
    })
})