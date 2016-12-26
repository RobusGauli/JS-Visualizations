var step;
var cols;
var rows;

//globa zoff
var zoff = 0;

var particles = [];

var vectors;


function setup() {
  createCanvas(1200, 900, P2D);
  
  step = 50;
  cols = width/step;
  rows = height/step;
  for (var i=0; i< 400; i++){
      pos = createVector(random(width), random(height));
      particles.push(new Particle(pos));
  }
  vectors = new Array(rows * cols);
  
}

function draw() {
  
  background(0);
  var yoff = 0;
  zoff += 0.005;
  for (var y = 0; y < rows; y++){
    var xoff = 0;
    for (var x = 0; x < cols; x++){
       xoff += 0.1;
       var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
       var v = p5.Vector.fromAngle(angle);
       v.mult(1)
       // find the index
       index = x + y * cols;
       vectors[index] = v
       //push();
       //translate(x * step, y * step);
       //rotate(v.heading());
       //stroke(0)
       //line(0, 0, step, 0)
       //pop();
    }
    yoff += 0.1;
  
  }
  
  for (var j = 0; j < particles.length; j++){
      
      particles[j].show();
      particles[j].update();
      particles[j].edge();
      particles[j].follow(vectors);
      
      var m = createVector(mouseX, mouseY);
      var v = p5.Vector.sub(m, particles[j].pos);
      v.normalize();
      v.mult(0.8);
      particles[j].applyForce(v);
     
  }
}