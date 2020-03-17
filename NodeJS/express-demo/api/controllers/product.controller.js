var Product = require('../../models/product.model');

module.exports.index = async function(req, res) {
  var products = await Product.find();
  res.json(products);
};
 
module.exports.create = async function(req, res) {
  var products = await Product.create(req.body);
  res.json(products);
};

module.exports.get = async function(req, res) {
  var productId = req.params.id;
  var product = await Product.findById(productId);
  res.json(product);
};

module.exports.update = async function(req, res) {
  var productId = req.params.id;
  var product = await Product.findById(productId);
  product = await Product.create(req.body);
  res.json(product);
};

module.exports.delete = async function(req, res) {
  var productId = req.params.id;
  var product = await Product.deleteOne({_id: productId});  
  res.json(product);
};