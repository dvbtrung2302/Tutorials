var Product = require('../models/product.model');

module.exports.index = async function(req, res) {
	var page = parseInt(req.query.page) || 1; // n
	var perPage = 8; // x
  var products = await Product.find();
	var start = (page - 1) * perPage;
	var end = page * perPage;
	var totalPage = Math.ceil(products.length / perPage);

	var pages = [];
	var currentPages = [];
	var activePage;

	if (page === 1) {
		pages.push('Previous', page, page + 1, page + 2, 'Next');
		currentPages.push('disabled', page, page + 1, page + 2, page + 1);
	} 
	if (page > 1 && page < totalPage) {
		pages.push('Previous', page -1, page, page + 1, 'Next');
		currentPages.push(page - 1, page -  1, page, page + 1, page + 1);
	}
	if (page === totalPage) {
		pages.push('Previous', page - 2, page - 1, page, 'Next');
		currentPages.push(page - 1, page - 2, page - 1, page, 'disabled');
	}

  res.render('products/index', {
    products: products.slice(start, end),
    pages: pages,
    currentPages: currentPages,
    activePage: page
  });

	// res.render('products/index', {
	// 	products: db.get('products').value().slice(start, end),
	// 	products: db.get('products').drop(start).take(perPage).value()
	// 	pages: pages,
	// 	currentPages: currentPages,
	// 	activePage: page
	// });
};
 
