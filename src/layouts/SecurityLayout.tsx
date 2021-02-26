import React from 'react';
import {Redirect,connect} from 'umi';

import type { ConnectProps } from 'umi';

type SecurityLayoutProps = {
  loading?: boolean;
} & ConnectProps;

type SecurityLayoutState = {
  isReady: boolean;
}

class SecurityLayout extends React.Component<SecurityLayoutProps, SecurityLayoutState>{
  state: SecurityLayoutState = {
    isReady: false
  }

  componentDidMount() {
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;
    const { loading, children } = this.props;
    return children;
  }
}

export default connect(({loading}:any)=>(
{
  loading
}
))(SecurityLayout);