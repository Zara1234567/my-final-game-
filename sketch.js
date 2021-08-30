
var girl
var box1, box2, box3,box4;


function preload() {
  bg = loadImage("stars-1436950_960_720.jpeg");
}

function setup() {
  createCanvas(3000, 700);

  girl = new Girl(0,0,0,0);


  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  girl.display()



}

