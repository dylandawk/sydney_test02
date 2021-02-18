function preload() {
  img01 = loadImage('assets/blackPanther01.png') // hidden image
  img02 = loadImage('assets/blackPanther02.png') // regular image
}

// width and height of the images (can be changed)
let width = 443;
let height = 630;

function setup() {
  createCanvas(width, height); // also does not have to correspond to img width and height
  console.log("Started");
}

function draw() {
  let x = mouseX;
  let y = mouseY;
  let boxW = 200; // width of the cutout box
  let boxH = 100; // height of the cutout box

  //top left corner of cutout box
  let boxX = x - boxW / 2; 
  let boxY = y - boxH / 2;

  // order is important
  background(255);
  image(img01, 0, 0); // display hidden image
  let cutout = get(boxX, boxY, boxW, boxH); // grab cutout of hidden image
  image(img02, 0, 0); // display regular image over hidden image
  image (cutout, boxX, boxY); // display cut out over regular


}