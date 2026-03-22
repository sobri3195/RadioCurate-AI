declare namespace JSX {
  interface IntrinsicAttributes {
    key?: any
  }
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

declare module 'react' {
  export type ReactNode = any
  export type HTMLAttributes<T = any> = any
  export type ButtonHTMLAttributes<T = any> = any
  export type InputHTMLAttributes<T = any> = any
  export type SelectHTMLAttributes<T = any> = any
  export type ReactElement = any
  export type FC<P = any> = (props: P) => any
  export type ChangeEvent<T = any> = { target: T }
  export function createContext<T>(value: T): any
  export function useContext(value: any): any
  export function useMemo<T>(factory: () => T, deps: any[]): T
  export function useState<T>(value: T): [T, (value: T) => void]
  export function forwardRef<T, P = any>(render: any): any
  const React: any
  export default React
}

declare module 'react/jsx-runtime' {
  export const Fragment: any
  export function jsx(type: any, props: any, key?: any): any
  export function jsxs(type: any, props: any, key?: any): any
}

declare module 'react-dom/client' {
  export function createRoot(element: any): { render: (app: any) => void }
}

declare module 'react-router-dom' {
  export const Link: any
  export const NavLink: any
  export const RouterProvider: any
  export function createBrowserRouter(routes: any[]): any
}

declare module 'recharts' {
  export const ResponsiveContainer: any
  export const LineChart: any
  export const Line: any
  export const BarChart: any
  export const Bar: any
  export const Cell: any
  export const CartesianGrid: any
  export const Tooltip: any
  export const Legend: any
  export const XAxis: any
  export const YAxis: any
}

declare module 'lucide-react' {
  export const Activity: any
  export const AlertTriangle: any
  export const ArrowRight: any
  export const Award: any
  export const BadgeHelp: any
  export const Bell: any
  export const BrainCircuit: any
  export const DatabaseZap: any
  export const Filter: any
  export const FolderClock: any
  export const GitCompareArrows: any
  export const Globe2: any
  export const Home: any
  export const LayoutDashboard: any
  export const MapPin: any
  export const Search: any
  export const SearchCheck: any
  export const ShieldCheck: any
  export const Siren: any
  export const Sparkles: any
  export const Stethoscope: any
  export const TrendingDown: any
  export const TrendingUp: any
  export const WandSparkles: any
}
