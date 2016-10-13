var hello = mouseX;
var foo = map(hello, 0, 1250, 0 ,255);



function setup() {
createCanvas(1250, 500);


}

function draw() {
  var hello = mouseX;
  var foo = map(hello, 0 , 2550, 0, 255);
  background(foo);
  
}