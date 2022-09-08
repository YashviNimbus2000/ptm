Arcade="";
Shayad="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Arcade = loadSound("Arcade.mp3");
    Shayad = loadSound("Shayad.mp3");
}

function draw(){
    image(video,0,0,600,530);
}