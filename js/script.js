// console.log("Hello World!");

var noc = 10;
const reqnum = Math.floor(Math.random() * 100);

var getnum = document.getElementById('Number');
var showresult = document.getElementById('result');
var countofchances = document.getElementById('chances_left');
var imgChange1 = document.getElementById('changeimg1');
var imgChange2 = document.getElementById('changeimg2');
var marchanges = document.getElementById('left_chance');


function checkResult(){
    let num = getnum.value;
    // console.log("user input : ", num);
    // console.log("random num : ", reqnum);
    if(num == reqnum){
        imgChange1.src = "./images/congrats.gif";
        imgChange2.src = "./images/congrats.gif";
        showresult.innerText = "You Got it!!";
        alert("Congrates You got it Play again!!");
        location.reload();
    } else if((num < reqnum-10) || (num > reqnum+10)){
        imgChange1.src = "./images/far.gif";
        imgChange2.src = "./images/far.gif";
        reduceCount();
        showresult.innerText = "You are too far!!";
    } else if((num > reqnum-10) || (num < reqnum+10)){
        imgChange1.src = "./images/cloose.gif";
        imgChange2.src = "./images/cloose.gif";
        reduceCount();
        showresult.innerText = "You are cloose!!";
    } else{
        imgChange1.src = "./images/lost.gif";
        imgChange2.src = "./images/lost.gif";
        reduceCount();
        showresult.innerText = "Try again!!";
    }
}

function reduceCount(){
    // console.log("current count : ",noc);

     if(noc == 1){
         countofchances.innerText = String(noc);
         showresult.innerText = "You Lost Try again!!";
         alert("Play again!!");
         location.reload()
     } else {
        noc = noc-1;
        countofchances.innerText = String(noc);
        marchanges.innerText = "Guess The Number Between 1 to 100 You Have "+ String(noc) + " Chances left !!";
     }
    //  console.log("after count : ",noc);
}
