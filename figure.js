class Figure {
  constructor(x, y, baseSize) {
    this.x = x;
    this.y = y;
    this.baseSize = baseSize;
    this.size = baseSize;
    this.targetSize = baseSize;
  }

  pulse() {
    this.size = lerp(this.size, this.targetSize, 0.1);
    this.targetSize *= 0.97;
    this.targetSize = max(this.baseSize, this.targetSize);
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(255, 230, 230);
    stroke(50);
    ellipse(0, 0, this.size, this.size * 1.2); // head
    rect(-this.size / 4, this.size * 0.6, this.size / 2, this.size); // body
    pop();
  }
}
