Shery.makeMagnet("h4",{
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet("#nav img",{
   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".main5 button",{
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   duration: 1,
 });
 Shery.makeMagnet(".main7 button",{
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   duration: 1,
 });
 Shery.makeMagnet(".main9 button",{
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   duration: 1,
 });
 Shery.makeMagnet(".main10 button",{
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
   duration: 1,
 });
 


Shery.mouseFollower()
// var cursor = document.querySelector("#cursor")
// var body = document.querySelector("body")
// body.addEventListener("mousemove",function(dets){
//     cursor.style.left = dets.x+"px"
//     cursor.style.top = dets.y+"px"
// })




var tl = gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".main",
        start:"top top",
        scrub:2
    }
})
tl.to(".main",{
    
    scale:0,
    filter:"blur(0px)",
    scale:0.9,
    filter:"blur(12px)"
})




var h1Text = document.querySelector("h1").textContent

var splittedText = h1Text.split(" ")


var clutter = ""

splittedText.forEach(function(elem){
    clutter +=` <span>${elem}</span>`
})
document.querySelector("h1").innerHTML = clutter

gsap.from("h1 span",{
    opacity:0,
    stagger:0.3,
    y:50,
    duration:1.4,
    delay:1,
    repeat:Infinity
})



gsap.to(".circle", {
    x: 600,
    duration: 2,
    repeat: -1, // Setting repeat to -1 makes the animation repeat infinitely
    opacity: 0.2
});



tl.from("#box2 h1",{
    y:30,
    duration:1,
    opacity:0
})
tl.from("#box2 h4",{
    y:30,
    duration:1,
    opacity:0
})
tl.from("#box2 button",{
    y:30,
    duration:1,
    opacity:0
});


tl.to(".main4 img", {
    scale:1.5,
    duration:5

    
   
});

var mypath = `M 10 80 Q 500 10 990 80`
var finalpath = `M 10 80 Q 500 80 990 80`

var string = document.querySelector("#string")
string.addEventListener("mousemove",function(dets){
    mypath = `M 10 80 Q ${dets.x} ${dets.y} 990 80`
    gsap.to("#string svg path",{
        attr:{d:mypath}
    })


})


string.addEventListener("mouseleave",function(dets){
    gsap.to("#string svg path",{
        attr:{d:finalpath},
        ease: "elastic.out(1,0.3)",
        duration:1
    })

})

