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
    name: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://lul-abdifan.github.io/Mobile_Portofolio/',
    source_code: 'https://github.com/Lul-Abdifan/Mobile_Portofolio',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'btn2',
    name: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://lul-abdifan.github.io/Mobile_Portofolio/',
    source_code: 'https://github.com/Lul-Abdifan/Mobile_Portofolio',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'btn3',
    name: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://lul-abdifan.github.io/Mobile_Portofolio/',
    source_code: 'https://github.com/Lul-Abdifan/Mobile_Portofolio',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'btn4',
    name: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://lul-abdifan.github.io/Mobile_Portofolio/',
    source_code: 'https://github.com/Lul-Abdifan/Mobile_Portofolio',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'btn5',
    name: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://lul-abdifan.github.io/Mobile_Portofolio/',
    source_code: 'https://github.com/Lul-Abdifan/Mobile_Portofolio',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 'btn6',
    name: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://lul-abdifan.github.io/Mobile_Portofolio/',
    source_code: 'https://github.com/Lul-Abdifan/Mobile_Portofolio',
    mobile_img: './assets/images/mobile_snap.png',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
];

const popup = document.querySelector('.popup');
const forbur = document.getElementById('forbur');

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
  <div class="model-img">
    <img src="${project.mobile_img}">
  </div>
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