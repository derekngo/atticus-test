import * as Koa from "koa";
import * as Router from "koa-router";

import * as logger from "koa-logger";
import * as json from "koa-json";

import { getSong } from "./controller";

const app = new Koa();
const router = new Router();

// Hello world
router.get("/", async (ctx, next) => {
  ctx.body = { msg: "Hello world!" };

  await next();
});

router.get("/songs/:id", async (ctx, next) => {
  ctx.body = { msg: "Hello world 2!" };

  const song = await getSong(ctx.params.id)

  ctx.body = song;

  await next();
});

// Middlewares
app.use(json());
app.use(logger());

// Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("server started");
});