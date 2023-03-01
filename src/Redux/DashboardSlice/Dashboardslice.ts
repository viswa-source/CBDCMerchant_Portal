import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransList_Request } from "../../Interface/Network/Request/TranList_Request";
import { WalletInfoBody } from "../../Interface/Network/Request/WalletInfoBody";
import { WalletInfoResponse } from "../../Interface/Network/Response/WalletInfoResponse";
import { WalletInfo } from "../../Interface/Redux/WalletInfo";
import CBDCService from "../../Network/CBDCService";
interface DasboardState {
  WalletInfo: WalletInfo | null;
}

const initialState: DasboardState = {
  WalletInfo: null,
};
export const getWalletInfo = createAsyncThunk(
  "user/fetchWalletInfo",
  async (walletInfoBody: WalletInfoBody) => {
    const walletInfoResponse = await CBDCService.walletInfo(walletInfoBody);
    return walletInfoResponse;
  }
);
export const getTransactionList = createAsyncThunk(
  "user/fetchTransactionList",
  async (TransactionBody: TransList_Request) => {
    const TransactionResponse = await CBDCService.getTransactionList(
      TransactionBody
    );
    console.log(TransactionResponse)
    return TransactionResponse;
  }
);
export const dashbaordSlice = createSlice({
  name: "DashbaordState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getWalletInfo.fulfilled,
      (state, action: PayloadAction<WalletInfoResponse | any>) => {
        const ApiResponse: WalletInfoResponse = action.payload;
        return { ...state, WalletInfo: ApiResponse.data };
      }
    );
  },
});

export const {} = dashbaordSlice.actions;

export default dashbaordSlice.reducer;
