// функция загрузки новостей в разных количествах для разных вьюпортов
function loadNews() {
	let arrayNews = document.querySelectorAll(".news__item");

	if ($(document).width() >= 1200) {

		if (arrayNews.length > 3) {

			for (i = 3; i < arrayNews.length; i++) {
				arrayNews[i].style.display = "none";
			}
			for (i = 0; i <= 2; i++) {
				arrayNews[i].style.display = "flex";
			}

		}
	} else if ($(document).width() >= 768 && $(document).width() <= 1200) {

		if (arrayNews.length > 2) {
			for (i = 2; i < arrayNews.length; i++) {
				arrayNews[i].style.display = "none";
			}
		}
	} else {

		if (arrayNews.length > 2) {
			for (i = 2; i < arrayNews.length; i++) {
				arrayNews[i].style.display = "none";
			}
		}

		arrayNews.forEach(element =>
			element.style.marginBottom = "0px"
		)
	}

};

// запуск функции загрузки новостей

loadNews();

// запуск slick -слайдера для раздела advantage
$(function () {
	$('.slider__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 768,
				settings: 'unslick'
			}
		]
	});

	// изменение количества новостей и отключение слайдера при изменении вьюпорта

	$(window).on('load resize', function () {
		$('.slider__list').slick('resize');

		loadNews();
	});
});

// запуск slick -слайдера для раздела reviews
$(function () {
	$('.reviews__list').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true
				}
			}
		]
	});


	$(window).on('load resize', function () {

		$('.reviews__list').slick('resize');

	});

});

// показ всех новостей

let newsButton = document.querySelector(".news__to-all");
let arrayNews = document.querySelectorAll(".news__item");
let news = document.querySelector(".news");

newsButton.onclick = function () {

	if ($(".news__item:visible").length === arrayNews.length) {
		loadNews();
		arrayNews.forEach(element =>
			element.style.marginBottom = "0px"
		)
		newsButton.innerHTML = "Показать всё";
	} else {
		for (i = 0; i < arrayNews.length; i++) {
			arrayNews[i].style.display = "flex";

			if ($(document).width() >= 1200) {
				arrayNews.forEach(element =>
					element.style.marginBottom = "30px"
				)
				newsButton.innerHTML = "Оставить три новости";
			} else if ($(document).width() >= 768 && $(document).width() < 1200) {
				arrayNews.forEach(element =>
					element.style.marginBottom = "30px"
				)
				newsButton.innerHTML = "Оставить две новости";
			} else {
				arrayNews.forEach(element =>
					element.style.marginBottom = "0px"
				)
				newsButton.innerHTML = "Оставить две новости";
			};
		}
		arrayNews[3].scrollIntoView({ block: "center" });

	}
}

// работа с навигационным окном 

let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");


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


let ml = document.querySelector(".modal-login");
let btnLink = document.querySelector(".user-list__login");
let btnCloseLogin = document.querySelector(".close-login");
let login = ml.querySelector("[name=login]");
let password = ml.querySelector("[name=password]");
let form = ml.querySelector("form");

let mdlOverlay = document.querySelector(".modal-overlay");


// открытие формы ввода логина и пароля
btnLink.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (navMain.classList.contains("main-nav--opened")) {
		navMain.classList.remove("main-nav--opened");
		navMain.classList.add("main-nav--closed");
	}

	mdlOverlay.style.display = "block";
	ml.classList.add("modal-show");
	login.focus();

})

// проверка отсутствия данных в полях логин и пароль формы 
// ввода данных при отправке формы

form.addEventListener("submit", function (evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		ml.classList.remove("modal-error");
		ml.offsetWidth = ml.offsetWidth;
		ml.classList.add("modal-error");
	}
})

// выход с формы ввода логина и пароля
function exitLogin() {
	ml.classList.remove("modal-show");
	ml.classList.remove("modal-error");
	mdlOverlay.style.display = "none";
}


btnCloseLogin.onclick = exitLogin;


// выход из окна ввода логина и пароля по Escape
// 27-код клавиши Escape

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (ml.classList.contains("modal-show")) {
			evt.preventDefault();
			ml.classList.remove("modal-show");
			ml.classList.remove("modal-error");
			mdlOverlay.style.display = "none";
		} else if (map.classList.contains("modal-show")) {
			map.classList.remove("modal-show");
			mdlOverlay.style.display = "none";
		}

	}
})

// функция выбора активной ссылки

function setNavigation() {

	let currentPage = window.location.pathname.split('/')[1];

	if (currentPage === "") return;
	let items = document.querySelectorAll(".nav__link");
	for (let i = 0; i < items.length; i++) {
		if (items[i].getAttribute("href").indexOf(currentPage) !== -1) {
			items[i].className += "--active";
		}
	}

}

setNavigation();

// перемещение в начало страницы

$(document).ready(function () {
	// hide #back-top first
	$('.button-return').hide();

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('.button-return').fadeIn();
			} else {
				$('.button-return').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('.button-return').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
