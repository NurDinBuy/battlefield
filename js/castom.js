const charactersList = document.querySelector(".characters-list");

const createCharacterCard = ({ title, body }) => `
  <div class="character-card">
    <img class="character-photo" src="https://avatars.mds.yandex.net/i?id=0465a7d4590dd9224b205019175401d7e1ceb06d-9148169-images-thumbs&n=13" alt="Character">
    <div class="character-text" >
    <h4 class="character-name">${title}</h4>
    <p class="character-body">${body}</p>
    </div>
  </div>
`;

const createCharacterCards = (characters) => {
  charactersList.innerHTML = `
    <div class="characters-list-block">
      ${characters.slice(1, 9).map(createCharacterCard).join("")}
    </div>
  `;
};

const fetchJson = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=15"
  );
  const characters = await response.json();
  createCharacterCards(characters);
};

fetchJson();

////////////////////////

const weaponImage = document.getElementById("weaponImage");
const flashlightButton = document.getElementById("flashlightButton");
const flashlightIcon = document.getElementById("flashlightIcon");
const scopeButton1 = document.getElementById("scopeButton1");
const scopeIcon1 = document.getElementById("scopeIcon1");
const scopeButton2 = document.getElementById("scopeButton2");
const scopeIcon2 = document.getElementById("scopeIcon2");
const scopeButton3 = document.getElementById("scopeButton3");
const scopeIcon3 = document.getElementById("scopeIcon3");
const laserButton = document.getElementById("laserButton");
const laserIcon = document.getElementById("laserIcon");

let isFlashlightOn = false;
let isLaserOn = false;
let activeScope = null; // 1, 2, 3 или null — номер активного прицела

window.addEventListener("load", () => {
  weaponImage.src = "../img/castom1.png";
  flashlightIcon.src = "../img/ico-flashlight-off.png";
  laserIcon.src = "../img/ico-laser-off.png";
  scopeIcon1.src = "../img/ico-scop-1-1.png";
  scopeIcon2.src = "../img/ico-scop-2-1.png";
  scopeIcon3.src = "../img/ico-scop-3-1.png";
});

const updateWeaponImage = () => {
  if (isLaserOn && activeScope === 3) {
    weaponImage.src = "../img/las-3scop.png"; // Лазер + прицел 3
  } else if (isLaserOn && activeScope === 2) {
    weaponImage.src = "../img/las-2scop.png"; // Лазер + прицел 2
  } else if (isLaserOn && activeScope === 1) {
    weaponImage.src = "../img/las-1scop.png"; // Лазер + прицел 1
  } else if (isLaserOn) {
    weaponImage.src = "../img/las.png"; // Только лазер
  } else if (isFlashlightOn && activeScope === 3) {
    weaponImage.src = "../img/scop3-fon.png"; // Фонарик + прицел 3
  } else if (activeScope === 3) {
    weaponImage.src = "../img/scop3.png"; // Только прицел 3
  } else if (isFlashlightOn && activeScope === 2) {
    weaponImage.src = "../img/castom7.png"; // Фонарик + прицел 2
  } else if (isFlashlightOn && activeScope === 1) {
    weaponImage.src = "../img/castom4.png"; // Фонарик + прицел 1
  } else if (activeScope === 2) {
    weaponImage.src = "../img/castom6.png"; // Только прицел 2
  } else if (activeScope === 1) {
    weaponImage.src = "../img/castom3.png"; // Только прицел 1
  } else if (isFlashlightOn) {
    weaponImage.src = "../img/castom2.png"; // Только фонарик
  } else {
    weaponImage.src = "../img/castom1.png"; // Без модулей
  }
};

// Обработчик для кнопки фонарика
flashlightButton.addEventListener("click", () => {
  if (isLaserOn) {
    isLaserOn = false;
    laserIcon.src = "../img/ico-laser-off.png";
  }
  isFlashlightOn = !isFlashlightOn;
  flashlightIcon.src = isFlashlightOn
    ? "../img/ico-flashlight-on.png"
    : "../img/ico-flashlight-off.png";
  updateWeaponImage();
});

// Обработчик для кнопки лазера
laserButton.addEventListener("click", () => {
  if (isFlashlightOn) {
    isFlashlightOn = false;
    flashlightIcon.src = "../img/ico-flashlight-off.png";
  }
  isLaserOn = !isLaserOn;
  laserIcon.src = isLaserOn
    ? "../img/ico-laser-on.png"
    : "../img/ico-laser-off.png";
  updateWeaponImage();
});

// Обработчики для кнопок прицелов
scopeButton1.addEventListener("click", () => {
  if (activeScope === 1) {
    activeScope = null;
    scopeIcon1.src = "../img/ico-scop-1-1.png";
  } else {
    activeScope = 1;
    scopeIcon1.src = "../img/ico-scop-1-2.png";
    scopeIcon2.src = "../img/ico-scop-2-1.png";
    scopeIcon3.src = "../img/ico-scop-3-1.png";
  }
  updateWeaponImage();
});

scopeButton2.addEventListener("click", () => {
  if (activeScope === 2) {
    activeScope = null;
    scopeIcon2.src = "../img/ico-scop-2-1.png";
  } else {
    activeScope = 2;
    scopeIcon2.src = "../img/ico-scop-2-2.png";
    scopeIcon1.src = "../img/ico-scop-1-1.png";
    scopeIcon3.src = "../img/ico-scop-3-1.png";
  }
  updateWeaponImage();
});

scopeButton3.addEventListener("click", () => {
  if (activeScope === 3) {
    activeScope = null;
    scopeIcon3.src = "../img/ico-scop-3-1.png";
  } else {
    activeScope = 3;
    scopeIcon3.src = "../img/ico-scop-3-2.png";
    scopeIcon1.src = "../img/ico-scop-1-1.png";
    scopeIcon2.src = "../img/ico-scop-2-1.png";
  }
  updateWeaponImage();
});

////////////////////////////////////////////////

const weaponImage1 = document.getElementById("weaponImage1");
const flashlightButton1 = document.getElementById("flashlightButton1");
const flashlightIcon1 = document.getElementById("flashlightIcon1");
const scopeButton11 = document.getElementById("scopeButton11");
const scopeIcon11 = document.getElementById("scopeIcon11");
const scopeButton21 = document.getElementById("scopeButton21");
const scopeIcon21 = document.getElementById("scopeIcon21");
const scopeButton31 = document.getElementById("scopeButton31");
const scopeIcon31 = document.getElementById("scopeIcon31");
const laserButton1 = document.getElementById("laserButton1");
const laserIcon1 = document.getElementById("laserIcon1");

let isFlashlightOn1 = false;
let isLaserOn1 = false;
let activeScope1 = null; // 1, 2, 3 или null — номер активного прицела

// Инициализация изображения при загрузке страницы
window.addEventListener("load", () => {
  weaponImage1.src = "../img/castom-1m.png"; // Загрузить первую картинку по умолчанию
  flashlightIcon1.src = "../img/ico-flashlight-off.png";
  laserIcon1.src = "../img/l-1.png";
  scopeIcon11.src = "../img/ico-scop-1-1.png";
  scopeIcon21.src = "../img/scop-2-1m.png";
  scopeIcon31.src = "../img/ico-scop-3-1.png";
});

const updateWeaponImage1 = () => {
  if (isLaserOn1 && activeScope1 === 3) {
    weaponImage1.src = "../img/castom-11m.png";
  } else if (isLaserOn1 && activeScope1 === 2) {
    weaponImage1.src = "../img/castom-10m.png";
  } else if (isLaserOn1 && activeScope1 === 1) {
    weaponImage1.src = "../img/castom-9m.png";
  } else if (isLaserOn1) {
    weaponImage1.src = "../img/castom-8m.png";
  } else if (isFlashlightOn1 && activeScope1 === 3) {
    weaponImage1.src = "../img/castom-13m.png";
  } else if (activeScope1 === 3) {
    weaponImage1.src = "../img/castom-12m.png";
  } else if (isFlashlightOn1 && activeScope1 === 2) {
    weaponImage1.src = "../img/castom-7m.png";
  } else if (isFlashlightOn1 && activeScope1 === 1) {
    weaponImage1.src = "../img/castom-4m.png";
  } else if (activeScope1 === 2) {
    weaponImage1.src = "../img/castom-6m.png";
  } else if (activeScope1 === 1) {
    weaponImage1.src = "../img/castom-3m.png";
  } else if (isFlashlightOn1) {
    weaponImage1.src = "../img/castom-2m.png";
  } else {
    weaponImage1.src = "../img/castom-1m.png";
  }
};

flashlightButton1.addEventListener("click", () => {
  if (isLaserOn1) {
    isLaserOn1 = false;
    laserIcon1.src = "../img/l-1.png";
  }
  isFlashlightOn1 = !isFlashlightOn1;
  flashlightIcon1.src = isFlashlightOn1
    ? "../img/ico-flashlight-on.png"
    : "../img/ico-flashlight-off.png";
  updateWeaponImage1();
});

laserButton1.addEventListener("click", () => {
  if (isFlashlightOn1) {
    isFlashlightOn1 = false;
    flashlightIcon1.src = "../img/ico-flashlight-off.png";
  }
  isLaserOn1 = !isLaserOn1;
  laserIcon1.src = isLaserOn1 ? "../img/l-1-1.png" : "../img/l-1.png";
  updateWeaponImage1();
});

scopeButton11.addEventListener("click", () => {
  if (activeScope1 === 1) {
    activeScope1 = null;
    scopeIcon11.src = "../img/ico-scop-1-1.png";
  } else {
    activeScope1 = 1;
    scopeIcon11.src = "../img/ico-scop-1-2.png";
    scopeIcon21.src = "../img/scop-2-1m.png";
    scopeIcon31.src = "../img/ico-scop-3-1.png";
  }
  updateWeaponImage1();
});

scopeButton21.addEventListener("click", () => {
  if (activeScope1 === 2) {
    activeScope1 = null;
    scopeIcon21.src = "../img/scop-2-1m.png";
  } else {
    activeScope1 = 2;
    scopeIcon21.src = "../img/scop-2-2m.png";
    scopeIcon11.src = "../img/ico-scop-1-1.png";
    scopeIcon31.src = "../img/ico-scop-3-1.png";
  }
  updateWeaponImage1();
});

scopeButton31.addEventListener("click", () => {
  if (activeScope1 === 3) {
    activeScope1 = null;
    scopeIcon31.src = "../img/ico-scop-3-1.png";
  } else {
    activeScope1 = 3;
    scopeIcon31.src = "../img/ico-scop-3-2.png";
    scopeIcon11.src = "../img/ico-scop-1-1.png";
    scopeIcon21.src = "../img/scop-2-1m.png";
  }
  updateWeaponImage1();
});
