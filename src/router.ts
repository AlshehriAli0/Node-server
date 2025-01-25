import { RouteHandler } from "./types/route-handler";

const routes: Record<string, RouteHandler> = {
  "get::/": () => console.log("Get on /"),
  "post::/:id": (params) => console.log(`Post on /${params.id}`),
};
