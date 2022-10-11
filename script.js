const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

openBtn.onclick = () => {
  overlay.style.display = 'block';
  openBtn.style.display = 'none';
  document.body.style.position = 'fixed';
};

closeBtn.onclick = () => {
  overlay.style.display = 'none';
  openBtn.style.display = 'block';
  document.body.style.position = 'relative';
};