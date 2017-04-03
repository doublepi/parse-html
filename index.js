module.exports = function(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  var elements = div.firstChild;
  return elements;
}