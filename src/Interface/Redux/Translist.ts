export interface TransData {
  txnid: string;
  rrn: string;
  type: string;
  datetime: string;
  amount: string;
  debitvpa: string;
  creditaccount: string;
  creditvpa: string;
  beneficiaryname: string;
  remittername: string;
  remarks: string;
  initmode: string;
  rc: string;
  payeemcc: string;
  payermcc: string;
  debitaccount: string;
}

export interface TransList {
  code: string;
  result: string;
  data: TransData[];
}