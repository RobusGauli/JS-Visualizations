function Food(grid){
 this.grid = grid;
 this.x = floor(random(this.grid.cols)) * this.grid.step;
 this.y = floor(random(this.grid.rows)) * this.grid.step;
 this.pos = createVector(this.x, this.y);
 
 this.show = function(){
  fill(255, 0, 123)
  rect(this.pos.x , this.pos.y, this.grid.step, this.grid.step);
   
 }
  
}