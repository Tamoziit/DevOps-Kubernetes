import express from "express";
import os from "os";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    const message = `Hello from ${os.hostname()}`;
    console.log(message);
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});