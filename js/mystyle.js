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
    var animateFunc=function(){
        var obj=document.querySelector(".banner img:last-child");
        opacity-=0.02;
        obj.style.opacity=opacity;
        if(opacity<=0){
            console.log("animateFunc: tm="+tm);
            clearInterval(tm);      // tm 為要關閉的計數器ID
            opacity=1;
            var banner=document.querySelector(".banner");
            banner.innerHTML="<img src='"+obj.src+"'>"+banner.innerHTML;
            document.querySelector(".banner img:last-child").remove();
            setTimeout(waitFunction,3000);
        }
    };
    var waitFunction=function(){
        //window.alert("xxx");
        tm=setInterval(animateFunc,100); // tm 得到animateFunc使用的計數器ID
        console.log("waitFunc tm="+tm);
    };
    setTimeout(waitFunction,3000);
};