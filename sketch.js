

var bird;
var pipes = [];

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
}


function draw() {
  
  background(0);

  fill("red")
  text("CLICK ON SPACEBAR TO JUMP",200,200)

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

  

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
    if (pipes[i].hits(bird)) {
      pipes.speed(0)
      bird.gravity = 0 ;
       bird.lift = 0;
       bird.velocity = 0;
    }
    }
  
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}