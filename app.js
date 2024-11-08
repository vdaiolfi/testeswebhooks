const fs = require("fs");
const https = require("https");

const data = JSON.stringify({
  "test": "event"
})

const options = {
  hostname: "https://testeswebhooks.onrender.com",
  port: 3000,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
}
