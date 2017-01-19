
function Circle(x, y){
  
  this.x = x;
  this.y = y;
  this.rad = 1;
  
  this.growing = true;
  
  this.show = function(){
    
   noFill();
   stroke(255);
   strokeWeight(1);
   ellipse(this.x, this.y, this.rad * 2, this.rad * 2);
  }
  
  this.grow = function(){
    if(this.growing){
       this.rad += 0.5; 
    }
  }
  
  this.edge = function(){
   if(this.x + this.rad > width || this.y + this.rad > height || this.x - this.rad < 0 || this.y - this.rad <0){
      this.growing = false; 
     
   }
    
  }
  
  this.checkOverlap = function(circles){
   for(var i = 0; i< circles.length; i++){
       var d = dist(this.x, this.y, circles[i].x, circles[i].y);
       if (d -3< this.rad + circles[i].rad && this != circles[i]){
          this.growing = false; 
         
       }
       
   }
    
  }
} 