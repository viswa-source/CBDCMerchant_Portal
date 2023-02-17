import axios from "axios";
import { UserLoginBody } from "../Interface/Network/UserLoginBody";
import { APIENDPOINTS } from "./Endpoints";

function login(UserLoginBody: UserLoginBody) {
  return new Promise(async (resolve, reject) => {
    axios
      .post("https://nbuat.kotak.com/tokenmerchant/v1/merchant/wallet/info",{headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }})
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
  // axios.defaults.headers.common["referer"]='https://nbuat.kotak.com'
  // var data = JSON.stringify({
  //   mobile: "919666799064",
  // });

  // var config = {
  //   method: "post",
  //   url: "https://nbuat.kotak.com/tokenmerchant/v1/merchant/wallet/info",
  //   // headers: {
  //   //   'referer': 'https://nbuat.kotak.com',
  //   //   'Content-Type': 'application/json',
  //   //   // 'Cookie': 'KB156994e4=150a75cc3f1ecfe9ef3a9982d9df163fd3f2e275aafade658ee5cc51b5c5871d0b3d8990ba091ca571aea96f162dc34235439ce3e0; cf_use_ob=0'
  //   // },
  //   data: data,
  // };

  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
}

export default {
  login,
};
