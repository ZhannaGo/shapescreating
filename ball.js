// you can use this
/* ball = create();
size(ball,100,100); // set size
color(ball,255,0,0); //set color
move(ball,50,50); //move ball
colorRandom(ball); // random color
zIndex(ball,5); // set z-index
repearMove(ball, 20, 10, 5); // move multiple time*/


//or you can use this
var list = [];
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());
list.push (create());



// change color of balls in array
var i=0;
var length = list.length;
while (i < length) { 
    var ball = list[i];
    colorRandom(ball);
    i++;
}



//or you can use this code
/*var counter = 0;
while (counter < 10) {
    create();
    counter ++;
}*/