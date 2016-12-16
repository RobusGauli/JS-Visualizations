var fireworks = [];
var gravity;
function setup() {
  createCanvas(600, 400);
  gravity = createVector(0,0.2);
  stroke(255);
  strokeWeight(4);
  fireworks.push(new Firework())
}

function draw() {
  background(0);
  fireworks.push(new Firework());
  console.log(fireworks[i].isDead());
  for(var i = 0; i< fireworks.length; i++){
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].isDead()){
      fireworks.pop(i);
      
    }
  }
  
  
}

function Particle(x, y){
  this.pos = createVector(x, y);
  this.vel = createVector(0, -10);
  this.acc = createVector(0, 0);
  
  this.applyForce = function(force){
    this.acc.add(force);
  }
  
  this.update = function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    
  }
  this.show = function(){
    point(this.pos.x, this.pos.y);
  }
  
}

function Firework(){
  
  this.firework = new Particle(random(width), height);
  
  this.update = function(){
    this.firework.update();
    this.firework.applyForce(gravity);
  }
  
  this.show = function(){
    this.firework.show();
  }
  
  this.isDead = function(){
    if(this.firework.pos.y > height){
      return true;
    }
    return false;
  }
}


