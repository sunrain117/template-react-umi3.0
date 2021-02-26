import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import styles from './index.less';
import { connect } from 'dva';

const { Header, Footer, Sider, Content } = Layout;

const RootLayout = (props: any) => {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Sider></Sider>
        <Layout>
          <Header></Header>
          <Content>
            <div id="content" className={styles.layoutWrap}>
              {props.children}
            </div>
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default connect(({ loading, index }: any) => ({}))(RootLayout);
