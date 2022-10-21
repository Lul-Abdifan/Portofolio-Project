const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

openBtn.onclick = () => {
  overlay.style.display = 'block';
  document.body.style.position = 'fixed';
};

closeBtn.onclick = () => {
  overlay.style.display = 'none';
  document.body.style.position = 'relative';
};
function close() {
  overlay.style.display = 'none';
  document.body.style.position = 'relative';
}
document.querySelectorAll('.overlay_link').forEach((btn) => {
  btn.onclick = () => { close(); };
});

// validation
const showError = document.getElementById('showError');
const formCheck = document.getElementById('formSubmit');

formCheck.onsubmit = (e) => {
  const email = formCheck.elements[1];
  if (email.value.toLowerCase() !== email.value) {
    e.preventDefault();
    showError.textContent = 'The email must be in a lower case';
  }
  return true;
};

// preserve data in the browser
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');

function getStoredData() {
  const storedData = JSON.parse(localStorage.getItem('storedData'));
  nameInput.value = storedData.name;
  commentInput.value = storedData.comment;
  emailInput.value = storedData.email;
}

document.getElementById('formSubmit').addEventListener('submit', (e) => {
  e.preventDefault();
  const datas = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    comment: commentInput.value.trim(),
  };
  localStorage.setItem('storedData', JSON.stringify(datas));
});

window.addEventListener('load', () => {
  getStoredData();
});
