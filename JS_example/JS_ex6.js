/*
let myFriends = new Array();
myFriends[0]= "John";
myFriends[1]= "Mary";
myFriends[2]= "David";
myFriends[3]= 1;
myFriends[4]= true;
*/

//let myFriends = new Array("John", "Mary", "David")
function test_Array(){
    let thisH3 = document.getElementsByTagName("h3")[0];
    let thisH4 = document.getElementsByTagName("h4")[0];
    let myFriends = ["John", "Mary", "David"]
    console.log(myFriends);
    //下面兩行放進console中
    //document.write(myFriends.join(""));
    //myFriends.join("");
    //console.log(typeof myFriends.join(""));
    thisH3.innerHTML=(myFriends.join(""));
    thisH4.innerHTML=(myFriends.join(" and "));
}

Math.PI
Math.abs(-2)
Math.floor(-1.5)
Math.ceil(-1.5)
Math.round(Math.PI,-5)
//1~10
Math.round(Math.floor()*10+1)
// 0 ~ 1 math.random