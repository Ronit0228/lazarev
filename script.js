function locomotiveScroll(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
// locomotiveScroll();

function navAnimation(){
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function(){
    let timeLine = gsap.timeline()

    timeLine.to(".nav-bottom",{
            height:"24vh"
    })
    timeLine.to(".nav-elems h5", {
            display:"block"
    })
    timeLine.to(".nav-elems h5 span", {
            y:0,
            stagger:{
                amount:0.6
            } 
        })
    })

    nav.addEventListener("mouseleave", function(){
        let timeLine = gsap.timeline()
    
        timeLine.to(".nav-elems h5 span", {
            y:25,
            stagger:{
                amount:0.2
            } 
        })
        timeLine.to(".nav-bottom",{
            height: 0,
            duration: 0.1
        })

        timeLine.to(".nav-elems h5", {
            display:"none",
            duration: 0.1
    })
    })
}
// navAnimation();

function homeh1SVG(){
    var svg = document.querySelector(".home svg")

    svg.addEventListener("mouseenter", function(){
        let timeLines = gsap.timeline()

        timeLines.to(".home svg", {
                scale: 0.8,
                rotate: "-20deg"
        })
    })
    svg.addEventListener("mouseleave", function(){
        let timeLines = gsap.timeline()

        timeLines.to(".home svg", {
                scale: 1,
                rotate: "0"
        })
    })
}
// homeh1SVG();

function productAnimation(){
    var proElem = document.querySelectorAll(".product-elem")

    proElem.forEach(function(elem){
        elem.addEventListener("mouseenter",function (){
            gsap.to(
                this.querySelector(".product-elem img"),{
                    opacity: 1, 
                    scale: 1,
                    ease: Power4, 
                    duration: .4
                }
            )
        })

        elem.addEventListener("mouseleave",function (){
            gsap.to
                (this.querySelector(".product-elem img"),{
                    opacity: 0, 
                    scale: 0,
                    ease: Power4, 
                    duration: .4
                }
            )
        })
        
        elem.addEventListener("mousemove", function(dets){
            gsap.to
                (this.querySelector(".product-elem img"),{
                    x:dets.x - elem.getBoundingClientRect().x-50,
                    y:dets.y - elem.getBoundingClientRect().y-100
                }
            )
            console.log("ronit")
        })
    })
}
// productAnimation();

function videoAnimation(){
    var videopage = document.querySelector(".video-center")
    var video = document.querySelector(".video video")

    videopage.addEventListener("click", function(){
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
        })
    })
    video.addEventListener("click", function(){
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        })
    })
}
// videoAnimation();

function videohoverAnimation(){
    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function(elem){
        elem.addEventListener('mouseenter', function() {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener('mouseleave', function() {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}
// videohoverAnimation();

function videohoverAnimationCircle(){
    var secRight = document.querySelectorAll(".sec-right")

    secRight.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            gsap.to(
                this.querySelector(".view-cir"),{
                opacity: 1,
                scale:  1
            })
        })
        elem.addEventListener("mouseleave", function(){
            gsap.to(
                this.querySelector(".view-cir"), {
                opacity: 0,
                scale:  0
            })
        })
        elem.addEventListener("mousemove", function(dets){
            var viewCir = this.querySelector(".view-cir");
            var rect = this.getBoundingClientRect();
            var mouseX = dets.clientX - rect.left;
            var mouseY = dets.clientY - rect.top;
    
            gsap.to(viewCir, {
                x: mouseX - (viewCir.offsetWidth / 2),
                y: mouseY - (viewCir.offsetHeight / 2)
            });
        })
    })
}
// videohoverAnimationCircle();

function videohoverAnimation2(){
    var textImg = document.querySelectorAll(".text-img")
    
    textImg.forEach(function(elem){
        elem.addEventListener('mouseenter', function() {
            elem.childNodes[5].style.opacity = 1
            elem.childNodes[5].play()
        })
        elem.addEventListener('mouseleave', function() {
            elem.childNodes[5].style.opacity = 0
            elem.childNodes[5].load()
        })
    })
}
// videohoverAnimation2();
function moverightSide(){
    gsap.from(".product-strategy h4",{
        x:0,
        duration: 1,
        scrollTrigger:{
            trigger: ".product-strategy",
            scroller: "body",
            start:"top 70%",
            duration: 1,
            scrub:true
        }
    })
}
// moverightSide();

function pageLoader(){
    var timeLine3 = gsap.timeline()
    
    timeLine3.from(".home",{
        opacity:0,
        duration: 0.3,
        delay:-0.2
    })
    timeLine3.from(".home",{
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "200px",
        duration: 2,
        ease: "expo.out"
    })
    timeLine3.from("nav",{
        opacity: 0
    })
    timeLine3.from(".home h1, home p, home div",{
        opacity: 0,
        duration:0.2,
        stagger:0.2
    })
}
pageLoader();
 

    