import { __resetHooks, __setRerender } from 'react';

function flatten(value) {
  if (value === undefined || value === null || value === false) return [];
  return Array.isArray(value) ? value.flatMap(flatten) : [value];
}

function renderNode(vnode) {
  if (vnode === null || vnode === undefined || vnode === false) return document.createTextNode('');
  if (typeof vnode === 'string' || typeof vnode === 'number') return document.createTextNode(String(vnode));
  if (Array.isArray(vnode)) {
    const fragment = document.createDocumentFragment();
    flatten(vnode).forEach((child) => fragment.appendChild(renderNode(child)));
    return fragment;
  }
  if (typeof vnode.type === 'function') return renderNode(vnode.type(vnode.props || {}));

  const element = document.createElement(vnode.type);
  Object.entries(vnode.props || {}).forEach(([name, value]) => {
    if (name === 'children' || name === 'key' || value === null || value === undefined || value === false) return;
    if (name === 'className') element.setAttribute('class', value);
    else if (name === 'htmlFor') element.setAttribute('for', value);
    else if (name === 'value') element.value = value;
    else if (name === 'checked') element.checked = Boolean(value);
    else if (name.startsWith('on') && typeof value === 'function') element.addEventListener(name.slice(2).toLowerCase(), value);
    else element.setAttribute(name, value === true ? '' : String(value));
  });
  flatten(vnode.props?.children).forEach((child) => element.appendChild(renderNode(child)));
  return element;
}

export function createRoot(container) {
  let app = null;
  const render = (nextApp = app) => {
    app = nextApp;
    __resetHooks();
    container.textContent = '';
    container.appendChild(renderNode(app));
  };
  __setRerender(() => render());
  return { render };
}
