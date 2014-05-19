$(function(){
	var productTemplate = $('#product-template').html();
	var template = Handlebars.compile(productTemplate);
	for (var i =0; i<productsData.productsList.length; i++){
		// console.log((productsData.productsList[i]));
		// param is the view data - context is the object we're going to render
		var projectDetails = template(productsData.productsList[i])
		$('#product-container').append(projectDetails);
	};
});