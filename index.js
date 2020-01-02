var opened;
function isMobileWidth() {
    return $('#mobile-indicator').is(':visible');
}

function bindNavItems() {
	$("ul#navlist").children().click(function() {
		$("#home, #about, #blog, #contact").addClass("d-none");
		$("#".concat($(this).children("a").eq(0).attr("data-nav-section"))).removeClass("d-none");
		$("ul#navlist").children().removeClass("active");
		$(this).addClass("active");
	});
}

$(function() {
	bindNavItems();

	$('#sidebarCollapse').on('click', function () {
		event.stopPropagation();
		$('#sidebar, #content').toggleClass('active');
	});
});

$("html").click(function() {
	if (isMobileWidth() && $("#sidebar").hasClass("active")) {
		$('#sidebar, #content').toggleClass('active');
	}
  });