import { rest } from "msw";
import { REACT_APP_API_URL } from "@env";
import type { RegisterData } from "../types/userTypes";

const url = REACT_APP_API_URL;

export const handlers = [
  rest.post(`${url}/user/register`, async (req, res, ctx) => {
    const user = await req.json<RegisterData>();
    if (!user) {
      return res(ctx.status(500));
    }

    return res(ctx.status(201), ctx.json({ user }));
  }),
];
