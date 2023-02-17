import { UserLoginBody } from "../Interface/Network/UserLoginBody";
import Apimanager from "./Apimanager";

async function userLogin(userLoginBody: UserLoginBody) {
  return Apimanager.login(userLoginBody);
}

export default {
  userLogin,
};
