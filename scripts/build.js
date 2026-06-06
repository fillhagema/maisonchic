const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const distDir = path.join(root, "dist");

fs.rmSync(distDir, { recursive: true, force: true });
fs.cpSync(publicDir, distDir, { recursive: true });
console.log("Built static MaisonChic site to dist/");
