import * as Koa from "koa";
import * as Router from "koa-router";

import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from 'koa-bodyparser';

import { createSong, getSong, updateSong } from "./controller";

const app = new Koa();
const router = new Router();

app.use(bodyParser());

// Hello world
router.get("/", async (ctx, next) => {
  ctx.body = { msg: "Hello world!" };

  await next();
});

// TODO: separate router logic
router.get("/songs/:id", async (ctx, next) => {
  const song = await getSong(ctx.params.id)

  ctx.body = song;

  await next();
});

router.post("/songs", async (ctx, next) => {
  const result = await createSong(ctx.request.body)

  ctx.body = ctx.request.body;

  await next();
});

router.put("/songs/:id", async (ctx, next) => {
  console.log(ctx.params.id);
  console.log(ctx.request.body);

  const result = await updateSong(ctx.params.id, ctx.request.body)

  ctx.body = result;

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