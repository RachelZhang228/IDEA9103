class HillLayer {
  constructor(yBase, color1, color2) {
    this.yBase = yBase;
    this.color1 = color1;
    this.color2 = color2;
  }

  display() {
    let gradient = lerpColor(this.color1, this.color2, 0.5);
    fill(gradient);
    noStroke();
    beginShape();
    vertex(0, height);
    for (let x = 0; x <= width; x += 10) {
      let y = this.yBase + noise(x * 0.01) * 100;
      vertex(x, y);
    }
    vertex(width, height);
    endShape(CLOSE);
  }
}
