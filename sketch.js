  var secondi = second();
  var minuti = minute();
  var ore = hour();

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

}

function draw() {
  background(102, 99, 99);
  translate(width/2,height/2);
 
  noStroke();
  fill(221, 90, 110)
  ellipse(0,0,12)
  
  
  textSize(20);
 
  fill(123, 216, 182);
  textFont("Futura");
  text(hour(),-20,250);
  text(minute(),10,250);
  

  // secondi
  hand (second(),60,2,200,[123, 216, 182]);
  
  //minuti
  hand (minute(),60,4,140,[221, 90, 110])
  
  //ore
  if(hour()>12){
    var hour12 = hour()-12
  } else {
    var hour12 = hour()
  }
  hand (hour12,12,6,90,[221, 90, 110])
  
  
}

function hand(handvalue,handrange,handweight,handradius,handcol){
  var angle = map(handvalue,0,handrange,-90,270)
  stroke(handcol)
  strokeWeight(handweight)
  line(0,0,handradius*cos(angle),handradius*sin(angle))
}