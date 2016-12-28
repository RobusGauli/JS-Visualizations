function Ball(){
 
  this.pos = createVector(width/2, height/2)
  this.vel = createVector(0, 0)
  this.acc = createVector(0, 0)
  this.r = random(255)
  this.g = random(255)
  this.b = random(255)
  
  this.show = function(){
     noStroke()
    fill(this.r, this.g, this.b, 200)
    ellipse(this.pos.x, this.pos.y, 40, 40)
  }
  
  this.update = function(){
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
  
  }
  
  this.applyForce = function(vector){
   this.acc.add(vector)
    
  }
  
  this.edge = function(){
    if (this.pos.x > width - 20 || this.pos.x < 20) this.vel.x = -1 * this.vel.x 
    if (this.pos.y > height -20 || this.pos.y < 20) this.vel.y = -1 * this.vel.y
  }
  
  this.followMouse = function(){
   this.pos.x = mouseX
   this.pos.y = mouseY
    
  }
  
  this.isCollided = function(another){
   
    a = dist(this.pos.x, this.pos.y, another.pos.x, another.pos.y)
    if (a <= 40){
     return true 
    }
    return false
    
  }
  
  
}