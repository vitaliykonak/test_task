$(document).ready(function () {
	$(".hamburger").click(function (event) {
		$(".hamburger").toggleClass("is-active"),
			$(".header__menu").toggleClass("active"),
			$(".topbar_img").toggleClass("active_topbar"),
			$("body").toggleClass("lock");


	});
	$(".uil-times").click(function (event) {
		$(".top_bar").toggleClass("closed");




	});

});