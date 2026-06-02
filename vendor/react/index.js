let hooks = [];
let hookIndex = 0;
let rerender = () => {};

export function __setRerender(callback) {
  rerender = callback;
}

export function __resetHooks() {
  hookIndex = 0;
}

export function useState(initialValue) {
  const currentIndex = hookIndex;
  if (hooks[currentIndex] === undefined) hooks[currentIndex] = initialValue;
  const setValue = (nextValue) => {
    hooks[currentIndex] = typeof nextValue === 'function' ? nextValue(hooks[currentIndex]) : nextValue;
    rerender();
  };
  hookIndex += 1;
  return [hooks[currentIndex], setValue];
}

export function StrictMode({ children }) {
  return Array.isArray(children) ? children[0] : children;
}

export function createElement(type, props, ...children) {
  return { type, props: { ...(props || {}), children } };
}

export default { createElement, StrictMode, useState };
