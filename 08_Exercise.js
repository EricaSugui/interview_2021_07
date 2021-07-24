/**
 * 08. Exercise
 * Source URL = https://www.dell.com/en-us/member/shop
 * Using JavaScript or jQuery, dynamically store the 
 * first word of each category - highlighted in yellow below - ...
 *
 * ... and add it to the respective sub-links like the image below
 *  - this is a sample, it should be applied for all product categories 
 * respectively, e.g.: Laptops, Desktop Computers, ... -
 */

 const feat = $(".feature");
 const preppendText = (el, val) => $(el).text(val + $(el).text());
 
 feat.each((_index, el) => {
   const label = $(el).text().trim().split(" ")[0];
   const parent = $(el).parent();
   $(parent).find("#category-list-container li a").each((_index, innerElem) => 
     preppendText(innerElem, label + " - ")
   );
 });