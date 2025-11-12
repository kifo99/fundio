import express from "express";

const PORT = 8080;
const app = express();


app.get('/', (req,res,next) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`This server is connected on port ${PORT}`);
})


export default app;