window.onload=function(){
    /*
    window.alert(
        // innerHTML 可以取得或設定 HTML Code 中的元素
        //    使用query selector 可抓取 {css class} {id} {此方法可辨識css選擇器}
        document.querySelector(".banner").innerHTML 
    );
    */
    /*
    setTimeout(); //timer:只會發生一次
    clearTimeout(); // clear counter

    setInterval(); //timer:週期性發生 
    clearInterval(); // stop Interval
    */
   
    var opacity=1;
    var tm = false;
    var tm2 = false;
    var prevChk = false;

    var animateTrgger=function(){
        if(tm==false){
            clearInterval(tm2);
            tm2=false;
            width=0;
            tm=setInterval(animateFunc,10); // tm 得到animateFunc使用的計數器ID
        }
    };

    var animateFunc=function(){
        var obj=document.querySelector(".banner > div:last-child > img:last-child");
        opacity-=0.02;
        obj.style.opacity=opacity;
        if(opacity<=0){
            clearInterval(tm);      // tm 為要關閉的計數器ID
            tm=false;
            opacity=1;
            if(prevChk===false){
                var banner=document.querySelector(".banner > div:last-child");
                banner.innerHTML="<img src='"+obj.src+"'>"+banner.innerHTML;
            }
            prevChk=false;
            document.querySelector(".banner > div:last-child > img:last-child").remove();
            tm2=setInterval(waitFunction,30);
        }
    };

    var width=0;
    var fontSize=10;
    var height=10;
    var waitFunction=function(){
        //window.alert("xxx");
        var obj2=document.querySelector(".banner .title div:last-child");
        if(fontSize<50){
            fontSize+=5;
            obj2.style.fontSize=fontSize+"px";
        }
        // if(height<60){
        //     height+=5;
        //     obj2.style.height=height+"px";
        // }
        if(tm==false){
            var obj=document.querySelector("div.line");
            width+=1;
            obj.style.width=width+"%";
            if(width>=100){
                animateTrgger();
            }
        }
    };
    document.querySelector(".banner > div .prev").onclick=function(){
        if(prevChk!=true || tm===false){
            prevChk=true;
            var img_tgl_curr=document.querySelector(".banner > div:last-child > img:last-child").cloneNode(true); //.cloneNode(true) 將把參數也製作成副本
            var img_tgl_prev=document.querySelector(".banner > div:last-child > img");
            document.querySelector(".banner > div:last-child > img:last-child").style.opacity=1;
            document.querySelector(".banner > div:last-child").appendChild(img_tgl_prev);
            document.querySelector(".banner > div:last-child").appendChild(img_tgl_curr);
            animateTrgger();
            //clearInterval(tm2);
        }
    };
    document.querySelector(".banner > div .next").onclick=function(){
        animateTrgger();
        //clearInterval(tm2);
    };
    tm2=setInterval(waitFunction,30);
};