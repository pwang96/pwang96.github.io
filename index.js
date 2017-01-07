var currPage;

$(function() {
	bindNavItems();
	animateContactIcons();
	showSlides(0);
});

function bindNavItems() {
	$("ul.navbar-nav").children().click(function() {
		$("#home, #about, #projects, #resume, #contact").addClass("hidden");
		$("#".concat($(this).text().toLowerCase())).removeClass("hidden");
		$("#hamburgernav").attr("aria-expanded", "false");
		$("#hamburgernav").removeClass("in");
	});
}

function animateContactIcons() {
	$(".contact-icon").hover(function() {
		$(this).animate({height:180, width:180}, 200);
	}, function() {
		$(this).animate({height:150, width:150}, 200);
	});
}

function bindHoverProjects() {
	$(".project-row").hover(function() {
		$(this).css({
                transition : 'background-color 1s ease-in-out',
                "background-color": "green"
	})}, function() {
		$(this).css({
                transition : 'background-color 1s ease-in-out',
                "background-color": "transparent"
            })
	});
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("measure-pic");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i=0; i<slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block"
;}