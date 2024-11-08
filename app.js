const fs = require("fs");
const https = require("https");
const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

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
