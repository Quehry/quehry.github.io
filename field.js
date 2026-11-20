const canvas = document.querySelector("#field-art");
const context = canvas.getContext("2d");

function drawField() {
  const { width, height } = canvas.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * pixelRatio);
  canvas.height = Math.round(height * pixelRatio);
  context.scale(pixelRatio, pixelRatio);

  context.beginPath();
  for (let x = 0; x < width; x += 24) {
    context.moveTo(x, 0);
    context.lineTo(x, height);
  }
  for (let y = 0; y < height; y += 24) {
    context.moveTo(0, y);
    context.lineTo(width, y);
  }
  context.strokeStyle = "rgba(164, 217, 175, 0.095)";
  context.stroke();

  const scale = Math.min(width / 440, height / 270);
  // Project a sampled height field onto a tilted plane.
  for (let row = 0; row <= 40; row++) {
    const y = (row - 20) / 20;
    for (let column = 0; column <= 66; column++) {
      const x = (column - 33) / 33;
      const ridge = 0.42 + 0.67 * Math.sin(3.5 * x + 1.6 * y)
        + 0.42 * Math.cos(5.3 * y - 2.2 * x);
      const falloff = Math.exp(-0.68 * (x * x + y * y));
      const z = ridge * falloff;
      const screenX = width * 0.5 + scale * (x * 169 + y * 41);
      const screenY = height * 0.55 + scale * (y * 54 - x * 22 - z * 66);
      const opacity = 0.23 + 0.55 * falloff + 0.10 * z;
      const radius = Math.max(0.7, (1.17 + row / 100 + z * 0.26) * scale);
      context.beginPath();
      context.arc(screenX, screenY, radius, 0, 2 * Math.PI);
      context.fillStyle = `rgba(181, 245, 146, ${opacity})`;
      context.fill();
    }
  }
}

if (context) {
  drawField();
  new ResizeObserver(drawField).observe(canvas);
}
