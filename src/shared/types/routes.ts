export interface Route {
  name: string;
  path: string;
  requiresAuth?: boolean;
  component: React.ComponentType;
}
