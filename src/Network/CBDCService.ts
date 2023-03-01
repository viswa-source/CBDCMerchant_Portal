import { TransList_Request } from "../Interface/Network/Request/TranList_Request";
import { UserLoginBody } from "../Interface/Network/Request/UserLoginBody";
import { WalletInfoBody } from "../Interface/Network/Request/WalletInfoBody";
import Apimanager from "./Apimanager";

async function userLogin(userLoginBody: UserLoginBody) {
  return Apimanager.login(userLoginBody);
}
async function walletInfo(WalletInfoBody: WalletInfoBody) {
  return Apimanager.walletInfo(WalletInfoBody);
}
async function getTransactionList(TransactionBody: TransList_Request) {
  return Apimanager.getTransactionList(TransactionBody);
}

export default {
  userLogin,
  getTransactionList,
  walletInfo,
};
