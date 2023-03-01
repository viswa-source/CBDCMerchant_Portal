import axios from "axios";
import { TransList_Request } from "../Interface/Network/Request/TranList_Request";
import { UserLoginBody } from "../Interface/Network/Request/UserLoginBody";
import { WalletInfoBody } from "../Interface/Network/Request/WalletInfoBody";
import { TransList_Response } from "../Interface/Network/Response/TranList_Response";
import { UserLoginResponse } from "../Interface/Network/Response/UserLoginResponse";
import { WalletInfoResponse } from "../Interface/Network/Response/WalletInfoResponse";
import { APIENDPOINTS } from "./Endpoints";
// import fs from 'fs'

async function login(UserLoginBody: UserLoginBody) {
  const { data } = await axios.post<UserLoginResponse>(
    process.env.REACT_APP_BASE_URL + APIENDPOINTS.USER_LOGIN,
    UserLoginBody
  );
  return data;
}
async function walletInfo(WalletInfoBody: WalletInfoBody) {
  const { data } = await axios.post<WalletInfoResponse>(
    process.env.REACT_APP_BASE_URL + APIENDPOINTS.WALLET_INFO,
    WalletInfoBody
  );
  return data;
}
async function getTransactionList(TransactionBody: TransList_Request) {
  const { data } = await axios.post<TransList_Response>(
    process.env.REACT_APP_BASE_URL + APIENDPOINTS.MERCHANT_TRAN_HISTORY,
    TransactionBody
  );
  return data;
}
export default {
  login,
  walletInfo,
  getTransactionList,
};
