// работа с навигационным окном 

let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav--toggle");


navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
	if (navMain.classList.contains("main-nav--closed")) {
		navMain.classList.remove("main-nav--closed");
		navMain.classList.add("main-nav--opened");
	} else {
		navMain.classList.remove("main-nav--opened");
		navMain.classList.add("main-nav--closed");
	}
});

let catEnergyButton = document.querySelector(".to-all__button");
let catEnergy = document.querySelector(".cat-energy");
let arrayCatEnergy = document.querySelectorAll(".cat-energy__item");
let lastCatEnergyItem = arrayCatEnergy[arrayCatEnergy.length - 1];
let toAllTitle = document.querySelector(".to-all__title");
let toAllClarification = document.querySelector(".to-all__clarification");
let toAllBlock = document.querySelector(".cat-energy__to-all");


// функция загрузки каталога в разных количествах карточек для разных размеров браузера
function loadCatEnergy() {

	if (arrayCatEnergy.length > 3) {

		for (i = 0; i <= 2; i++) {
			arrayCatEnergy[i].style.display = "block";

			if ($(document).width() >= 1220) {
				arrayCatEnergy[i].style.marginBottom = "0px";
			} else {
				arrayCatEnergy[2].style.marginBottom = "0px";
			}

		}

		for (i = 3; i < arrayCatEnergy.length; i++) {
			arrayCatEnergy[i].style.display = "none";
		}

	}

};

// запуск функции загрузки каталога при загрузке страницы

window.onload = loadCatEnergy();

// загрузка всех карточек католога

catEnergyButton.onclick = function () {
	if ($(document).width() >= 768) {
		toAllBlock.style.minHeight = arrayCatEnergy[0].offsetHeight + "px";
	} else {
		toAllBlock.style.minHeight = "auto";
	}

	if ($(".cat-energy__item:visible").length === arrayCatEnergy.length) {
		loadCatEnergy();
		catEnergyButton.innerHTML = "Показать всё";
		toAllTitle.style.display = "block";
		toAllClarification.style.display = "block";
		catEnergyButton.scrollIntoView({ block: "center" });
	} else {

		for (i = 1; i < arrayCatEnergy.length; i++) {
			arrayCatEnergy[i].style.display = "block";
		}

		if ($(document).width() >= 1220) {
			if (arrayCatEnergy.length <= 3) {
				arrayCatEnergy.forEach(element => {
					element.style.marginBottom = "0px";
				});
			} else {

				arrayCatEnergy.forEach(element => {
					element.style.marginBottom = "140px";
				});

				if (arrayCatEnergy.length % 7 === 0) {
					lastCatEnergyItem.style.marginBottom = "0px";
					arrayCatEnergy[arrayCatEnergy.length - 2].style.marginBottom = "0px";
					arrayCatEnergy[arrayCatEnergy.length - 3].style.marginBottom = "0px";
				} else if (arrayCatEnergy.length % 6 === 0) {
					lastCatEnergyItem.style.marginBottom = "0px";
					arrayCatEnergy[arrayCatEnergy.length - 2].style.marginBottom = "0px";
				} else if (arrayCatEnergy.length % 5 === 0) {
					lastCatEnergyItem.style.marginBottom = "0px";
				}
			}

		}

		if ($(document).width() >= 768 && $(document).width() < 1220) {
			arrayCatEnergy[2].style.marginBottom = "140px";

			if (arrayCatEnergy.length % 2 === 0) {
				lastCatEnergyItem.style.marginBottom = "140px";
			} else {
				arrayCatEnergy[2].style.marginBottom = "140px";
				lastCatEnergyItem.style.marginBottom = "0px";
			};

		}

		arrayCatEnergy[3].scrollIntoView({ block: "center" });
		catEnergyButton.innerHTML = "Оставить три товара";
		toAllTitle.style.display = "none";
		toAllClarification.style.display = "none";
	}
}

// изменение нижних отступов в зависимости от размера окна браузера


window.onresize = function () {

	if ($(document).width() >= 768) {
		toAllBlock.style.minHeight = arrayCatEnergy[0].offsetHeight + "px";

		arrayCatEnergy.forEach(element => {
			element.style.marginBottom = "140px";
		});

	} else {

		arrayCatEnergy.forEach(element => {
			element.style.marginBottom = "0px";
		});

		toAllBlock.style.minHeight = "auto";
	}

	if ($(".cat-energy__item:visible").length === arrayCatEnergy.length) {
		if ($(document).width() >= 1220) {

			if (arrayCatEnergy.length % 7 === 0) {
				lastCatEnergyItem.style.marginBottom = "0px";
				arrayCatEnergy[arrayCatEnergy.length - 2].style.marginBottom = "0px";
				arrayCatEnergy[arrayCatEnergy.length - 3].style.marginBottom = "0px";
			} else if (arrayCatEnergy.length % 6 === 0) {
				lastCatEnergyItem.style.marginBottom = "0px";
				arrayCatEnergy[arrayCatEnergy.length - 2].style.marginBottom = "0px";
			} else if (arrayCatEnergy.length % 5 === 0) {
				lastCatEnergyItem.style.marginBottom = "0px";
			}

		} else if ($(document).width() >= 768 && $(document).width() < 1220) {

			if (arrayCatEnergy.length % 2 !== 0) {
				lastCatEnergyItem.style.marginBottom = "0px";
			}

		} else {
			arrayCatEnergy.forEach(element => {
				element.style.marginBottom = "0px";
			});
		}

	} else {

		if ($(document).width() >= 1220) {
			arrayCatEnergy.forEach(element => {
				element.style.marginBottom = "0px";
			});
		} else {
			arrayCatEnergy[2].style.marginBottom = "0px";
		}
	}
}