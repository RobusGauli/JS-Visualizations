var circles = [];
function setup() {
  createCanvas(600, 400);
  //circle = new Circle(createVector(width/2, height/2),30);
  circles.push(new Circle(createVector(width/2, height/2), 3));
}

function draw() {
  background(0);
  
  generateCircle();
  
  for(var j = 0; j < circles.length; j++){
    circles[j].show();
    circles[j].grow();
    circles[j].edge();
  }
}


function generateCircle(){
  
    var x = random(width);
    var y = random(height);
    var valid = true;
    for (var i=0; i < circles.length; i++){
    
      var d = dist(x, y, circles[i].pos.x, circles[i].pos.y);
      if ( d < circles[i].rad){
         valid = false;
         break;
      }
      
      //for every circle i , i also want to check if the circle is overlalping
      //if its overlapping, stop the circle
      for (var j = 0 ; j < circles.length; j++){
           if (circles[i] != circles[j]){
               
               var dis = dist(circles[i].pos.x, circles[i].pos.y, circles[j].pos.x, circles[j].pos.y);
               if (dis-7 < circles[i].rad + circles[j].rad){
                      circles[i].growing = false; 
               }
             
           }
        
      }
      
    
    }
    
      if (valid){
            circles.push(new Circle(createVector(x, y)));
      }
  
    
  }
  
  
  
  