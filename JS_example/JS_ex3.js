function showAlert(){
    thisH1.innerHTML = "Hello";
}
let thisButton = document.getElementsByTagName("Button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];

thisButton.onclick = showAlert; //給函數名稱，等有人點才會去跑內容
//thisButton.onclick = showAlert(); 有括號會直接執行
//thisButton.onclick = function(){showAlert()};
//thisButton.onclick = function(){thisH1.innerHTML = "Hello"}; 直接用沒有名字的方法