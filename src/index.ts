import http from "http";
import { getRequestData } from "@/utils/get-request-data";

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  const { pathname, searchParams } = new URL(`http://any-host.io${url}`);

  const queryParams = Object.fromEntries(searchParams.entries());

  const body = await getRequestData(req);

  res.writeHead(200, { "content-type": "application/json" });
  res.end(
    JSON.stringify({
      method,
      pathname,
      queryParams,
      body,
    })
  );
});

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
