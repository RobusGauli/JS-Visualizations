function Ball(){
  
 this.pos = createVector(width/2-100, height/2);
 this.vel = createVector(0,6);
 this.accl = createVector(0, 0.9);
 
 this.show = function(){
  fill(255);
  ellipse(this.pos.x, this.pos.y, 35, 35);
  
 }
 
 this.update = function(){
  this.vel.add(this.accl);
  this.pos.add(this.vel);
  
  }
  
 
  this.up = function(){
    this.vel = createVector(0, -12);
  }
  
  this.offScreen = function(){
   return this.pos.y > height || this.pos.y < 0; 
  }
}