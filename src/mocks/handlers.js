import { rest } from "msw";

export const handlers = [
  rest.post("/auth/login", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: "login success",
        token: "some token",
      })
    );
  }),

  rest.get("/auth", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
      })
    );
  }),
];
