export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface Navigation {
  common: NavigationItem[];
  authenticated: NavigationItem[];
}