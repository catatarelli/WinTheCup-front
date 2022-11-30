import { rest } from "msw";
import { REACT_APP_API_URL } from "@env";
import type {
  RegisterData,
  UserCredentials,
} from "../redux/features/user/userTypes";
import {
  mockGetPredictionByIdResponse,
  mockgetPredictionsResponse,
} from "./predictionsMocks";
import { type CreatePredicitonStructure } from "../redux/features/predictions/predictionsTypes";

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

  rest.get(`${REACT_APP_API_URL}/predictions`, async (req, res, ctx) =>
    res.once(
      ctx.status(404),
      ctx.json({ error: "There was an error on the server" })
    )
  ),

  rest.get(`${REACT_APP_API_URL}/predictions`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockgetPredictionsResponse))
  ),

  rest.get(`${REACT_APP_API_URL}/predictions/:predictionId`, (req, res, ctx) =>
    res.once(
      ctx.status(400),
      ctx.json({ error: "There was an error on the server" })
    )
  ),

  rest.get(`${REACT_APP_API_URL}/predictions/:predictionId`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockGetPredictionByIdResponse))
  ),

  rest.post(`${REACT_APP_API_URL}/predictions/create`, (req, res, ctx) =>
    res.once(
      ctx.status(400),
      ctx.json({ error: "There was an error on the server" })
    )
  ),

  rest.post(
    `${REACT_APP_API_URL}/predictions/create`,
    async (req, res, ctx) => {
      const prediction = await req.json<CreatePredicitonStructure>();
      if (prediction.match === "Argentina vs Poland") {
        return res(ctx.status(409));
      }

      return res(ctx.status(201), ctx.json({ prediction }));
    }
  ),

  rest.delete(
    `${REACT_APP_API_URL}/predictions/delete/:predictionId`,
    (req, res, ctx) =>
      res.once(
        ctx.status(404),
        ctx.json({ error: "There was an error on the server" })
      )
  ),

  rest.delete(
    `${REACT_APP_API_URL}/predictions/delete/:predictionId`,
    (req, res, ctx) => res(ctx.status(201))
  ),
];
