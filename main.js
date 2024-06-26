firstSong = ""
nextSong = ""

function preload(){
    video=createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas = createCanvas(300,200);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 300, 200);
}