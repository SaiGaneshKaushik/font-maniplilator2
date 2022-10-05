function setup(){
   video = createCapture(VIDEO);
   video.size(550, 500);
   video.position(20, 150);

canvas = createCanvas(550, 500);
canvas.position(650, 150);

   poseNet = ml5.poseNet(video, modelLoded);
   poseNet.on("pose", gotPoses);
}
function modelLoded(){
 console.log("model is loaded");
}
function draw(){
  background("grey");
}
function gotPoses(results){
 if(results.length > 0){
 console.log(results);
 }
  }