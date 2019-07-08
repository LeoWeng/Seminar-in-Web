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
    var animateFunc=function(){
        var obj=document.querySelector(".banner > div:last-child > img:last-child");
        opacity-=0.02;
        obj.style.opacity=opacity;
        if(opacity<=0){
            clearInterval(tm);      // tm 為要關閉的計數器ID
            tm=false;
            opacity=1;
            var banner=document.querySelector(".banner > div:last-child");
            banner.innerHTML="<img src='"+obj.src+"'>"+banner.innerHTML;
            document.querySelector(".banner > div:last-child > img:last-child").remove();
            tm2=setTimeout(waitFunction,3000);
        }
    };
    var waitFunction=function(){
        //window.alert("xxx");
        if(tm==false){
            tm=setInterval(animateFunc,10); // tm 得到animateFunc使用的計數器ID
        }
    };
    document.querySelector(".banner > div .prev").onclick=function(){

    };
    document.querySelector(".banner > div .next").onclick=function(){
        waitFunction();
        clearTimeout(tm2);
    };
    tm2=setTimeout(waitFunction,3000);
};