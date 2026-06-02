let currentOutlet = null;

function currentPath() {
  return window.location.pathname || '/';
}

export function BrowserRouter({ children }) {
  return children;
}

export function Routes({ children }) {
  const routeList = Array.isArray(children) ? children : [children];
  const parent = routeList.find(Boolean);
  const nested = Array.isArray(parent?.props?.children) ? parent.props.children : [parent?.props?.children];
  const activeRoute = nested.filter(Boolean).find((route) => route.props.path === currentPath()) || nested.filter(Boolean)[0];
  currentOutlet = activeRoute?.props?.element ?? null;
  return parent?.props?.element ?? currentOutlet;
}

export function Route() {
  return null;
}

export function Outlet() {
  return currentOutlet;
}

export function NavLink({ to, children, className, end, ...props }) {
  const active = end ? currentPath() === to : currentPath().startsWith(to);
  const resolvedClassName = typeof className === 'function' ? className({ isActive: active }) : className;
  return { type: 'a', props: { ...props, href: to, className: resolvedClassName, children } };
}
