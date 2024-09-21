function loadingloader(){
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
t1.from("#hero1 h1,#hero2,#hero3,#hero4",{
    y:100,
    opacity:0,
    stagger:0.1
})
t1.from("#nav",{
    opacity:0
})
}
loadingloader();
function cursor(){
    document.addEventListener("mousemove",function(e){
        gsap.to("#cursor",{
            left:e.x,
            top:e.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h3" /* Element to target.*/, {
       //Parameters are optional.
       ease: "cubic-bezier(0.23, 1, 0.320, 1)"
    });
}
// cursor();