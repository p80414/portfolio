let thisButton = document.getElementsByTagName("Button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];

thisButton.onclick = function(){
    document.write("更多工具-->開發人員工具-->console區可以做些小測試<br>");
    document.write("程式碼中console.log-->會直接在console區顯示<br>");
    document.write("也可以檢視window，或關鍵字搜尋那些語法可用<br>");
    document.write("===================================================<br>");
    document.write("例: <br>");
    let person = {
        FirstName:"Ryan",
        LastName:"Chung",
        Height:178
    };

    for(x in person){
        document.write(x + ":" + person[x]+"<br>");
    }

    // for(y in window){
    //     document.write(y+ ":" + window[y]+"<br>");
        
    // }
};