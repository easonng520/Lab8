import Koa from "koa";
import Router, { RouterContext } from "koa-router"; import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";

const app: Koa = new Koa();
const router: Router = new Router();

router.get('/', async (ctx: RouterContext, next: any) => {
  ctx.body = { msg: 'Hello world!' };
  await next();
})

router.post('/', async (ctx: RouterContext, next: any) => {
  const data = ctx.request.body;
  ctx.body = data;
  await next();
})


app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(10888, () => {
  console.log("Koa Started");
})