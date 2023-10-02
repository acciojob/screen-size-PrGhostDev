//your JS code here. If required.
const sizeInfo = document.querySelector('#sizeInfo h1');

function updateSizeInfo() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  sizeInfo.textContent = `Width: ${width} Height: ${height}`;
}

window.addEventListener('resize', updateSizeInfo);
updateSizeInfo();
