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
    live: 'https://lul-abdifan.github.io/Portofolio-Project/',
    source_code: 'https://github.com/Lul-Abdifan/Portofolio-Project',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'btn2',
    name: 'Website Portofolio                                 ',
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
    name: 'Website Portofolio',
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
function makeCard(project) {
  return ` <div class="cards card3" >
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
     <button type="button" id="button_linkProj" class="btn2">See Project</button>
   </div>
</div>

  `;
}

projects.forEach((project) => {
  const div = document.createElement('div');
  div.innerHTML = makeCard(project);
  workSection.appendChild(div);
});



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