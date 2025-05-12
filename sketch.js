let video;
let faceMesh;
let handpose;
let faces = [];
let hands = [];
let triangles;

function preload() {
  // Load FaceMesh model
  faceMesh = ml5.faceMesh({ maxFaces: 1, flipped: true });

  // Load Handpose model
  handpose = ml5.handpose({ flipHorizontal: true });
}

function mousePressed() {
  console.log("Faces:", faces);
  console.log("Hands:", hands);
}

function gotFaces(results) {
  faces = results;
}

function gotHands(results) {
  hands = results;
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();

  // Start detecting faces
  faceMesh.detectStart(video, gotFaces);

  // Start detecting hands
  handpose.on("predict", gotHands);

  // Get predefined triangle connections
  triangles = faceMesh.getTriangles();
}

function draw() {
  background(0);
  video.loadPixels();

  // Draw face mesh
  if (faces.length > 0) {
    let face = faces[0];

    randomSeed(5);
  }
}
