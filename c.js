// gsap.to(".box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     backgroundcolor:"green",
//     rotate: 360,
// });
// gsap.to(".box1",{
//     x:1000,
//     duration:2,
//     delay:3,
//     backgroundcolor:"green",
//     rotate: 360,
// });
 let tl = gsap.timeline();
// tl.to(".box",{
//     x:1000,
//     duration:1,
//     delay:1,
//     backgroundcolor:"green",
//     rotate: 360,
//     repeat:-1,
//     yoyo:0.5,
// });
// tl.to(".box1",{
//     x:1000,

//     duration:2,
//     backgroundcolor:"green",
//     rotate: 360,
// });
tl.from("h2",{
    y:-30,
    duration:1,
    opacity:0,
});
tl.from("h4",{
      y:-30,
    duration:1,
    opacity:0,
    stagger:0.5,
});
tl.from(".move h1",{
      scale:0.5,
duration:2,
    opacity:0,

});
gsap.from("#page2 .box",{
    duration:2,
    opacity:0,

    scale:0,
    rotate:720,
    delay:1,
    // repeat:-1,
    scrollTrigger:{
        trigger:"#page2",
 scroller:"body",
scrub:true,
pin:true,
    },
});
