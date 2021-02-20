import { createLogger } from 'redux-logger';
import { message } from 'antd';
import * as tools from './utils/tools';

export const dva = {
  config: {
    onAction: tools.isProdEnv() ? [] : createLogger(),
    onError(error: any) {
      // const {data}=error;
      // if(data?.code==-1){
      //   message.error(data.msg || data.errMsg);
      // }else if(data?.code==-3){
      //   message.info(data.msg || data.errMsg);
      // }else{
      //   message.error(error.message || error?.response?.statusText, 3);
      // }
    },
  },
};
