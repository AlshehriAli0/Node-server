import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;

  const { pathname, searchParams } = new URL(`http://any-host.io${url}`);

  const queryParams = Object.fromEntries(searchParams.entries());

  let requestData;
  // push data as its comming
  req.on("data", (chunk) => requestData.push(chunk));

  // on req end concat the data and parse
  req.on("end", () => {
    const bodyString = Buffer.concat(requestData).toString();
    const body = JSON.parse(bodyString);

    // return response
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ method, pathname, queryParams, body }));
  });
});

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
