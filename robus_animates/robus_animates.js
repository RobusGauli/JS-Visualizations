var circles = [];
var circle;

function setup() {
  createCanvas(782, 400);
}

function draw() {
  background(0);
  
  //create a new circle and push to array
  var x = random(width);
  var y = random(height);
  let valid = true;
  
  //create a new circle object 
  var circle = new Circle(x, y);
  
  for(let i = 0; i < circles.length; i++){
     //check the newly created cirlce validity and only
     //insert the circle in the array if the x and y pos is valid
    let c = circles[i];
    let d = dist(circle.x, circle.y, c.x, c.y)
    if (d < circle.rad + c.rad){
       valid = false;
       //if valid is false break out of the loop
       break;
    }
    
  }
  //if the circle is valid then push the circle to the array and draw it
  if(valid){
     circles.push(circle); 
  }
  
  for (let i = 0; i < circles.length; i++){
        circles[i].show();
        circles[i].grow();
        circles[i].edge();
        circles[i].checkOverlap(circles);
      
  }
  
}