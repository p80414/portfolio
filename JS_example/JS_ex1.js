/*
window.onload = function(){
    // document.write("Hellow JavaScript!");
    document.onclick =function(e){
        console.log(e);
        alert(e.target.innerHTML+"有"+e.target.innerHTML.length+"個字元");
    }

};
*/

function func_confirm(){
    let confirAnswer = confirm("你真的確定你想要取消這個服務嗎?");
    let thisH2 = document.getElementsByTagName("h2")[1];
    if(confirAnswer){
        thisH2.innerHTML="服務已取消，3秒後關閉網頁"
        setTimeout("window.close()" , 3000)
    }else{
        thisH2.innerHTML="繼續使用本服務";
    }
}


