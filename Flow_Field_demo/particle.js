
function Particle(pos){
  
 this.pos = pos;
 this.vel = createVector(random(15), random(15));
 this.acc = createVector(0, 0);
 
 this.show = function(){
      
      fill(random(255), random(255), random(255), 255);
      ellipse(this.pos.x, this.pos.y, 5, 5);
      
   }
   
  this.update = function(){
   this.vel.add( this.acc);
   
   this.pos.add(this.vel);
   this.vel.limit(6);
   this.acc.mult(0);
   
  }
 
 
 this.applyForce = function(vector){
  
   this.acc.add(vector)
 }
 
 this.edge = function(){
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if(this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
 }
 
 this.follow = function(vectors){
   
   x = floor(this.pos.x / step);
   y = floor(this.pos.y / step);
   index = x + y * cols;
   v = vectors[index];
   this.applyForce(v);
 }
  
  
}