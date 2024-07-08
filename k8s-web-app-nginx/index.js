import express from "express";
import fetch from "node-fetch";
import os from "os";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const message = `Hello from ${os.hostname()}`;
    console.log(message);
    res.send(message);
});

app.get("/nginx", async (req, res) => {
    const url = 'http://nginx'; //connecting/proxying to nginx deployment endpoint by its static name, rather than its dynamic ClusterIP address
    const response = await fetch(url);
    const body = await response.text();
    res.send(body);
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});