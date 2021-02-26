import React from 'react';
import {Layout} from 'antd';
import styles from './index.less';

const {Header,Sider,Footer,Content}=Layout;

const BaseLayout:React.FC<any>=(props)=>{
  const {children}=props;
  return <Layout className={styles.layoutWrapper}>
    <Sider className={styles.sideWrapper} width="240">
      <div className={styles.logWrapper}>
        Template 系统
      </div>
    </Sider>
    <Layout>
      <Header>
        <div></div>
        <div></div>
      </Header>
      <Content>
        
      </Content>
    </Layout>
  </Layout>
}

export default BaseLayout;