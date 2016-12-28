var one;
var two;

  
function setup() {
  createCanvas(600, 600)
  one = new Ball()
  two = new Ball()
  
  
}

function draw() {
  background(0)
  
  one.show()
  one.update()
  one.edge()
  
  two.show()
  two.followMouse()
  
  two.edge()
  if (two.isCollided(one)){
   
    var vec = p5.Vector.sub(one.pos, two.pos)
    vec.normalize()
    vec.mult(0.7)
    one.applyForce(vec)
    
  }
  
  
 
  
  
  
   
}