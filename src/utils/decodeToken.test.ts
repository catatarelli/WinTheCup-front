import type { JwtCustomPayload } from "../types/types";
import decodeToken from "./decodeToken";

describe("Given a decodeToken funcion", () => {
  describe("When it's called with a token", () => {
    test("Then it shoudl return an object", () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2U3MTBiM2I4MWFkN2E1OWNlNDNkNSIsInVzZXJuYW1lIjoiY2F0YXRhcmVsbGkiLCJpYXQiOjE2NjkyOTczNzQsImV4cCI6MTY2OTQ3MDE3NH0.0fXvVrEnfQ1v2mllcdL9aKHCBBKj5s-VWjFKuA9-eQM";

      const jwtPayload: JwtCustomPayload = decodeToken(token);

      const expectedId = "637e710b3b81ad7a59ce43d5";
      const expectedUsername = "catatarelli";

      expect(jwtPayload.id).toStrictEqual(expectedId);
      expect(jwtPayload.username).toStrictEqual(expectedUsername);
    });
  });
});
