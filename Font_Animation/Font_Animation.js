var font;
var vehicles = [];
function preload(){
  font = loadFont('robus.ttf'); 
}
function setup() {
 
  createCanvas(windowWidth, windowHeight);
  background(0);
  //// textFont(font);
  ////textSize(300)
  ////fill(255);
  ////noStroke();
  //text('ROBUS', windowWidth/2-650, windowHeight/2);
  var pts = font.textToPoints('HELLO', windowWidth/2-400, windowHeight/2, 200);
  for (var i = 0; i< pts.length; i++){
      var pt = pts[i]
      var v = new Vehicle(pt.x, pt.y);
      vehicles.push(v);
  }
  var pts_ = font.textToPoints('FROM_ROBUS', windowWidth/2-400, windowHeight/1.2, 120);
  for (var j = 0; j< pts_.length; j++){
      var o = pts_[j]
      var h = new Vehicle(o.x, o.y);
      vehicles.push(h);
  }
  console.log(pts);
}

function draw() {
  background(0);
  for (var i = 0; i< vehicles.length; i++){
     vehicle = vehicles[i];
     vehicle.show();
     vehicle.update();
     vehicle.bounce();
     vehicle.steering();
    vehicle.mouser();
  }
}