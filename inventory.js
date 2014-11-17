var items = [];
var _ = require('lodash');

exports.list = function(req, res) {
  res.render('index', {items: items});
};

exports.show = function(req, res) {
  var item = _.find(items, {id: req.params.id});
  res.render('show', item);
};

exports.new = function(req, res) {
  res.render('new');
};

exports.create = function(req, res) {
  var item = {
    id: _.uniqueID,
    name: req.body.name,
    description: req.body.description
  };

  items.push(item);
  res.redirect('/'); 
};
