const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "public");
const port = Number(process.env.PORT || 4189);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".ico": "image/x-icon"
};

function resolveFile(urlPath) {
  let decoded = decodeURIComponent(urlPath.split("?")[0]);
  if (decoded.endsWith("/")) decoded += "index.html";
  const direct = path.join(root, decoded);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) return direct;
  const index = path.join(root, decoded, "index.html");
  if (fs.existsSync(index)) return index;
  return path.join(root, "index.html");
}

http.createServer((req, res) => {
  const file = resolveFile(req.url || "/");
  const ext = path.extname(file).toLowerCase();
  res.setHeader("Content-Type", types[ext] || "application/octet-stream");
  fs.createReadStream(file).pipe(res);
}).listen(port, "127.0.0.1", () => {
  console.log(`MaisonChic preview: http://127.0.0.1:${port}/`);
});
