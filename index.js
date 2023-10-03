const xPos = document.getElementById("x-pos");
const yPos = document.getElementById("y-pos");

window.addEventListener("mousemove", (event) => {
  const clientX = event.clientX;
  const clientY = event.clientY;
  xPos.textContent = clientX;
  yPos.textContent = clientY;
});
