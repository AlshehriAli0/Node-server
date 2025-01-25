export const defineRoutesInfo = (routes: Record<string, RouteHandler>) => {
  return Object.entries(routes).map(([routeName, routeHandler]) => {
    if (!routeName.endsWith("/")) {
      routeName += "/";
    }
  });
};
