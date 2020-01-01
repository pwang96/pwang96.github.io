var currPage;

$(function() {
	bindNavItems();
});

function bindNavItems() {
	$("ul#navlist").children().click(function() {
		$("#home, #about, #interests, #blog, #contact").addClass("hidden");
		$("#".concat($(this).children("a").eq(0).attr("data-nav-section"))).removeClass("hidden");
		$("ul#navlist").children().removeClass("active");
		$(this).addClass("active");
	});
}