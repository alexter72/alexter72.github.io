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