var items = [
    {id: '0', name: 'Couch', description: 'Ikea is comfortable! Although oddly small and modular it may be the most wonderfuul couch of my life. Oh and so modern!'},
    {id: '1', name: 'Laptop', description: 'Beep boop, goes the laptop as I create node awesomness al day long!'},
    {id: '2', name: 'foobar', description: 'this is a test of teh inventory description system, it is only a test.'}];

var _ = require('lodash');

exports.list = function(req, res) {
  res.render('index', {items: items});
};

exports.show = function(req, res) {
  var item = _.find(items, {id: req.params.id});
  res.render('show', item);
}; 
