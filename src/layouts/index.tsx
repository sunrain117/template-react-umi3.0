import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import styles from './index.less';
import { connect } from 'dva';

const RootLayout = (props: any) => {
  return (
    <ConfigProvider locale={zhCN}>
      <div id="content" className={styles.layoutWrap}>
        {props.children}
      </div>
    </ConfigProvider>
  );
};

export default connect(({ loading, index }: any) => ({}))(RootLayout);
