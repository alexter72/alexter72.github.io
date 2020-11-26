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
