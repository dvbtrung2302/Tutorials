var Transfer = require('../models/transfer.model');

module.exports.create = function(req, res, next) {
	res.render('transfer/create', {
		csrfToken: req.csrfToken()
	});
};

module.exports.postCreate = function(req, res, next) {
	var data = {
		amount: parseInt(req.body.amount),
		accountId: req.body.accountId,
		userId: req.signedCookies.userId
	};
  var transfer = new Transfer(data);
  transfer.save();
	res.redirect('/transfer/create');
};