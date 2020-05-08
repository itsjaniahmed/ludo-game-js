const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
let p1btn = document.getElementById("p1Num");

//for showing every score of plyer one on the screen;
var p1score = document.getElementById('p1score');

let p2btn = document.getElementById("p2Num");
let p3btn = document.getElementById("p3Num");
let p4btn = document.getElementById("p4Num");



//for Player 1:=
let p1Goti1 = {
    x: 60,
    y: 50,
}
const p1Goti2 = {
    x: 90,
    y: 50,
}
const p1Goti3 = {
    x: 60,
    y: 80,
}
const p1Goti4 = {
    x: 90,
    y: 80,
}



function p1CreateGoti(x, y) {
    context.beginPath();
    context.arc(x, y, 8, 0, 360);
    context.fillStyle = "#580000FF";
    context.fill();
    context.stroke();
}

//for player 2
const p2Goti1 = {
    x: 310,
    y: 310,
}
const p2Goti2 = {
    x: 340,
    y: 310,
}
const p2Goti3 = {
    x: 310,
    y: 340,
}
const p2Goti4 = {
    x: 340,
    y: 340,
}




function p2CreateGoti(x, y) {
    context.beginPath();
    context.arc(x, y, 9, 0, 360);
    context.fillStyle = "#BE600AFF";
    context.fill();
    context.stroke();
}


let arrP1 = [];
//this is a array that will take every value of dice when ckicked.


let ranNumP1;
let ranNumP2;
let ranNumP3;
let ranNumP4;

p2btn.disabled = true;
p3btn.disabled = true;
p4btn.disabled = true;


//Player 1 Goti's
p1btn.addEventListener('click', function() {
    checkResetArray();
    ranNumP1 = Math.floor(Math.random() * 7);
    if (ranNumP1 == 0) {
        ranNumP1 = 6;
    }
    this.innerText = ranNumP1;

    p1movegoti(ranNumP1);

    arrP1.push(ranNumP1);

    console.log(arrP1);



})



function p1movegoti(rand) {
    if (rand < 6) {
        p4btn.disabled = false;
        p1btn.disabled = true;

    }

    if (rand == 6) {
        p1btn.disabled = false;
        p4btn.disabled = true;
    }

}


function checkResetArray() {
    if(arrP1[ arrP1.length -1 ] !== 6){
        arrP1 = [];
    }
}




p4btn.addEventListener('click', function() {
    checkResetArray();
    ranNumP4 = Math.floor(Math.random() * 7);
    if (ranNumP4 == 0) {
        ranNumP4 = 6;
    }
    this.innerText = ranNumP4;
    p4movegoti(ranNumP4);


})


function p4movegoti(rand) {

    if (rand == 6) {
        p1btn.disabled = true;
        p4btn.disabled = false;
    }
    if (rand < 6) {
        p4btn.disabled = true;
        p1btn.disabled = false;
    }
}








//for btn4 


function render() {

    //Displaying Goti's of Player 1:-
    //for goti 1 of p1
    p1CreateGoti(p1Goti1.x, p1Goti1.y);
    //for goti 2 of p1
    p1CreateGoti(p1Goti2.x, p1Goti2.y);
    //for goti 3 of p1

    p1CreateGoti(p1Goti3.x, p1Goti3.y);
    //for goti 4 of p1
    p1CreateGoti(p1Goti4.x, p1Goti4.y);
    //Displaying Goti's of Player 2:-



    //for goti 1 of p2
    p2CreateGoti(p2Goti1.x, p2Goti1.y);
    //for goti 2 of p2
    p2CreateGoti(p2Goti2.x, p2Goti2.y);
    //for goti 3 of p2
    p2CreateGoti(p2Goti3.x, p2Goti3.y);
    //for goti 4 of p2
    p2CreateGoti(p2Goti4.x, p2Goti4.y);


}

//game
function game() {
    render();


}


//loop
// number of frames per second
let framePerSecond = 60;

//call the game function 50 times every 1 Sec
let loop = setInterval(game, 1200 / framePerSecond);