import { rest } from "msw";
import { REACT_APP_API_URL } from "@env";
import type { RegisterData } from "../types/userTypes";

export const handlers = [
  rest.post(`${REACT_APP_API_URL}/user/register`, async (req, res, ctx) => {
    const user = await req.json<RegisterData>();

    if (!user || user.email === "panchito@gmail.com") {
      return res(ctx.status(500));
    }

    return res(ctx.status(201), ctx.json({ user }));
  }),
];
