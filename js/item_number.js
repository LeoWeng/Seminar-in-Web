window.onload=function(){
    var calCount=0;
    mystyle();
    test2();
    function calNumber(){
        var itemNumber=document.querySelectorAll(".item_number .item .number");
        for(var i=0;i<itemNumber.length;i++){
            itemNumber[i].innerHTML=(itemNumber[i].innerHTML*1)+1;  // *1 用於轉型 將字串轉為數值
        }
        calCount+=1;
        if(calCount<300){
            setTimeout(calNumber,20);
        }
    }
    calNumber();
};