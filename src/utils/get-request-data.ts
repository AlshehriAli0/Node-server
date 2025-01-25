import type { IncomingMessage } from "http";

export const getRequestData = (req: IncomingMessage) => {
  return new Promise(async (reject, resolve) => {
    try {
      let requestData;
      for await (const data of req) {
        requestData.push(data);
      }

      if (!requestData.length()) return resolve({});

      const body = Buffer.concat(requestData).toString();

      resolve(JSON.parse(body));
    } catch (err) {
      reject(err);
    }
  });
};
