const path = require("path");

module.exports = {
  webpack: config => {
    config.module.rules[2].oneOf[5].use[2].options = {};
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  }
};
