let board;
let boardWidth = 360;
let boardHeight = 576;
let context; //paintbrush for the canvas

//board holds a reference to the canvas element 


//doodler

let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth/2 - doodlerWidth/2;
let doodlerY = boardHeight * 7/8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;

let doodler = { //whenever you draw on a canvas you need these elements 
    img: null,
    x : doodlerX,
    y : doodlerX,
    width : doodlerWidth,
    height : doodlerHeight
} // an object in JS stores things in key value pairs and elements are accessed by the key 

window.onload = function(){ //run function when page loads
    board = document.getElementById("board")
    board.height = boardHeight; //setting properties of board
    board.width = boardWidth;
    context = board.getContext("2d") //getContext needs to be called on a camnvas element   

    context.fillStyle = "green"
    context.fillRect(doodler.x, doodler.y, doodler.width, doodler.height)
}



