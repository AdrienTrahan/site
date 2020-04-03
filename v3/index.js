const button = document.querySelector('#mecontacter');
const tooltip = document.querySelector('#contactTooltip');
let popperInstance = null;
function create() {
  popperInstance = Popper.createPopper(button, tooltip, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });
}
function destroy() {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
}

function show() {
  tooltip.setAttribute('data-show', '');
  create();
}

function hide(e) {
  if (!isDescendant(tooltip, e.target) && tooltip != e.target && e.target.className != "choices"){
    tooltip.removeAttribute('data-show');
    destroy();
  }
}

function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
document.body.onclick = hide;
button.onclick = show;
document.getElementById("downloadresume").onclick = function () {
  document.getElementById("download").src = "https://docs.google.com/document/d/1ikCUkn8H3xxmR-DWi1jGIEY5zX7n2WOhF_94s_lZFlo/export?format=pdf";
}

document.getElementById("lookproject").onclick = function () {
  window.location = "projects/index.html";
}
