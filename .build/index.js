"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_koa = __toESM(require("koa"));
var import_koa_router = __toESM(require("koa-router"));
var import_koa_logger = __toESM(require("koa-logger"));
var import_koa_json = __toESM(require("koa-json"));
var import_koa_bodyparser = __toESM(require("koa-bodyparser"));
const app = new import_koa.default();
const router = new import_koa_router.default();
router.get("/", async (ctx, next) => {
  ctx.body = { msg: "Hello world!" };
  await next();
});
router.post("/", async (ctx, next) => {
  const data = ctx.request.body;
  ctx.body = data;
  await next();
});
app.use((0, import_koa_json.default)());
app.use((0, import_koa_logger.default)());
app.use((0, import_koa_bodyparser.default)());
app.use(router.routes()).use(router.allowedMethods());
app.listen(10888, () => {
  console.log("Koa Started");
});
//# sourceMappingURL=index.js.map
