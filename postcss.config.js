const path = require("path");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const plugins = [autoprefixer, tailwindcss(path.resolve(__dirname, "tailwind.config.js"))];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    purgecss({
      content: ["./src/**/*.js", "./public/*.html"]
    })
  );
}

module.exports = { plugins };
