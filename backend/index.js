import express from 'express';
import botsRouter from "./routes/bots.router.js";
import serversRouter from "./routes/servers.router.js";
import sitesRouter from "./routes/sites.router.js";
import authRouter from "./routes/auth.router.js";

const app = express();

app.use(express.json());

app.use('/bots', botsRouter);
app.use('/servers', serversRouter);
app.use('/sites', sitesRouter);
app.use('/login', authRouter);

app.get("/ping", (req, res) => {
    res.json({message:"pong"}).status(200);
});

app.listen(5000, () =>{console.log("Started. Port 5000")});