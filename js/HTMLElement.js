export class HTMLElement {
  constructor(parentNode, tag, className, content = '') {
    this.node = document.createElement(tag);
    this.node.className = className;
    this.node.textContent = content;
    parentNode && (parentNode.append(this.node));
  }

  destroy() {
    this.node.remove();
  }

  setAttributes(attrs) {
    Object.keys(attrs).forEach((attr) => {
      this.node[attr] = attrs[attr];
    });
  }
}