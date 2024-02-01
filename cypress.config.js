const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    Token: "Bearer c1f527d7ac31e79bcf39708ddcf0a23c65525806276177759f4b9d515b85206a"
  },
  e2e: {
    baseUrl: "https://gorest.co.in/public/v2/users"
  }
});
