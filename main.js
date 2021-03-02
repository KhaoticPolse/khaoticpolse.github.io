const parentElement = document.querySelector("main");
const fragment = document.createDocumentFragment();

function textElement(name, content) {
  const element = document.createElement(name);
  element.textContent = content;
  return element;
}

fetch("quotes.json")
  .then(response => response.json())
  .then(data => {
    for (let obj of data) {
      const figure = document.createElement("figure");
      figure.appendChild(textElement("blockquote", obj.quote));
      figure.appendChild(textElement("cite", obj.from));
      fragment.appendChild(figure);
    }
    parentElement.appendChild(fragment);
  });