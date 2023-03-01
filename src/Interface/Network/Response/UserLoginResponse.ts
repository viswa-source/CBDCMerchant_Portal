export interface Data {
  mobile: string;
  email: string;
}

export interface UserLoginResponse {
  code: string;
  result: string;
  data: Data;
}