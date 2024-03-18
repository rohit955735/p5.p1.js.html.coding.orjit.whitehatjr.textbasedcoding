function preload() {

}
function setup() {
    canvas = createCanvas(640,480);
    canvas.position(1110,250);
    video = createCapture(VIDEO);
    video.hide();

 tint_color = "";
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
}

function takesnapshot(){
    save('studrent_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("colour_name").value;
}