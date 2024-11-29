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

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");

let currentTabIndex = 0;

const descriptions = [
  "HAVEN — карта с узкими улицами и высокими зданиями, идеально подходящая для тактических сражений.",
  "KALEIDOSCOPE — современный город с небоскрёбами и парками, где динамичные бои проходят на каждой улице.",
  "DISCARDED — побережье с массивными суднами и открытыми пространствами для эпических битв.",
  "HOURGLASS — пустыня с огромными песчаными дюнами и современными сооружениями.",
  "ORBITAL — космодром, где идут сражения вокруг ракетной площадки и прилегающих зданий.",
  "RENEWAL — сельская местность с контрастом между зелёными полями и пустынными зонами.",
  "BREAKAWAY — ледяной остров с массивными айсбергами и опасными обрывами.",
];

const descriptionElement = document.getElementById("description");

const hideTabContent = () => {
  tabContentBlocks.forEach((block) => {
    block.style.display = "none";
  });

  tabs.forEach((tab) => {
    tab.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (id = 0) => {
  tabContentBlocks[id].style.display = "flex";
  tabs[id].classList.add("tab_content_item_active");
  descriptionElement.textContent = descriptions[id];
};

hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabs.forEach((tab, tabIndex) => {
      if (event.target === tab) {
        hideTabContent();
        showTabContent(tabIndex);
        currentTabIndex = tabIndex;
      }
    });
  }
};

setInterval(() => {
  currentTabIndex++;
  if (currentTabIndex >= tabs.length) {
    currentTabIndex = 0;
  }
  hideTabContent();
  showTabContent(currentTabIndex);
}, 7000);

////////////////////////////////

const sliderContainer = document.querySelector(".custom-slider1");
const slides = document.querySelectorAll(".custom-slide1");
const movingBlock = sliderContainer.querySelector(".moving-block");
const nextButton = document.querySelector("#custom-next1");
const prevButton = document.querySelector("#custom-prev1");

let currentIndex = 0;
let positionX = 0,
  positionY = 0;
const speed = 3;
let direction = "right";
const slideInterval = 5000;

const hideSlides = () => {
  slides.forEach((slide) => slide.classList.remove("active-custom-slide1"));
};

const showSlide = (index) => {
  slides[index].classList.add("active-custom-slide1");
};

const getRotationAngle = (prevX, prevY, newX, newY) => {
  const deltaX = newX - prevX;
  const deltaY = newY - prevY;
  return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
};

const animateBlock = () => {
  const maxX = sliderContainer.offsetWidth - movingBlock.offsetWidth;
  const maxY = sliderContainer.offsetHeight - movingBlock.offsetHeight;

  const prevX = positionX;
  const prevY = positionY;

  switch (direction) {
    case "right":
      positionX += speed;
      if (positionX >= maxX) {
        positionX = maxX;
        direction = "down";
      }
      break;
    case "down":
      positionY += speed;
      if (positionY >= maxY) {
        positionY = maxY;
        direction = "left";
      }
      break;
    case "left":
      positionX -= speed;
      if (positionX <= 0) {
        positionX = 0;
        direction = "up";
      }
      break;
    case "up":
      positionY -= speed;
      if (positionY <= 0) {
        positionY = 0;
        direction = "right";
      }
      break;
  }

  const angle = getRotationAngle(prevX, prevY, positionX, positionY);

  movingBlock.style.left = `${positionX}px`;
  movingBlock.style.top = `${positionY}px`;
  movingBlock.style.transform = `rotate(${angle}deg)`;

  requestAnimationFrame(animateBlock);
};

const autoSlide = () => {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    hideSlides();
    showSlide(currentIndex);
  }, slideInterval);
};

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  hideSlides();
  showSlide(currentIndex);
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  hideSlides();
  showSlide(currentIndex);
});

hideSlides();
showSlide(currentIndex);
animateBlock();
autoSlide();
