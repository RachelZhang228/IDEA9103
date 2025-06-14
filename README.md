# IDEA9103

# The Scream – Creative Coding Project

This project is a creative coding reinterpretation of Edvard Munch’s *The Scream* using p5.js. It combines layered wave animations, noise-generated hills, and a central pulsating figure to capture the tension and energy of the original artwork.

---

## 🌟 How to run

1. Clone or download this repository.
2. Open `index.html` using a local server (e.g. VSCode Live Server extension).
3. The sketch will open in your browser window and automatically scale to fit your screen.

---

## 🎮 Interaction instructions

- **Modes**
  - Press `1`: Display *still* mode (static figure and hills, no animation).
  - Press `2`: Display *animated* mode (waves, hills, and pulsating figure animate automatically).
  - Press `3`: Display *interactive* mode (figure responds to mouse position).

- **Image toggle**
  - Press `i`: Toggle a reference image of *The Scream* on the left side of the canvas.

- **Mouse interaction**
  - In *interactive* mode: Move the mouse horizontally to change the figure’s size.
  - Click anywhere: Temporarily enlarge the figure (in animated/interactive modes).

- **Responsive design**
  - The canvas automatically resizes when you change the window size.

---

## 🔑 Individual contribution and approach

I focused on implementing the following features for this project:
- Designed the `Figure` class to create a pulsating central figure whose size responds smoothly to interaction.
- Integrated layered `WaveLayer` and `HillLayer` objects to recreate the dynamic, emotional background of the painting.
- Built interactive features that tie figure size to mouse position and clicks for expressive input.
- Implemented mode switching and responsive canvas resizing for accessibility across devices.

My chosen driver for animation:
- **Interaction (mouse position and clicks)** influences the figure’s size.
- **Time-based animation** (through phase shifts and frame updates) drives the wave and hill motions.

---

## 🎨 Animation properties

- The **figure’s size** is animated through gradual interpolation (`lerp`) toward a target size, giving a smooth pulsation effect.
- The **waves** are animated sine functions layered with different frequencies, speeds, and colors to create a dynamic sky.
- The **hills** use Perlin noise to generate organic forms that subtly shift with canvas resizing.

Each group member chose different parameters and visual elements to focus on — this version emphasizes figure interactivity combined with animated layers for an immersive result.

---

## 💡 Inspirations

- **Edvard Munch – *The Scream*** (original artwork)
- **teamLab** – layered and dynamic digital installations
- **Petros Vrellis** – interactive reinterpretations of classical artworks
- **p5.js examples**
  - [Sine Wave Example](https://p5js.org/examples/math-sine-wave.html)
  - [Perlin Noise 1D](https://p5js.org/examples/noise-noise1d.html)

---

## ⚙️ Technical notes

- Built with [p5.js 1.6.0](https://p5js.org/)
- Responsive design: canvas resizes on `windowResized()`
- All code is original or based on p5.js examples.  
- External libraries: None beyond p5.js CDN

If any external code patterns were used (e.g. wave math from p5.js examples), they are referenced in comments.



