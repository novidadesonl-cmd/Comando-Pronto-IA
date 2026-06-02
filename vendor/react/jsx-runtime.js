export function jsx(type, props, key) {
  return { type, key, props: props || {} };
}

export function jsxs(type, props, key) {
  return jsx(type, props, key);
}

export const Fragment = ({ children }) => children;
