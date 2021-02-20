import axios from 'axios';
import Qs from 'qs';
import { merge } from 'lodash';
import { message } from 'antd';
axios.defaults.withCredentials = true; //携带cookie
type TConfig = {
  method: string;
  url: string;
  params?: any;
  downLoad?: boolean;
  headers?: any;
};

function checkStatus(response: any = {}) {
  const { data } = response;
  if (response.status >= 200 && !isNaN(data?.code) && data?.code !== 0) {
    if (data.code === -3) {
      message.info(data.msg || data.errMsg); //没权限
    } else {
      message.error(data.msg || data.errMsg);
    }
    return false;
  }
  if (response.status >= 200 && response.data) {
    return true;
  }

  const error: any = new Error(response.statusText);
  error.response = response;
  return false;
}

export default function request(config: TConfig, data?: object) {
  let {
    method = 'GET',
    url = '',
    params = {},
    downLoad = false,
    headers = {},
  } = config;
  if (data) {
    params = merge({}, params, data);
  }
  return new Promise((resolve, reject) => {
    if (method === 'POST') {
      axios
        .post(url, params, {
          headers: Object.assign(
            { 'Content-Type': 'application/x-www-form-urlencoded' },
            headers,
          ),
          responseType: downLoad ? 'arraybuffer' : 'json',
          transformRequest: [
            function (data) {
              data = Qs.stringify(data);
              return data;
            },
          ],
        })
        .then(function (response) {
          if (checkStatus(response)) {
            resolve && resolve(response);
          } else {
            reject(response);
          }
        })
        .catch(function (error) {
          reject && reject(error);
        });
    } else {
      axios
        .get(url, { params })
        .then(function (response) {
          if (checkStatus(response)) {
            resolve && resolve(response);
          } else {
            reject(response);
          }
        })
        .catch(function (error) {
          reject && reject(error);
        });
    }
  }).catch((err) => {
    console.error(err);
    return err;
  });
}
/**
 * fetch发送请求formData
 * @param config
 * @param formData
 */
export function fetchRequest(config: TConfig, formData?: any) {
  // Object.keys(config.params).map()
  for (let key in config.params) {
    formData.append(key, config.params[key]);
  }
  return new Promise((resolve, reject) => {
    fetch(config.url, {
      method: config.method,
      body: formData,
      headers: config.headers,
    })
      .then((response: any) => {
        return response.json();
      })
      .then((response: any) => {
        resolve({ data: response }); // 先将结果转换为 JSON 对象
      })
      .catch(function (error) {
        reject && reject(error);
      });
  });
}
