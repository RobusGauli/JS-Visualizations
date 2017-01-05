function Grid()
{
  
  this.step = 10;
  this.cols = width/this.step;
  this.rows = height/this.step;
  
  this.show = function()
  {
   for (var x = 0; x < this.rows; x++){
        for(var y = 0; y< this.cols; y++){
          
          
          noStroke();
          noFill();
          rect(x*this.step, y*this.step, this.step, this.step);
            
        }
   }
    
  }
  
  
}