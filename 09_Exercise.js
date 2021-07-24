/**
 * 09. Exercise
 * Source URL = https://www.dell.com/en-us/shop/accessories
 * When the user clicks on the category quick links from the menu below, 
 * e.g: Monitors, Docking Stations, Tablets, ...
 * 
 * You must prevent the page from redirecting;
 * You must change all the category section images background-color based on 
 * the link's horizontal position:
 * if the category link is positioned in the left, change the category section 
 * image background-color to purple;
 * if the category link is positioned in the center, change the category section 
 * image background-color to green;
 * if the category link is positioned in the right, change the category section image 
 * background-color to orange.
 * Final result example:
 * All categories' section image background-color will be purple if the user clicked on the Monitors link
 * 
 * Change all the product images from the Networking section for the Cameras, Photo & Video ones;
 * Final result example:
 * Networking section with Cameras, Photo & Video images
 * 
 * Create a self-invoking function that sums the prices of all products listed on the Power, 
 * Batteries & Adapters section and triggers an alert with the result.
 */

/**
 * prevent the page from redirecting;
 */

 $("[data-testid]").click(function(event) {
	event.preventDefault();
});

/**
 * When the user clicks on the category quick links from the menu below, e.g: Monitors, Docking Stations, Tablets,
 * change all the category section images background-color based on the link's horizontal position:
 */

$(".gray-light").slice(0,4).css({"background-color": "#800080"})
$(".gray-light").filter(function(index) {
    return index === 4 || index === 5 || index === 6 || index === 9;
}).css({"background-color": "#008000"})
$(".gray-light").filter(function(index) {
    return index === 7 || index === 8 || index === 10 || index === 11;
}).css({"background-color": "#ffa500"})

/**
 * Change all the product images from the Networking section for the Cameras, Photo & Video ones
 */

$(".half-inner-module-image").eq(47).clone().replaceAll($(".half-inner-module-image").eq(19))
$(".half-inner-module-image").eq(48).clone().replaceAll($(".half-inner-module-image").eq(20))
$(".half-inner-module-image").eq(49).clone().replaceAll($(".half-inner-module-image").eq(21))
$(".half-inner-module-image").eq(50).clone().replaceAll($(".half-inner-module-image").eq(22))

/**
 * Create a self-invoking function that sums the prices of all products listed on the 
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
