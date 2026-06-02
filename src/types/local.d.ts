declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any;
  }
}

declare module '*.css';

declare module 'react' {
  export function StrictMode(props: { children?: any }): any;
  export function useState<T>(initialValue: T): [T, (nextValue: T | ((currentValue: T) => T)) => void];
}

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
  export const Fragment: any;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element): { render(app: any): void };
}

declare module 'react-router-dom' {
  export function BrowserRouter(props: { children?: any }): any;
  export function Routes(props: { children?: any }): any;
  export function Route(props: { path?: string; element?: any; children?: any }): any;
  export function Outlet(): any;
  export function NavLink(props: {
    to: string;
    children?: any;
    className?: string | ((state: { isActive: boolean }) => string);
    end?: boolean;
    [key: string]: any;
  }): any;
}

declare module 'vite' {
  export function defineConfig(config: any): any;
}

declare module '@vitejs/plugin-react' {
  export default function react(): any;
}
