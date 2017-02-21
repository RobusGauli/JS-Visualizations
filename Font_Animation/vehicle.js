function Vehicle(x, y){
   this.pos = createVector(random(windowWidth), random(windowHeight));
   this.vel = p5.Vector.random2D();
   this.target = createVector(x, y);
   this.acc = createVector();
   this.r  = random(50, 150);
   this.g = random(50, 100);
   this.b = random(255);
   this.a = random(200,255);
   
   this.maxspeed = 30;
   this.maxforce = 0.1;
  
}


Vehicle.prototype.update = function(){
   this.pos.add(this.vel);
   this.vel.add(this.acc);
   this.acc.mult(0);
   this.vel.limit(4);
}
Vehicle.prototype.steering = function(){
 
  var arrive = this.arrive(this.target);
  this.applyForce(arrive);
  
}

Vehicle.prototype.seek = function(target){
  
  var desired = p5.Vector.sub(target, this.pos);
  desired.setMag(this.maxspeed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);

  return steer;
  
  
  
}

Vehicle.prototype.show = function(){
     stroke(this.r, this.g, this.b);
     strokeWeight(10);
     
     point(this.pos.x, this.pos.y);
 }
 
 Vehicle.prototype.applyForce = function(force){
   //var mouse = createVector(mouseX, mouseY);
   //var d = dist(this.pos.x, this.pos.y, mouse.x, mouse.y);
   //if (d<10){
   this.acc.add(force);
   //}
 }  
 
 Vehicle.prototype.bounce = function(){
  if (this.pos.x > windowWidth || this.pos.x < 0){
     this.vel.x *= -1; 
  }
  
  if (this.pos.y > windowHeight || this.pos.y < 0){
     this.vel.y *= -1; 
  }
   
 }
 
 
 Vehicle.prototype.arrive = function(target){
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    
    var speed = this.maxspeed;
    if ( d < 300){
       var speed = map(d, 0, 100, 0, this.maxspeed); 
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    return steer;
 }
 
 Vehicle.prototype.mouser = function(){
    var mouse = createVector(mouseX, mouseY);
    var d = dist(mouse.x, mouse.y, this.pos.x, this.pos.y);
    if (d < 100){
       this.applyForce(createVector(random(-1000,1000), random(-1000,1000))); 
    }
 }