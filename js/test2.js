var item=[
    [0,1,2,3,4,5,6,7],
    [0,3,4,5,7],
    [1,3,4,6,7],
    [2,5,7]
];
var p=0; //用於指定 array index 參數
/* 
    objClick(obj, i)

    obj:    表示要作用的物件區域
    i:      按下的按鈕序號
*/
function objClick(obj,i){
    obj.onclick=function(){
        console.log("click button["+i+"]");
        //window.alert(item[i]);
        // p 為目前列表
        // i 為目標列表
        for(var q=0;q<item[p].length;q++){
            if(item[i].indexOf(item[p][q])==-1){
                document.querySelectorAll(".box .panel > .item")[item[p][q]].setAttribute("class","item hideAni");
            }
        }
        for(var q=0;q<item[i].length;q++){
            if(item[p].indexOf(item[i][q])==-1){
                document.querySelectorAll(".box .panel > .item")[item[i][q]].setAttribute("class","item showAni");
            }
        }
        p=i;
    };
}
window.onload=function(){
    var obj=document.querySelectorAll(".box ul > li"); //抓所有吻合的物件
    for(var i=0;i<obj.length;i++){
        objClick(obj[i],i);
    }
    var init=function(right){
        var obj_about1=document.querySelectorAll(".about > .about1");
        for(var i=0;i<obj_about1.length;i++){
            if(i==(obj_about1.length-1)&&right!=0){
                obj_about1[i].style.left=(-right)+"px";
            }
            else if(right==0){
                obj_about1[i].style.left=(500*i)+"px";
            }    
            console.log("init[about1("+i+")]"+obj_about1[i].style.left);
        }
    };

    init(0);
    
    var obj_about=document.querySelector(".about");
    for(var k in obj_about){
        console.log(k+"=>"+obj_about[k]);
    }
    var m=false;
    var mouseX=0,mouseX_now=0;
    var currView=1;

    var leftAbout=function(){
        var obj=document.querySelectorAll(".about > .about1");
        for(var i=0;i<obj.length;i++){
            obj[i].style.left=(obj[i].offsetLeft-50)+"px";
            console.log("left[about1("+i+")]"+obj[i].style.left);
        }
        if(obj[1].offsetLeft<=0){
            document.querySelector(".about").appendChild(document.querySelector(".about > .about1"));
            init(0);
            currView+=1;
            if(currView>=4){
                currView=1;
            }
        }
        else{
            setTimeout(leftAbout,50);
        }
    };
    var rightAbout=function(){
        var obj=document.querySelectorAll(".about > .about1");
        for(var i=0;i<obj.length;i++){
            obj[i].style.left=(obj[i].offsetLeft+50)+"px";
            console.log("right-step1[about1("+i+")]"+obj[i].style.left);
        }
        if(obj[0].offsetLeft==50){
            init(450);
            document.querySelector(".about").insertBefore(
                document.querySelector(".about > .about1:last-child"),
                document.querySelector(".about > .about1"));
            obj=document.querySelectorAll(".about > .about1");
            for(var i=0;i<obj.length;i++){
                console.log("right-step2[about1("+i+")]"+obj[i].style.left);
            }
        }
        if(obj[0].offsetLeft==0){
            init(0);
            currView-=1;
            if(currView<=0){
                currView=3;
            }
        }
        else{
            setTimeout(rightAbout,50);
        }
    };
    setInterval(function(){
        var obj=document.querySelectorAll(".about_dot > span");
        for(var i=0;i<obj.length;i++){
            obj[i].setAttribute("class","");
        }
        document.querySelectorAll(".about_dot > span")[currView-1].setAttribute("class","current");
    },100);
    obj_about.onmousedown=function(ev){
        mouseX=ev.clientX;
        console.log("A");
        m=true;
    };
    obj_about.onmousemove=function(ev){
        if(m==true){
            console.log("B");
            mouseX_now=ev.clientX-mouseX;
            console.log("move from point: "+mouseX_now);
        }
    };
    obj_about.onmouseup=function(){
        console.log("C");
        m=false;
        if(mouseX_now>0){
            console.log("Rigth side");
            rightAbout();
        }
        else if(mouseX_now<0){
            console.log("Left side");
            leftAbout();
        }
    }
    function dotClick(obj,t){
        obj.onclick=function(){
            console.log("dot click on No."+t);
        };
    }
    var dotAll=document.querySelectorAll(".about_dot > span");
    for(var t=0;t<dotAll.length;t++){
        dotClick(dotAll[t],t);
    }
};

/*
    JS closer
*/
// function x(){
//     var i=0;
//     return function(){
//         i+=1;
//         console.log("x.i:"+i);
//     };
// }

// var p=x();
// p();
// p();
// p();
// console.log("p->i:"+p.i);
// console.log("p->i cannot access， Javascript 封裝");

// function y(){
//     var i=0;
//     return function(){
//         i+=1;
//         console.log("y.i:"+i);
//     }();
// }
// y();
// y();
// y();

// x();
// x()();
// x()();