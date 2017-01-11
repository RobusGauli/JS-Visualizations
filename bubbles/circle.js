function Circle(pos){
  this.pos = pos;
  this.rad = 1;
  
  this.growing = true;
  
  this.show = function(){
     noFill();
     stroke(255);
     strokeWeight(1);
     ellipse(this.pos.x, this.pos.y, this.rad*2,this.rad*2);
  }
  
  this.grow = function(){
    if (this.growing){
     this.rad += 0.4; 
    }
  }
  
  this.edge = function(){
     if (this.pos.x + this.rad > width || this.pos.x - this.rad < 0){
        this.growing = false; 
     }
     if (this.pos.y + this.rad > height || this.pos.y- this.rad < 0){
       
        this.growing = false; 
     }
    
  }
  
  
  
}