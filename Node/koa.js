const koa = require("koa");
const app = new koa();
const port = 3000;

app.use(async ctx => {
    ctx.body = "Hello this is koa.js";
});

app.listen(port, () => {
    console.log(`koa server runnig at http://localhost:${port}`);
});