import http, { type RequestListener } from "node:http";
import { Post } from "#models";
import "#db";

const createResponse = (
  res: http.ServerResponse,
  statusCode: number,
  message: unknown
) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  return res.end(
    typeof message === "string"
      ? JSON.stringify({ message })
      : JSON.stringify(message)
  );
};

const getJsonBody = (req: http.IncomingMessage): Promise<any> =>
  new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });

const requestHandler: RequestListener = async (req, res) => {
  const singlePostRegex = /^\/posts\/[0-9a-zA-Z]+$/;
  const { method, url } = req;
  if (url === "/posts") {
    if (method === "GET") {
      const posts = await Post.find();
      return createResponse(
        res,
        200,
        posts.length > 0 ? posts : { message: "No posts found" }
      );
    }
    if (method === "POST") {
      try {
        const parsedBody = await getJsonBody(req);

        const newPost = await Post.create({
          ...parsedBody,
        });

        return createResponse(res, 201, newPost);
      } catch (err) {
        return createResponse(res, 400, "Invalid JSON body");
      }
    }
    return createResponse(res, 405, "Method Not Allowed");
  }
  if (singlePostRegex.test(url!)) {
    const id = url!.split("/")[2];
    if (method === "GET") {
      const post = await Post.findById(id);
      if (!post) {
        return createResponse(res, 404, "Post not found");
      }
      return createResponse(res, 200, post);
    }
    if (method === "PUT") {
      try {
        const parsedBody = await getJsonBody(req);

        const updatedPost = await Post.findByIdAndUpdate(id, parsedBody, {
          new: true,
        });

        if (!updatedPost) {
          return createResponse(res, 404, "Post not found");
        }

        return createResponse(res, 200, updatedPost);
      } catch {
        return createResponse(res, 400, "Invalid JSON body");
      }
    }
    if (method === "DELETE") {
      const deletedPost = await Post.findByIdAndDelete(id);

      if (!deletedPost) {
        return createResponse(res, 404, "Post not found");
      }
      res.writeHead(204);
      return res.end();
    }
    return createResponse(res, 405, "Method Not Allowed");
  }
  return createResponse(res, 404, "Not Found");
};

const server = http.createServer(requestHandler);

const port = 3000;
server.listen(port, () =>
  console.log(`Server running at <http://localhost>:${port}/`)
);
