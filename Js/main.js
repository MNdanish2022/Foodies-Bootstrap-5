console.log("main js");

//Active Navbar
let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
if(document.documentElement.scrollTop > 20){
    nav.classList.add('scroll-on')
}
else{
    nav.classList.remove('scroll-on')

}
}
//Navbar hide click on a
let navbar=document.querySelectorAll('.nav-link');
let navCollapse=document.querySelector('.navbar-collapse.collapse');
navbar.forEach((a)=>{
a.addEventListener('click',()=>{
    navCollapse.classList.remove('show')
})
})

//Counter Design
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){

        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increament=end > start ? 1 : -1,
        step=Math.abs(Math.floor(duration /range)),
        timer =setInterval(()=>{
            current +=increament;
            obj.textContent=current;
            if(current == end){
                clearInterval(timer)
            }

        },step)

    }
    counter('count1',0,700,6000)
    counter('count2',100,1278,6000)
    counter('count3',200,1700,6000)
    counter('count4',250,2400,6000)
})