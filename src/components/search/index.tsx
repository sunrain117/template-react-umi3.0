import React from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

type BreadcrumbItemOptions = {
  path?: string;
  children?: any;
};

const SearchBox = (props: any) => {
  return (
    <div className={styles.container}>
      {/* <Breadcrumb className={styles.breadCrumb}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>现场拍发拍</Breadcrumb.Item>
        <Breadcrumb.Item>场次列表</Breadcrumb.Item>
      </Breadcrumb> */}
      {props.children}
    </div>
  );
};

SearchBox.BreadcrumbWrapper = (props: any) => {
  return (
    <Breadcrumb className={styles.breadCrumb}>{props.children}</Breadcrumb>
  );
};

SearchBox.BreadcrumbItem = (props: BreadcrumbItemOptions) => {
  const { path } = props;
  return (
    <Breadcrumb.Item>
      {path ? <a href={path}>{props.children}</a> : props.children}
    </Breadcrumb.Item>
  );
};

export default connect(({}: any) => ({}))(SearchBox);
