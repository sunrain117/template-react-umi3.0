import React, { useEffect } from 'react';
import styles from './index.less';
import { Layout, Menu } from 'antd';
import { connect } from 'dva';
import { history } from 'umi';
const Home = (props: any) => {
  return null;
};

export default connect(({ loading, index }: any) => ({
  menuData: index.menuData || [],
}))(Home);
