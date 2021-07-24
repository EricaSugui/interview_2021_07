/**
 * 07. Exercise
 * Source URL = https://www.delltechnologies.com/pt-br/what-we-do.htm
 * Using JavaScript or jQuery, prevent the button below from loading the video when clicked.
 */

$("a.play.overlay-video-trigger.btn.primary.cta-v2").click(function(event) {
	event.stopPropagation();
});
