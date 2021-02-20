import React from 'react';
import { connect } from 'dva';

type propsOption = {
  children?: any;
  powerTree?: any;
  action?: string;
  controller?: any;
};

const PowerHoc = (props: propsOption) => {
  const { controller = '', action = '', powerTree = {}, children } = props;
  if (
    powerTree[controller.toLowerCase()] &&
    powerTree[controller.toLowerCase()][action.toLowerCase()]
  ) {
    return children;
  }
  return '';
};

export default connect(({ index }: any) => ({
  powerTree: index.powerTree,
}))(PowerHoc);
