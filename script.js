var t1 = gsap.timeline();




t1.from(".line h1",{
    y:140,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5     
})

t1.from("#line1-part1",{
    opacity:0,
    onstart:function(){
        var h5 = document.querySelector("#line1-part1 h5");
        var count = 0;
        setInterval(function(){
            if(count<100){
                count++
                h5.textContent = count+""
            }
        },30)
    }
})

t1.to(".line h2",{
    animationName:'anime',
    opacity:1
}
)

t1.to("#loader",{
    opacity:0,
    duration:1.5,
    delay:2.5,
    stagger:0.5    
})

t1.from("#page1",{
    opacity: 0,
    y:1600,
    delay:0.2,
    ease:Power4
})

t1.to("#loader",{
    display: "none"
})