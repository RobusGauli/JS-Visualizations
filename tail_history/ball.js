function Ball()
{
 this.pos = createVector(mouseX,mouseY);
 this.vel = createVector(1, 0);
 this.acc = createVector(0.2, 0);
 this.tails = [];
 
 this.show = function(){
  
   for (var i = 0; i < this.tails.length; i++){
        noStroke();
        fill(random(255), random(255), random(255), 90);
        ellipse(this.tails[i].x, this.tails[i].y, i, i);
              
      
  }
  fill(255);
  r = random(10,15);
  ellipse(this.pos.x, this.pos.y, r, r);
  if (this.tails.length > 40){
   this.tails.splice(0, 1); 
  }
 }
 
 this.move = function(){
  this.tails.push(createVector(this.pos.x, this.pos.y));
  this.pos.x += random(5, -5);
  this.pos.y += random(5 ,-5);
 }
 
 
  
}