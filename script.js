const openBtn = document.getElementById('openBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

openBtn.onclick = () => {
  document.body.style.position = 'fixed';
  overlay.style.display = 'block';
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

/// popup window ///

const projects = [

  {
    id: 'btn1',
    name: 'Keeping track of hundreds  of components website',
    description: "  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://lul-abdifan.github.io/Portofolio-Project/',
    source_code: 'https://github.com/Lul-Abdifan/Portofolio-Project',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
    newclass: true,
  },
  {
    id: 'btn2',
    name: 'Website Portofolio Project ',
    description: " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://lul-abdifan.github.io/Portofolio-Project/',
    source_code: 'https://github.com/Lul-Abdifan/Portofolio-Project',
    mobile_img: './assets/card3img.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },

  {
    id: 'btn3',
    name: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://lul-abdifan.github.io/Portofolio-Project/',
    source_code: 'https://github.com/Lul-Abdifan/Portofolio-Project',
    mobile_img: './assets/card5.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'btn4',
    name: 'Data Dashboard HealthCare',
    description: "  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://lul-abdifan.github.io/Portofolio-Project/',
    source_code: 'https://github.com/Lul-Abdifan/Portofolio-Project',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'btn5',
    name: 'Website Portofolio Project',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://lul-abdifan.github.io/Portofolio-Project/',
    source_code: 'https://github.com/Lul-Abdifan/Portofolio-Project',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'btn6',
    name: 'Website Portofolio Project',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://lul-abdifan.github.io/Portofolio-Project/',
    source_code: 'https://github.com/Lul-Abdifan/Portofolio-Project',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
];

const popup = document.querySelector('.popup');
const forbur = document.getElementById('forbur');

const workSection = document.querySelector('.workSection');

function renderOne() {
  return `
 <div class="card1_img">   
  <img src="./assets/images/multi-Post-Story.png" class="multi_post">
 </div>  
     <div id="card1_container">
      <h3 class="card-title">Multi-Post Stories</h3>
       <div class="card1_description">
          <p>A daily selection of privately personalized reads;
              no accounts or sign-ups required. has been the industry's standard dummy
              xt ever since the 1500s,
              when an unknown printer took a standard dummy text.
          </p>
       </div>
        <div class="cards_buttons">
          <ul>
             <li> <a href="#">  <button type="button" id="button_link">css</button></a></li>
             <li> <a href="#">  <button type="button" id="button_link">html</button></a></li>
             <li>  <a href="#">   <button type="button" id="button_link">bootstrap</button></a>
             </li>
             <li> <a href="#">  <button type="button" id="button_link">Ruby</button></a></li>
         </ul>
       </div>
        <div class="seeProject">
       <button type="button" class="btn1" id="button_linkProj">See Project</button>  
       </div>
     </div>

  `;
}

const firstCard = document.querySelector('.card1');
firstCard.innerHTML = renderOne();

function makeCard(project) {
  return ` <div class="cards ${project.newclass ? 'card2' : 'card3'}">
  <h3 class="cards-header">${project.name}</h3>
   <div class="cards_description">
     <p>${project.description}
    </p>
 </div>
  <div class="card_buttons">
    <ul>
    <ul>
    <li> <a href="#">  <button type="button" id="button_link">${project.tech[0]}</button></a></li>
    <li>  <a href="#">   <button type="button" id="button_link">${project.tech[1]}</button></a></li>
    <li> <a href="#"> <button type="button" id="button_link">${project.tech[2]}</button></a></li
   </ul>
   </ul>
 </div>
   <div class="seeProjectCards">
     <button type="button" id="button_linkProj" class="${project.id}">See Project</button>
   </div>
</div>

  `;
}

projects.forEach((project) => {
  const div = document.createElement('div');
  div.innerHTML = makeCard(project);
  workSection.appendChild(div);
});

function render(project) {
  return `
  <div class="model">
  <div class="model-heading">
    <h1>${project.name}</h1>
    <img src="./assets/images/close.svg" id="closePopup">
  </div>
  <div class="model-tech">
    <ul>
    
    ${project.tech.map((t) => (`<li>${t}</li>`)).join('')}
    </ul>
  </div>
  <div class="model-container">
    <div class="model-img">
    <img src="${project.mobile_img}">
    </div>
    <div class="model-description">
    <p>
    ${project.description}
    </p>
    <div class="model-btn">
      <a href="${project.live}">See Live 
        <img src="./assets/images/source.svg">
      </a>
      <a href="${project.source_code}">See Source
        <img src="./assets/images/live.svg">
      </a>
      </div>
  </div>
 

 </div>


</div>

  `;
}

document.querySelectorAll('#button_linkProj').forEach((btn) => {
  btn.onclick = () => {
    popup.style.display = 'block';
    document.body.style.position = 'fixed';
    forbur.classList.add('blur');

    projects.forEach((project) => {
      if (btn.className === project.id) {
        popup.innerHTML = render(project);
      }

      document.getElementById('closePopup').onclick = () => {
        popup.style.display = 'none';
        document.body.style.position = 'relative';
        forbur.classList.remove('blur');
      };
    });
  };
});

document.querySelectorAll('.card3').forEach((card) => {
  card.onmouseover = () => {
    card.childNodes[7].style.display = 'block';
  };
  card.onmouseout = () => {
    card.childNodes[7].style.display = 'none';
  };
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

document.getElementById('formSubmit').addEventListener('submit', () => {
  const datas = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    comment: commentInput.value.trim(),
  };
  if (datas.name && datas.email && datas.comment) {
    localStorage.setItem('storedData', JSON.stringify(datas));
  }
});

function getStoredData() {
  const storedData = JSON.parse(localStorage.getItem('storedData'));
  nameInput.value = storedData.name;
  commentInput.value = storedData.comment;
  emailInput.value = storedData.email;
}

window.addEventListener('load', () => {
  getStoredData();
});
