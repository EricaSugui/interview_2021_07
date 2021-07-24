/**
 * 10. Exercise
 * Exercise URL = https://www.dell.com/en-us/shop/dell-laptops/sc/laptops
 * Create a dynamic list of links based on the filter categories - blue texts on the left - 
 * and append it above the first section of the page - as pointed in the image below.
 * 
 * These links should take the user to a result page with all respective category filters checked - 
 * e.g: the Screen Size link should go to a result page with "11 inch", "13 inch", "14 inch", "15 inch", "17 inch" options checked.

 */

/**
 * 1. Create a dynamic list of links based on the filter categories - blue texts on the left - and append it above the first section of the page - as pointed in the image below.
 */
$.fn.reverse = [].reverse;
$(".anavmfe__accordion__item__trigger").reverse().each(function(index, elem) {
    
    $("#cat-cards").prepend(`
        <a href="https://www.dell.com/en-us/shop/dell-laptops/sr/laptops/xps?appliedRefinements=${$(elem).parent('div').find('input').attr('name')}">
            <span class="anavmfe__accordion__item__name anavmfe__accordion__item__trigger">
                ${elem.innerText}
            </span>
        </a>
    `)
    
})

/**
 * 2. These links should take the user to a result page with all respective category filters checked - e.g: the Screen Size link should go to a result page with "11 inch", "13 inch", "14 inch", "15 inch", "17 inch" options checked.
 */

// empty answer.
