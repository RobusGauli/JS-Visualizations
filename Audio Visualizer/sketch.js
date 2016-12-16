var balls = [];
var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  for(var i = 0; i < 400; i++){
    balls.push(new Ball());
  }
}

function draw() {
  background(0,70);
  translate(windowWidth/2, windowHeight/2);
  for (var i= 0; i< balls.length; i++){
    balls[i].show();
    balls[i].update();
  }
}

function Ball(){
  this.pos = createVector(random(-windowWidth,windowWidth), random(-windowHeight,windowHeight));
  this.z = random(windowWidth);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  
  
  this.show = function(){
    fill(this.r, this.b, this.g);  
    noStroke();
    var sx = map(this.pos.x/this.z, 0, 1, 0 , windowWidth)
    var sy = map(this.pos.y/this.z, 0, 1, 0, windowHeight)
    var sr = map(this.z, 0, width, 24, 0);
    ellipse(sx, sy, sr, sr);
    
  }
  
  this.update = function(){
    var speed = map(mic.getLevel(), 0, 1, 0, 500);
    this.z -= speed;
    if (this.z < 1){
      this.z = windowWidth;
    }
  }
  
  
  
  
}