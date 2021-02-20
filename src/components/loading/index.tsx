import React from 'react';
import { Spin } from 'antd';
import styles from './index.less';

type propsOptions = {
  loading?: boolean;
  style?: React.CSSProperties;
};

export default (props: propsOptions) => {
  const { loading = false, style = {} } = props;
  return (
    <div
      className={`${styles.blockLoadingBox} ${loading ? '' : styles.disabled}`}
      style={{ ...style }}
    >
      <Spin size="large" />
    </div>
  );
};
