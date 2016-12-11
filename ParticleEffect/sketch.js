var particles = [];
function setup() {
 createCanvas(600, 400);

 

}

function draw() {
  
    
  background(0);
  for (var i=0; i<particles.length; i++){
    particles[i].show();
  particles[i].fade();
  particles[i].velocity();
  particles[i].accelerate();  
  }
  
}

function mousePressed(){
  x_pos = width/2;
 y_pos = height/2;
 pos = createVector(x_pos,y_pos);
 x_vel = random(-3,3);
 y_vel = random(-3,-6);
 vel = createVector(x_vel, y_vel);
 
 x_acc = 0;
 y_acc = random(0.01, 0.1);
 acc = createVector(x_acc, 1);
  particles.push(new Particle(pos,vel,acc,10))
}

function Particle(pos, vel, acc, rad){
  this.pos = pos;
  this.vel = vel;
  this.acc = acc;
  this.rad = rad;
  this.lifespan = 255;
  this.col = createVector(random(255), random(255), random(255));
  this.show = function(){
    fill(this.col.x, this.col.y, this.col.z,this.lifespan);
    ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
  }
  
  this.velocity = function(){
    this.pos.add(this.vel)
  }
  this.accelerate = function(){
    this.vel.add(this.acc)
  }
  
  this.fade = function(){
    this.lifespan -= 3.5;
  }
  
  
  
}