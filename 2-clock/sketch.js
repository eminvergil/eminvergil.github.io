// FIXME: INITIAL VALUES

let w,h;
let size = 300;
let space = 100;
let yon = false;
let bg;
let particle;
let parts = [];
let thn = 15;

function touchStarted() {
  parts.push(new Particle(mouseX,mouseY));
}

function setup() {
  // put setup code here
  createCanvas(window.innerWidth,window.innerHeight);
  w = window.innerWidth;
  h = window.innerHeight;

  for (let index = 0; index < thn; index++) {
    let x = random(w);
    let y = random(h);
    particle = new Particle(x,y);
    parts.push(particle);
  }


  bg = loadImage("1.jpg");
  background(bg);
  // angle mode
  angleMode(DEGREES);
}

// TODO: renkler ne olacak bunlarin onu yarin yap

function draw() {
  // put drawing code here
  // background("#012BED");
  background(bg);
  textFont('Lato');


  let hr = hour();
  let mn = minute();
  let sc = second();
  let sl = millis();
  
  let hr_end = map(hr % 12 ,0,11,0,360);
  let mn_end = map(mn,0,59,0,360);
  let sc_end = map(sc,0,59,0,360);  
  let sl_end = map(sl,0,59,0,360);

  strokeWeight(1);
  textSize(32);
  fill(255);
  text(hr+":"+mn+":"+sc,w/2-65,h/2);
  
  strokeWeight(32);
  stroke(255); 
  noFill();


  stroke("red");
  arc(w/2,h/2,size,size,hr_end,0,yon);
  
  stroke("yellow");
  arc(w/2,h/2,size - space,size - space,mn_end,0,yon);
  
  stroke("green");
  arc(w/2,h/2,size - 2* space,size- 2 *space,sc_end,0,yon);


  // arc(w/2,h/2,size - 3* space,size- 3 *space,sl_end,yon);

  push();
  scale(0.7);
  // hour and stuff
  strokeWeight(1);
  textSize(32);
  fill(255);
  
  text("HOUR",50+50,60);
  text("MINUTE",50+50,60+space);
  text("SECONDS",50+50,60+2*space);
  

  fill("red");
  strokeWeight(1);
  ellipse(50,50,50,50);


  fill("yellow");
  strokeWeight(1);
  ellipse(50,50+space,50,50);


  fill("green");
  strokeWeight(1);
  ellipse(50,50+2*space,50,50);

  pop();

  let x = random(w);
  let y = random(h);
  let cc = bg.get(x,y);
  fill(cc);
  
  for (let index = 0; index < thn; index++) {
    parts[index].show();
    parts[index].update();
  }

}


function Particle(x, y) {
  this.x = x;
  this.y = y;
  
  this.history = [];
  
  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);
    
    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-2, 2);
      this.history[i].y += random(-2, 2);
    }

    var v = createVector(this.x, this.y);
    this.history.push(v); 
    if (this.history.length > 25) {
      this.history.splice(0, 1);
    }
  }
  
  this.show = function() {
    
    noFill();
    stroke("green");    
    ellipse(this.x, this.y, 12, 12);
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      ellipse(pos.x, pos.y, i, i);
      //vertex(pos.x, pos.y);
    }
    endShape();
    
  }
}