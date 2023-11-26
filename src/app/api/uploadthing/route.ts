import { createNextRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "../uploadthing/cors";

export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});
