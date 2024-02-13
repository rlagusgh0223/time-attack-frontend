import axios from "axios";
import AuthAPI from "./auth/auth.api";

const coreClient = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
});

class API {
  static auth = new AuthAPI(coreClient);
  static setAccessToken(accessToken: string) {
    coreClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
  static removeAccessToken() {
    coreClient.defaults.headers.common.Authorization = "";
  }
}

export async function getBrands() {
  const url =
    "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app ";
  const options = { method: "GET" };

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

export default API;
