function randomcolor() {

let color=[];
for(let i=0;i<=3;i++){
    color.push(Math.floor(Math.random()*256));

}
return 'rgb('+color.join(',')+')';


}
var page1=document.querySelector("#main");
page1.addEventListener("mouseover",function(){
    document.querySelector("#page1").style.backgroundColor=randomcolor();
});
var page1=document.querySelector("#main");
page1.addEventListener("mouseover",function(){

    document.querySelector("#page1").style.color=randomcolor();
});

function animationarrow(){
    var tl1=gsap.timeline();
    tl1.from("#arrow-text .arrowdown i",{
        y:-25,
        duration:1.2,
        stagger:1,
        repeat:-1,
        yoyo:true,
        // delay:0.1,
        ease:Expo.easeOut,
    });
}
animationarrow();

function textcount(){

    var count=0;
    var main=document.querySelector("#main");
    main.addEventListener("mouseover",function(){
        count+=10;
        
    console.log(count);
    if( count===20){
        document.querySelector(".hea1").style.opacity=1;
        document.querySelector(".hea2").style.opacity=0;
        document.querySelector(".hea3").style.opacity=0;
        // document.querySelector(".hea1").style.position="absolute";
        // gsap.to(".hea1",{
        //     y:20,
        //     opacity:0,
        //     ease:Expo.easeInOut,
        //     duration:1,
        //     delay:1,
        // });
    
    }
    if(count===40){
        document.querySelector(".hea2").style.opacity=1;
        document.querySelector(".hea1").style.opacity=0;
        document.querySelector(".hea3").style.opacity=0;
        // gsap.to(".hea2",{
        //     y:20,
        //     opacity:0,
        //     ease:Expo.easeInOut,
        //     duration:1,
        //     delay:1,
        // });
    }
    if(count===60){
        document.querySelector(".hea3").style.opacity=1;
        document.querySelector(".hea2").style.opacity=0;
        document.querySelector(".hea1").style.opacity=0;
        // gsap.to(".hea3",{
        //     y:20,
        //     opacity:0,
        //     ease:Expo.easeInOut,
        //     duration:1,
        //     delay:1,
        // })
    }
    if(count>70){
        count =0;
    }
    


});
}

textcount();
function imgchange(){

    var count=0;
    var img=document.querySelector("#main");
    img.addEventListener("mouseover",function(){
count+=10;
if(count===30){
    document.querySelector(".main-cent1").style.opacity=1;
    document.querySelector(".main-cent2").style.opacity=0;
    document.querySelector(".main-cent3").style.opacity=0;
    document.querySelector(".main-cent4").style.opacity=0;
}
if(count===50){
    document.querySelector(".main-cent1").style.opacity=0;
    document.querySelector(".main-cent2").style.opacity=1;
    document.querySelector(".main-cent3").style.opacity=0;
    document.querySelector(".main-cent4").style.opacity=0;
}
if(count===70){
    document.querySelector(".main-cent1").style.opacity=0;
    document.querySelector(".main-cent2").style.opacity=0;
    document.querySelector(".main-cent3").style.opacity=1;
    document.querySelector(".main-cent4").style.opacity=0;
}
if(count===100){
    document.querySelector(".main-cent1").style.opacity=0;
    document.querySelector(".main-cent2").style.opacity=0;
    document.querySelector(".main-cent3").style.opacity=0;
    document.querySelector(".main-cent4").style.opacity=1;
}
if(count>110){
    count=0;
}
    });

}
imgchange();


function eyemove(){
    gsap.to(".dot",{
        x:"1vw",
        // left:-10,
        duration:1,
        repeat:-1,
        // yoyo:true,
    })
    gsap.to(".dot",{
        x:"-1vw",
        duration:1,
        repeat:-1,
        yoyo:true,
        // left:10,
    })


var eye=document.querySelector("#main");

eye.addEventListener("mouseover",function(){

})
};
eyemove();

function bc(){

var dec=document.querySelector("#main");
dec.addEventListener("mouseover",function(){

var arr=[{pic:"https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
{pic:"https://images.unsplash.com/photo-1603808033176-9d134e6f2c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},];
arr.forEach(function(dets){
document.querySelector(".main-cent ").style.img="src=" + dets.pic;
// document.querySelector(".main-cent")
})

})

}
bc();

function overly(){

setTimeout(function(){
// document.querySelector("#overly").style.display=none;
// document.querySelector("#overly").style.display="none";
gsap.to("#overly",{
    y:-1000,
    duration:2,
    // ease:Expo
    ease:Power1.easeOut,

})
},4000)

}
overly();

function maineye(){

    gsap.to("#eyemain",{
        x:"1vw",
        // left:-10,
        duration:1,
        repeat:-1,
        yoyo:true,
    });
    gsap.to("#eyemain",{
        x:"-1vw",
        duration:1,
        repeat:-1,
        yoyo:true,
    })

}
maineye();