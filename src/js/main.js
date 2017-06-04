$( document ).ready(function() {	
	
	var link = ["Home", "About Us", "Our Work", "Events", "Donate", "Sponsor"];
	var img = ["<i class='fa fa-home fa-lg'></i>", "<i class='fa fa-info fa-lg'></i>", "<i class='fa fa-globe fa-lg'></i>", "<i class='fa fa-calendar fa-lg'></i>", "<i class='fa fa-credit-card fa-lg'></i>", "<i class='fa fa-child fa-lg'></i>"];
	var id = ["circle1", "circle2", "circle3", "circle4", "circle5", "circle6"];

	var nav = d3.select("#nav");
	for (i = 0; i < link.length; i++) {
	nav.append("div")
	.attr("class", "circle outer")
	.attr("id", id[i])
	.html("<div class='inner'>" + img[i] + "</div>" + "<div class='inner menuText'>" + link[i] + "</div>");
	}
});