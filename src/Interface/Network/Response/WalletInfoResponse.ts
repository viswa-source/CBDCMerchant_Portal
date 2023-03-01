export interface WalletInfoResponse {
  code: string;
  result: string;
  data: {
    id: string;
    vpa: string;
    mobilenumber: string;
    walletAddress: string;
    merchantId: string;
    merchantName: string;
    status: number;
    mcccode: string;
    createdDate: string;
  }
}