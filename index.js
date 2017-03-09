module.exports = function() {
  let div = document.createElement('div');
  div.innerHTML = html;
  let elements = div.firstChild;
  return elements;
}