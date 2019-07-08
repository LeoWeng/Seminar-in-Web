window.onload=function(){
    window.alert(
        /* innerHTML 可以取得或設定 HTML Code 中的元素
            使用query selector 可抓取 css */
        document.querySelector(".banner").innerHTML 
    );
};