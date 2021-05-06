let thisButton = document.getElementsByTagName("Button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];

thisButton.onclick = function(){
    document.write("<h2 style=\"color: blue\";>break condition<\h2>")
    for (let i=0; i<10; i++){
        if(i==6){
            break;
        }
        document.write(i,"<br>");
    }
    document.write("==================<br>")
    document.write("<h2 style=\"color: blue\";>contiune condition<\h2>")
    for (let i=0; i<10; i++){
        if(i==6){
            continue;
        }
        document.write(i,"<br>");
    }
};
