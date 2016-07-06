$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('a').smoothScroll();
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function () {

	$("#owl-comments").owlCarousel({
		autoPlay: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			750: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

});

var statistics_shown = false;

$(window).on("scroll", function () {
	if ($(window).scrollTop() > 0) {
		$(".navbar").removeClass("light");
		$(".navbar").addClass("dark");
	}
	else {
		$(".navbar").removeClass("dark");
		$(".navbar").addClass("light");
	}

	if (($(window).scrollTop() + $(window).height() > $(".statistics").offset().top) & (!statistics_shown)) {
		$('#downloads').animateNumber({number: 7777}, 3000);
		$('#newsletter').animateNumber({number: 4400}, 3500);
		$('#clients').animateNumber({number: 900}, 4000);
		$('#websites').animateNumber({number: 15000}, 4500);
		statistics_shown = true;
	}
});

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 51.52149, lng: 30.760221},
		zoom: 11
	});

	var marker = new google.maps.Marker({
		position: {lat: 51.52149, lng: 30.760221},
	});

	marker.setMap(map);
}

new WOW().init();


