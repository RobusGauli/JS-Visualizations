var balls = [];
var ball;
var mic;
var h;
function setup(){
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
 // ball = new Ball(createVector(windowWidth/2, windowHeight/2), 400);
}


function draw(){
  
  background(0);
  stroke(0);
  
  var vol = mic.getLevel();
  h = int(map(vol, 0, 1, 1, 500));
  for (var k=0; k<h;k++){
    var  p= createVector(random(windowWidth), random(windowHeight))
     var r = random(100, 300);
     balls.push(new Ball(p, r));
  }
  
  
  // for (var j = 0; j < h; j++){
  // var  pos = createVector(random(windowWidth), random(windowHeight))
  //   var rad = random(100, 300);
  //   balls.push(new Ball(pos, rad));
    
  // }
  
  
  
  for (var i=0; i < balls.length; i++){
    balls[i].show();
    balls[i].update();
    if (balls[i].isDead()){
      balls.pop(i);
    }
  }
  
 
}

function mousePressed(){
  
}

function Ball(pos, rad){
  
  this.pos = pos;
  this.rad = rad;
  this.fade = 200;
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.show = function(){
    stroke(0);
    noStroke();
    fill(this.r, this.g, this.b,this.fade);
    ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
  }
  
  this.update = function(){
    this.fade -= 2.4;
  }
  
  this.isDead = function(){
    if (this.fade < 0){
      return true;
    }
    return false;
  }
  
}


