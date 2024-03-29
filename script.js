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
navAnimation();

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
homeh1SVG();