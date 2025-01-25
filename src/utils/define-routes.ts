import { RouteHandler } from "@/types/route-handler";

export const defineRoutesInfo = (routes: Record<string, RouteHandler>) => {
  return Object.entries(routes).map(([routeName, routeHandler]) => {
    // should end with / to be consist
    if (!routeName.endsWith("/")) {
      routeName += "/";
    }

    if (!routeName.includes("::")) {
      throw new Error("Invalid route definition");
    }

    const [method, path] = routeName.split("::");

    if (!/^\//.test(path)) {
      throw new Error("Invalid path definition");
    }
  });
};
