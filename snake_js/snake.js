function Snake()
{
 this.grid = new Grid();
 this.pos = createVector((this.grid.cols/2 * (this.grid.step)), (this.grid.rows/2 * (this.grid.step)));
 this.vel = createVector(floor(random(-2, 2)), 0);
 this.dir_x = 1;
 this.dir_y = 0;
 
 this.tail = [];
 this.count = 0;
 this.ate  = false;
 
 this.show = function(){
  fill(255);
  rect(this.pos.x, this.pos.y, this.grid.step, this.grid.step);
  
   for (var j = this.tail.length - 1; j>= this.tail.length-this.count; j--)
   {
      rect(this.tail[j].x, this.tail[j].y, this.grid.step, this.grid.step);
     
     
   }
 }
 
 
 
 this.update = function(){
   this.tail.push(createVector(this.pos.x, this.pos.y));
   
  
  this.pos.x += (this.grid.step * this.dir_x);
  this.pos.y += (this.grid.step * this.dir_y);
   
 }
 
 this.eats = function(food){
  if(this.pos.x == food.pos.x && this.pos.y == food.pos.y){
      console.log("East");
   this.count += 1;
   this.ate = true;
   //this.tail.push(createVector(this.pos.x, this.pos.y))
   food.pos.x = floor(random(this.grid.cols)) * this.grid.step;
   food.pos.y = floor(random(this.grid.rows)) * this.grid.step;
  }
   
   
 }
  
}