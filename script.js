function navTextAnimation(){
    let downText = document.querySelector("nav .part");
    downText.addEventListener("mouseenter",function(){
        gsap.to('.downText',{
            y:-40.3,
            duration:.5,
            stagger:.1
        })
    })
    downText.addEventListener("mouseleave",function(){
        gsap.to('.downText',{
            y:0,
            duration:.6,
            stagger:.1
        })
    })
}
navTextAnimation()
function cursorAnimation(){
    document.addEventListener("mousemove",function(e){
        gsap.to('.cursor',{
            x:e.x,
            y:e.y
        })
    })
}
cursorAnimation()
function themeButtonAnimation(){
    document.querySelector(".theme").addEventListener("click",function(){
        document.querySelector(".theme .button").classList.toggle("active");

    })
}
themeButtonAnimation()
function curorEnlarger(){
    document.querySelector(".part").addEventListener("mouseenter",function(){
        gsap.to('.cursor',{
            height:"40px",
            width:"40px",
            // backgroundColor:"transparent",
            // border:"1px solid"
        })
        // alert("working")
    })
    document.querySelector(".part").addEventListener("mouseleave",function(){
        gsap.to('.cursor',{
            height:"12px",
            width:"12px",
            duration:.5,

            // backgroundColor:"var(--bg-c)",
            // border:"var(--bg-c)",
        })
        // alert("working")
    })
}
curorEnlarger()
function themeAnimation(){
    document.querySelector(".theme").addEventListener("click",function(){
        document.querySelector(".container").classList.toggle("active");
    })
}
themeAnimation()
function moveDivAnimation(){
    let md = document.querySelector(".move-div");
    gsap.to(".move-div",{
        transform:"translateX(calc(-100% - 1.03vw))",
        scrollTrigger:{
            scroller:"body",
            trigger:".moves",
            markers:true,
            start:"top bottom",
            end:"bottom top",
            scrub:1,
            // pin:true,
            // pinSpacing:false,
        }
    })
}
function imgBlock(){
    

    let count = 0;
    setInterval(() => {

        count++;
        if (count > 6) {
            count = 1;
        }
        // console.log(count)
        setTimeout(() => {
            let allImgs = document.querySelectorAll(".img-wrap-one .image");
            let imageIs = document.querySelector(`.img-wrap-one .img-${count}`);
            allImgs.forEach((item) => item.classList.remove("show"));
            imageIs.classList.add("show");

        }, 0)

        setTimeout(() => {
            let allImgs = document.querySelectorAll(".img-wrap-two .image");
            let imageIs = document.querySelector(`.img-wrap-two .img-${count}`);
            allImgs.forEach((item) => item.classList.remove("show"));
            imageIs.classList.add("show");
        }, 1000)
        setTimeout(() => {

            let allImgs = document.querySelectorAll(".img-wrap-three .image");
            let imageIs = document.querySelector(`.img-wrap-three .img-${count}`);
            allImgs.forEach((item) => item.classList.remove("show"));
            imageIs.classList.add("show");
        }, 2000);
        setTimeout(() => {
            let allImgs = document.querySelectorAll(".img-wrap-four .image");
            let imageIs = document.querySelector(`.img-wrap-four .img-${count}`);
            allImgs.forEach((item) => item.classList.remove("show"));
            imageIs.classList.add("show");
        }, 3000);

    }, 4000);
}
imgBlock()
function secOne(){
    let tl = gsap.timeline({scrollTrigger:{
        trigger:".below-div",
        start:"50% 50%",
        end:"100% -100%",
        scrub:1,
        pin:true,
    }})
    tl.to(".below-div .one-1",{
        left:"10%"
    },'a')
    tl.to(".below-div .two-1",{
        left:"-10%"
    },'a')
    tl.to(".below-div .three-1",{
        left:"-10%"
    },'a')
    tl.to(".below-div .four-1",{
        left:"10%"
    },'a')

}
secOne()
function contentDiv(){
    let tl = gsap.timeline({scrollTrigger:{
        trigger:".content-div",
        start:"10% 50%",
        end:"100% -100%",
        // markers:true,
        scrub:1,
        // pin:true,
    }})
    tl.to(".content-div .FIRST",{
        left:"8%"
    },'a')
    tl.to(".content-div  .SECOND",{
        left:"30%"
    },'a')

}
contentDiv()
function contentDivTwo(){
    let tl = gsap.timeline({scrollTrigger:{
        trigger:".content-div-two",
        start:"10% 50%",
        end:"100% -100%",
        // markers:true,
        scrub:1,
        // pin:true,
    }})
    tl.to(".content-div-two #one",{
        left:"35%"
    },'a')
    tl.to(".content-div-two #two",{
        left:"0%"
    },'a')

}
contentDivTwo()
function ovalAnimation(){
    let tl = gsap.timeline({scrollTrigger:{
        trigger:".three",
        start:"10% 90%",
        end:"100% 30%",
        // markers:true,
        scrub:1,
    }})
    tl.to(".transparent-div .oval-div",{
        height:"0"
    })
}
ovalAnimation()
function opacityAnimation(){
    let tl = gsap.timeline({scrollTrigger:{
        trigger:".four",
        start:"0% 70%",
        end:"50% 10%",
        // markers:true,
        scrub:1,
    }})
    tl.to("p",{
        y:-30,
        opacity:1
    })
    tl.to("h4",{
        delay:1,
        y:-30,
        opacity:1
    })
    tl.to(".last-div",{
        opacity:1,
        delay:2,
    })
}
opacityAnimation()
function fivePinAnimation(){
    var tl = gsap.timeline({scrollTrigger:{
        trigger:".parent-div",
        scroller:"body",
        start:"50% 50%",
        end:"700% 0%",
        scrub:true,
        pin:true
    
    }})
    tl.to(".child-one",{
        top:"0%",
        scale:1.1,
        // opacity:0.2,
        duration:4,
    })
    tl.to(".child-two",{
        top:"0%",
        duration:4,
    })
    tl.to(".child-two",{
        scale:1.08,
        // opacity:0.2,
        duration:4,
    })
    tl.to(".child-three",{
        top:"0%",
        duration:4,
    })
    tl.to(".child-three",{
        scale:1.08,
        // opacity:0.2,
        duration:4,
    })
    tl.to(".child-four",{
        top:"0%",
        duration:4,
    })
    tl.to(".child-five",{
        top:"0%",
        duration:1,
    })
    tl.to(".child-five .five-oval-div",{
        // delay:-1,
        scale:1.8,
        // opacity:0.2,
        duration:4,
        delay:.4,

    },'a')
    tl.to(".child-four",{
        scale:1.2,
        
        duration:4,
    },'a')
}
fivePinAnimation()
function sixAnimation(){
    var tl = gsap.timeline({scrollTrigger:{
        trigger:".six",
        start:"0% 100%",
        end:"100% 0%",
        markers:true,
        scrub:true,
    
    }})
    tl.to(".six-about-two",{
        // transform:"translateX(100%)",
        left:"50%",
        // duration:.4
    },'a')
    tl.to(".six-about-first",{
        left:"-50%",
    },'a')
}

sixAnimation()