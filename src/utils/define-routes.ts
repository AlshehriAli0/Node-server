import { RouteHandler } from "@/types/route-handler";
import { createPathRegex } from "@/utils/regex-path";

export const defineRoutesInfo = (routes: Record<string, RouteHandler>) => {
  return Object.entries(routes).map(([routeName, routeHandler]) => {
    // should end with / to be consistent
    if (!routeName.endsWith("/")) {
      routeName += "/";
    }

    // should use the convention which is :: for ex. get::/home
    if (!routeName.includes("::")) {
      throw new Error("Invalid route definition");
    }

    const [method, path] = routeName.split("::");

    // should always start with /
    if (!/^\//.test(path)) {
      throw new Error("Invalid path definition");
    }

    const pathRegex = createPathRegex(path);

    return {
      method,
      path,
      pathRegex,
      handler: routeHandler,
    };
  });
};
