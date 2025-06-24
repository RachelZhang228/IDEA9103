let screamImg;
let waves = [];
let hills;
let figure;
let currentMode = 'animated'; // modes: 'still', 'animated', 'interactive'
let showImage = false;

function preload() {
  screamImg = loadImage('the_scream.jpg'); // must be in project folder
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);

  // Initialize wave layers for the sky
  waves.push(new WaveLayer(20, 0.02, 0.02, color(255, 100, 100)));
  waves.push(new WaveLayer(30, 0.015, 0.01, color(100, 100, 255)));
  waves.push(new WaveLayer(15, 0.025, 0.015, color(200, 150, 255)));

  // Initialize background hill layer
  hills = new HillLayer(height * 0.6, color(100, 100, 50), color(180, 100, 100));

  // Initialize figure in the center
  figure = new Figure(width / 2, height * 0.65, 80);
}

function draw() {
  background(20);

  if (showImage) {
    image(screamImg, 0, 0, width / 2, height);
    translate(width / 2, 0); // shift the rest of the sketch to the right
  }

  if (currentMode === 'still') {
    hills.display();
    figure.draw();
  } else {
    if (!showImage) image(screamImg, 0, 0, width, height); // faded background overlay
    if (!showImage) tint(255, 50);

    // Animated elements
    for (let wave of waves) {
      wave.display(height * 0.2);
    }

    hills.display();

    if (currentMode === 'interactive') {
      let intensity = map(mouseX, 0, width, 10, 50);
      figure.targetSize = intensity;
    }

    figure.pulse();
    figure.draw();
  }
}

function mousePressed() {
  if (currentMode !== 'still') {
    figure.targetSize += 20;
  }
}

function keyPressed() {
  if (key === '1') currentMode = 'still';
  if (key === '2') currentMode = 'animated';
  if (key === '3') currentMode = 'interactive';
  if (key === 'i') showImage = !showImage;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
