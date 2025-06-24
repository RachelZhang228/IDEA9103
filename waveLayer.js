class WaveLayer {
  constructor(amplitude, frequency, speed, baseColor) {
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.speed = speed;
    this.baseColor = baseColor;
    this.phase = 0;
  }

  display(yOffset) {
    noFill();
    stroke(this.baseColor);
    strokeWeight(2);
    beginShape();
    for (let x = 0; x < width; x++) {
      let y = yOffset + sin(x * this.frequency + this.phase) * this.amplitude;
      vertex(x, y);
    }
    endShape();
    this.phase += this.speed;
  }
}
