import { rest } from "msw";
import { REACT_APP_API_URL } from "@env";
import type {
  RegisterData,
  UserCredentials,
} from "../redux/features/user/userTypes";

export const handlers = [
  rest.post(`${REACT_APP_API_URL}/user/register`, async (req, res, ctx) => {
    const user = await req.json<RegisterData>();

    if (!user || user.email === "panchito@gmail.com") {
      return res(ctx.status(409));
    }

    return res(ctx.status(201), ctx.json({ user }));
  }),

  rest.post(`${REACT_APP_API_URL}/user/login`, async (req, res, ctx) => {
    const user = await req.json<UserCredentials>();
    if (user.password === "testPassword") {
      return res(ctx.status(401));
    }

    return res(ctx.status(200), ctx.json({ token: "token" }));
  }),
];
