$(document).ready(function () {

	// tabs
	$(".tabs .tabs-item").on('click', function(e) {
    e.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(tab).fadeIn();
  });
	//end
});
