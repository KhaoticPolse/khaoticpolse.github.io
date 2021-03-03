function textElement(name, content) {
  const element = document.createElement(name);
  return element.textContent = content, element;
}

fetch("/quotes.json")
  .then(response => response.json())
  .then(data => {
    const fragment = document.createDocumentFragment();
    for (let obj of data) {
      const container = document.createElement("figure");
      container.appendChild(textElement("blockquote", obj.quote));
      container.appendChild(textElement("cite", obj.from));
      fragment.appendChild(container);
    }
    document.querySelector("main").appendChild(fragment);
  });
