var circles = [];
var img;

var spots = [];

function preload(){
   img = loadImage("robus.png"); 
  
}

function setup() {
  createCanvas(782, 400);
  pixelDensity(1);
  
  img.loadPixels()
  
  for (var x = 0; x < img.width; x++){
     for(var y = 0; y < img.height; y++){
       
      var index = x + y * img.width;
      
      var c = img.pixels[index*4];
      var b = brightness([c]);
      if (b>1){
        
        spots.push(createVector(x, y));
        
      }
       
     }
    
  }
  //console.log(px_pos.length);
  console.log(img.width);
  console.log(img.height);
  console.log(img.pixels.length);
  console.log(spots.length);
  
}

function draw() {
  background(0);
  //choose the random spot index from the valid spots
  var rand_spot = int(random(spots.length))
  //create a new circle and push to array
  var x = spots[rand_spot].x;
  var y = spots[rand_spot].y;
  var valid = true;
  
  //create a new circle object 
  var circle = new Circle(x, y);
  
  for(var i = 0; i < circles.length; i++){
     //check the newly created cirlce validity and only
     //insert the circle in the array if the x and y pos is valid
    var c = circles[i];
    var d = dist(circle.x, circle.y, c.x, c.y)
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
  
  for (var j = 0; j < circles.length; j++){
        circles[j].show();
        circles[j].grow();
        circles[j].edge();
        circles[j].checkOverlap(circles);
      
  }
  
}