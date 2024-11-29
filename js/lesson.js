//PHONE CHECKER
// const phoneInput = document.querySelector("#phone_input");
// const phoneButton = document.querySelector("#phone_button");
// const phoneResult = document.querySelector("#phone_result");

// const regExp = /\+996 [2579] \d{2} \d{2}-\d{2}-\d{2} /;

// phoneButton.onclick = () => {
//   if (regExp.test(phoneInput.value)) {
//     phoneResult.innerHTML = "Ok";
//     phoneResult.style.color = "green";
//   } else {
//     phoneResult.innerHTML = "Not Ok";
//     phoneResult.style.color = "red";
//   }
// };

//TAB SLIDER
// const tabContentBlocks = document.querySelectorAll(".tab_content_block");
// const tabs = document.querySelectorAll(".tab_content_item");
// const tabsParent = document.querySelector(".tab_content_items");

// let currentTabIndex = 0;

// const hideTabContent = () => {
//   tabContentBlocks.forEach((block) => {
//     block.style.display = "none";
//   });

//   tabs.forEach((tab) => {
//     tab.classList.remove("tab_content_item_active");
//   });
// };

// const showTabContent = (id = 0) => {
//   tabContentBlocks[id].style.display = "block";
//   tabs[id].classList.add("tab_content_item_active");
// };

// hideTabContent();
// showTabContent();

// tabsParent.onclick = (event) => {
//   if (event.target.classList.contains("tab_content_item")) {
//     tabs.forEach((tab, tabIndex) => {
//       if (event.target === tab) {
//         hideTabContent();
//         showTabContent(tabIndex);
//       }
//     });
//   }
// };

//Дз салйдер

// setInterval(() => {
//   currentTabIndex++;
//   if (currentTabIndex >= tabs.length) {
//     currentTabIndex = 0;
//   }
//   hideTabContent();
//   showTabContent(currentTabIndex);
// }, 3000);

// ДЗ Converter

// const usdInput = document.querySelector("#usd");
// const somInput = document.querySelector("#som");
// const eurInput = document.querySelector("#eur");

// const fetchRates = async () => {
//   const response = await fetch("../data/converter.json");
//   return await response.json();
// };

// const converter = (element, targetElement1, targetElement2) => {
//   element.oninput = async () => {
//     const data = await fetchRates();

//     if (element.id === "som") {
//       targetElement1.value = (element.value / data.usd).toFixed(2);
//       targetElement2.value = (element.value / data.eur).toFixed(2);
//     }

//     if (element.id === "usd") {
//       targetElement1.value = (element.value * data.usd).toFixed(2);
//       targetElement2.value = ((element.value * data.usd) / data.eur).toFixed(2);
//     }

//     if (element.id === "eur") {
//       targetElement1.value = (element.value * data.eur).toFixed(2);
//       targetElement2.value = ((element.value * data.eur) / data.usd).toFixed(2);
//     }

//     if (element.value === "") {
//       targetElement1.value = "";
//       targetElement2.value = "";
//     }
//   };
// };

// converter(somInput, usdInput, eurInput);
// converter(usdInput, somInput, eurInput);
// converter(eurInput, somInput, usdInput);

// Card Switcher

// const nextButton = document.querySelector("#btn-next");
// const prevButton = document.querySelector("#btn-prev");
// const cardBlock = document.querySelector(".card");
// const maxCards = 200;
// let cardIndex = 1;

// const fetchData = async (url) => {
//   const response = await fetch(url);
//   return await response.json();
// };

// const updateCard = async () => {
//   const data = await fetchData(
//     `https://jsonplaceholder.typicode.com/todos/${cardIndex}`
//   );
//   cardBlock.innerHTML = `
//     <p>${data.title}</p>
//     <p>${data.completed}</p>
//     <span>${data.id}</span>
//   `;
// };

// const Consolelog = async () => {
//   const data = await fetchData("https://jsonplaceholder.typicode.com/posts");
//   console.log(data);
// };

// nextButton.onclick = () => {
//   cardIndex = cardIndex < maxCards ? cardIndex + 1 : 1;
//   updateCard();
// };

// prevButton.onclick = () => {
//   cardIndex = cardIndex > 1 ? cardIndex - 1 : maxCards;
//   updateCard();
// };

// updateCard();
// Consolelog();

// Weather
//http://api.openweathermap.org/data/2.5/weather

// const searchButton = document.querySelector("#search");
// const searchInput = document.querySelector(".cityName");
// const city = document.querySelector(".city");
// const temp = document.querySelector(".temp");

// const APP_ID = "e417df62e04d3b1b111abeab19cea714";
// const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

// const fetchWeather = async (cityName) => {
//   const response = await fetch(
//     `${BASE_URL}?appid=${APP_ID}&q=${cityName}&units=metric&lang=ru`
//   );
//   return await response.json();
// };

// searchButton.onclick = async () => {
//   const data = await fetchWeather(searchInput.value);

//   if (data.cod === "404") {
//     city.innerHTML = "Город не найден";
//     temp.innerHTML = "";
//     return;
//   }

//   city.innerHTML = data.name || "Город не найден";
//   temp.innerHTML = `${Math.round(data.main.temp)}°C`;

//   const description = data.weather[0].description || "Неизвестно";
//   const iconCode = data.weather[0].icon;

//   temp.innerHTML += ` ${description} <img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="${description}" />`;
// };

// Home work 4/1 Карточки с специалистами

// const createCharacterCard = ({
//   photo,
//   name,
//   callSign,
//   class: characterClass,
// }) => `
//   <div class="character-card">
//     <img class="character-photo" src="${photo}" alt="${name}">
//     <h3 class="character-name">${name}</h3>
//     <p class="character-call-sign">Позывной: ${callSign}</p>
//     <p class="character-class">Класс: ${characterClass}</p>
//   </div>
// `;

// const createCharacterCards = (characters) => {
//   charactersList.innerHTML = `

//     <div class="characters-list-block">
//       ${characters.map(createCharacterCard).join("")}
//     </div>
//   `;
// };

// const fetchJson = async () => {
//   const response = await fetch("../data/characters.json");
//   const characters = await response.json();
//   createCharacterCards(characters);
// };

// fetchJson();

const charactersList = document.querySelector(".characters-list");

const createCharacterCard = ({
  photo,
  name,
  callSign,
  class: characterClass,
}) => `
  <div class="character-card">
    <img class="character-photo" src="${photo}" alt="${name}">
    
    <h3 class="character-name">${name}</h3>
    <p class="character-call-sign">Позывной: ${callSign}</p>
    <p class="character-class">Класс: ${characterClass}</p>
    <button class="button-details">Подробнее</button>
   
  </div>
`;

const createCharacterCards = (characters) => {
  const assaultCharacters = characters.slice(0, 4);
  const engineerCharacters = characters.slice(4, 7);
  const supportCharacters = characters.slice(7, 10);
  const reconCharacters = characters.slice(10, 14);

  document.querySelector(".characters-list-assault").innerHTML = `
    ${assaultCharacters.map(createCharacterCard).join("")}
  `;
  document.querySelector(".characters-list-engineer").innerHTML = `
    ${engineerCharacters.map(createCharacterCard).join("")}
  `;
  document.querySelector(".characters-list-support").innerHTML = `
    ${supportCharacters.map(createCharacterCard).join("")}
  `;
  document.querySelector(".characters-list-recon").innerHTML = `
    ${reconCharacters.map(createCharacterCard).join("")}
  `;
};

const fetchJson = async () => {
  const response = await fetch("../data/characters.json");
  const characters = await response.json();
  createCharacterCards(characters);
};

fetchJson();

//////////////////////

const fetchModalData = async () => {
  const response = await fetch("../data/charactersModal.json");
  return await response.json();
};

document.addEventListener("DOMContentLoaded", async () => {
  const modalData = await fetchModalData();

  document.querySelectorAll(".button-details").forEach((button, index) => {
    button.addEventListener("click", () => {
      const data = modalData[index];
      document.body.style.overflow = "hidden";

      const videoElement = document.getElementById("characterModalVideo");
      videoElement.src = data.video;

      videoElement.addEventListener("ended", () => {
        videoElement.currentTime = 0;
        videoElement.play();
      });

      document.getElementById("characterModalLogo1").src = data.logo1;
      document.getElementById("characterModalText1").textContent = data.text1;
      document.getElementById("characterModalText1Name").textContent =
        data.text1Name;

      document.getElementById("characterModalLogo2").src = data.logo2;
      document.getElementById("characterModalText2").textContent = data.text2;
      document.getElementById("characterModalText2Name").textContent =
        data.text2Name;

      document.getElementById("characterModalLogo3").src = data.logo3;
      document.getElementById("characterModalText3").textContent = data.text3;
      document.getElementById("characterModalText3Name").textContent =
        data.text3Name;

      document.getElementById("characterModalLogo4").src = data.logo4;
      document.getElementById("characterModalText4").textContent = data.text4;
      document.getElementById("characterModalText4Name").textContent =
        data.text4Name;

      document.getElementById("characterDetailsModal").style.display = "flex";
    });
  });

  document
    .getElementById("closeCharacterModal")
    .addEventListener("click", () => {
      const modal = document.getElementById("characterDetailsModal");
      modal.style.display = "none";
      document.body.style.overflow = "";

      const video = document.getElementById("characterModalVideo");
      video.pause();
      video.src = "";
    });
});

const customSlides = document.querySelectorAll(".custom-slide");
const customNext = document.querySelector("#custom-next");
const customPrev = document.querySelector("#custom-prev");
let customIndex = 0;

const hideCustomSlide = () => {
  customSlides.forEach((slide) => {
    slide.style.opacity = 0;
    slide.classList.remove("active-custom-slide");
  });
};

const showCustomSlide = (i = 0) => {
  customSlides[i].style.opacity = 1;
  customSlides[i].classList.add("active-custom-slide");
};

hideCustomSlide();
showCustomSlide(customIndex);

const autoCustomSlider = (i = 0) => {
  setInterval(() => {
    i++;
    if (i > customSlides.length - 1) {
      i = 0;
    }
    hideCustomSlide();
    showCustomSlide(i);
  }, 5000);
};

customNext.onclick = () => {
  customIndex < customSlides.length - 1 ? customIndex++ : (customIndex = 0);
  hideCustomSlide();
  showCustomSlide(customIndex);
};

customPrev.onclick = () => {
  customIndex > 0 ? customIndex-- : (customIndex = customSlides.length - 1);
  hideCustomSlide();
  showCustomSlide(customIndex);
};

autoCustomSlider(customIndex);
