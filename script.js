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



//local storage
const nameInput =document.getElementById('name');
const emailInput =document.getElementById('email');
const commentInput =document.getElementById('comment');
const formsInput =document.getElementById('formSubmit');

window.addEventListener('load',function(){
  getStoredData();
})
formsInput.forEach((input).addEventListener('change',function(){
 saveData()
}

))

function saveData(){
  var datas={
    name:nameInput.value.trim(),
    email:emailInput.value.trim(),
    comment:commentInput.value.trim()
  };
  localStorage.setItem("storedData",JSON.stringify(datas));
}

function getStoredData()
{
  const storedData =JSON.parse(localStorage.getItem(storedData));
  nameInput.value=storedData.name;
  emailInput.value=storedeData.email;
  commentInput.value =storedData.comment;
}
