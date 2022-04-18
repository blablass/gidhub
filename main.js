function preload(){

}
function setup(){
    canvas = createCanvas(800,800)
    canvas.center()
    webcam = createCapture(VIDEO)
    webcam.hide()
}
function takepic(){
    save("myimg.png")
}
function draw(){
    image(webcam,0,0,800,800)
}