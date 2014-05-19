$(function(){
	var productTemplate = $('#product-template').html();
	var renderProduct = Handlebars.compile(productTemplate);
	for (var i =0; i<productsData.productsList.length; i++){
		// console.log((productsData.productsList[i]));
		// param is the view data - context is the object we're going to render
		var projectDetails = renderProduct(productsData.productsList[i])
		$('#product-container').append(projectDetails);
	};
	var wishlistTemplate = $('#wishlist-template').html();
	var renderWishlist = Handlebars.compile(wishlistTemplate);
	var renderedWishlist = renderWishlist(productsData.productsList[0]);
	$('#wishlist').append(renderedWishlist);

	$('.add-to-wishlist').click(function(){
		var productTitle = $(this).closest('.product').find('.title').text();
		console.log(productTitle);
		var renderedWishlist = renderWishlist({title:productTitle});
		$('#wishlist').append(renderedWishlist);
	});
});


