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

/// popup window ///

const projects = [
 
  {
    id: 'btn1',
    name: 'Data Dashboard HealthCare',
    description: "  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://lul-abdifan.github.io/Mobile_Portofolio/',
    source_code: 'https://github.com/Lul-Abdifan/Mobile_Portofolio',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
{
    id: 'btn2',
    name: 'Website Portofolio                                 ',
    description: " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://lul-abdifan.github.io/Mobile_Portofolio/',
    source_code: 'https://github.com/Lul-Abdifan/Mobile_Portofolio',
    mobile_img:'./assets/card3img.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  
  {
    id: 'btn3',
    name: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://lul-abdifan.github.io/Mobile_Portofolio/',
    source_code: 'https://github.com/Lul-Abdifan/Mobile_Portofolio',
    mobile_img: './assets/card5.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'btn4',
    name: 'Data Dashboard HealthCare',
    description: "  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://lul-abdifan.github.io/Mobile_Portofolio/',
    source_code: 'https://github.com/Lul-Abdifan/Mobile_Portofolio',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'btn5',
    name: 'Website Portofolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    live: 'https://lul-abdifan.github.io/Mobile_Portofolio/',
    source_code: 'https://github.com/Lul-Abdifan/Mobile_Portofolio',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
];

const popup = document.querySelector('.popup');
const forbur = document.getElementById('forbur');


const workSection = document.querySelector(".workSection")

projects.forEach(project=>{
  const div = document.createElement('div')
  div.innerHTML = renderAll(project)
  workSection.appendChild(div)
})

function renderAll(project){
  return ` <div class="cards card3" >
  <h3 class="cards-header">${project.name}</h3>
   <div class="cards_description">
     <p>${project.description}
    </p>
 </div>
  <div class="card_buttons">
    <ul>
    ${project.tech.map((t) => (`<li> <li> <a href="#">  <button type="button" id="button_link">${t}</button></a></li></li>`)).join('')}
   </ul>
 </div>
   <div class="seeProjectCards">
     <button type="button" id="button_linkProj" class="btn2">See Project</button>
   </div>
</div>

  `
}

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