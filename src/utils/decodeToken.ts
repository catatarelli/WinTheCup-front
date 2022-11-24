import jwtDecode from "jwt-decode";
import { type JwtCustomPayload } from "../types/types.js";

const decodeToken = (token: string): JwtCustomPayload => {
  const jwtPayload: JwtCustomPayload = jwtDecode(token);

  return {
    id: jwtPayload.id,
    username: jwtPayload.username,
  };
};

export default decodeToken;
