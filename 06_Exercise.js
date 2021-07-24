/**
 * 06. Exercise
 * Source URL = https://www.delltechnologies.com/pt-br/what-we-do/it-transformation.htm
 * Using JavaScript, move the top section of the page - the one highlighted in red on the 
 * image below - to just above the "Escolha um modelo de consumo..." section.
 */

 const columns = $("div.column-control-v3");
 const secondColumn = $(columns[1]).html();
 $(columns[1]).html($(columns[0]).html());
 $(columns[0]).html(secondColumn);
