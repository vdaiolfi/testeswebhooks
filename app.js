const fs = require("fs");
const https = require("https");

const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert")
};

https 
    .createServer(options, (req,res) => {

        res.writeHead(200);
        res.end("Hello Wolrd Using HTTPS!\n");
    })
    .listen(3000);

const data = JSON.stringify({
  "test": "event"
})

const options = {
  hostname: "https://testeswebhooks.onrender.com",
  port: 443,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
}

const req = https.request(options)
req.write(data)
req.end()

