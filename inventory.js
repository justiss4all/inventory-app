var items = [
    {name: 'Couch', description: 'Ikea is comfortable! Although oddly small and modular it may be the most wonderfuul couch of my life. Oh and so modern!'},
    {name: 'Laptop', description: 'Beep boop, goes the laptop as I create node awesomness al day long!'},
    {name: 'foobar', description: 'this is a test of teh inventory description system, it is only a test.'}];

exports.list = function(req, res) {
  res.render('index', {items: items});
};
