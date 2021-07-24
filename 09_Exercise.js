/**
 * 09. Exercise
 * Source URL = https://www.dell.com/en-us/shop/accessories
 * When the user clicks on the category quick links from the menu below, 
 * e.g: Monitors, Docking Stations, Tablets, ...
 */

/**
 * 1. prevent the page from redirecting;
 * change all the category section images background-color based on the link's horizontal position:
 */
 $("[data-testid]").click(function(event) {
	event.preventDefault();
    $(".gray-light").slice(0,4).css({"background-color": "#800080"})
    $(".gray-light").filter(function(index) {
        return index === 4 || index === 5 || index === 6 || index === 9;
    }).css({"background-color": "#008000"})
    $(".gray-light").filter(function(index) {
        return index === 7 || index === 8 || index === 10 || index === 11;
    }).css({"background-color": "#ffa500"})
});

/**
 * 2. Change all the product images from the Networking section for the Cameras, Photo & Video ones
 */

$(".half-inner-module-image").eq(47).clone().replaceAll($(".half-inner-module-image").eq(19))
$(".half-inner-module-image").eq(48).clone().replaceAll($(".half-inner-module-image").eq(20))
$(".half-inner-module-image").eq(49).clone().replaceAll($(".half-inner-module-image").eq(21))
$(".half-inner-module-image").eq(50).clone().replaceAll($(".half-inner-module-image").eq(22))

/**
 * 3. Create a self-invoking function that sums the prices of all products listed on the 
 * Power, Batteries & Adapters section and triggers an alert with the result.
 */

(function(){
    var total = 0;
    var first = $(".half-hero-pricing").eq(43)
    var second = $(".half-hero-pricing").eq(44)
    var third = $(".half-hero-pricing").eq(45)
    var fourth = $(".half-hero-pricing").eq(46)
    var f = parseFloat(first.text().match(/[\d|,|\.]+/)[0]);
    var s = parseFloat(second.text().match(/[\d|,|\.]+/)[0]);
    var t = parseFloat(third.text().match(/[\d|,|\.]+/)[0]);
    var f = parseFloat(fourth.text().match(/[\d|,|\.]+/)[0]);
    total = f+s+t+f;
    alert("SUM $ " + total )
})();
