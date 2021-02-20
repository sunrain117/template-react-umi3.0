/**
 * Modal弹层样式
 */
import React from 'react';
import { Modal, Button } from 'antd';
import styles from './index.less';

interface myModalProps {
  className?: string;
  visible?: boolean;
  title?: React.ReactNode;
  width?: number;
  okText?: string;
  cancelText?: string;
  onOk?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  children?: any;
  destroyOnClose?: boolean;
  okBtnLoading?: boolean;
  okBtnDisable?: boolean;
}

export default function MyModal(props: myModalProps) {
  const {
    visible,
    onCancel,
    onOk,
    width = 520,
    cancelText,
    okText,
    destroyOnClose,
    okBtnLoading = false,
    okBtnDisable = false,
  } = props;

  const renderTitle = () => {
    return <div style={{ textAlign: 'center' }}>{props.title || '标题'}</div>;
  };

  const renderFooter = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          style={{ minWidth: '120px', height: '40px', marginRight: '10px' }}
          onClick={() => {
            typeof onCancel === 'function' && onCancel();
          }}
        >
          {cancelText || '取消'}
        </Button>
        <Button
          style={{ minWidth: '120px', height: '40px', marginLeft: 0 }}
          type="primary"
          loading={okBtnLoading}
          onClick={() => {
            typeof onOk === 'function' && onOk();
          }}
          disabled={okBtnDisable}
        >
          {okText || '确定'}
        </Button>
      </div>
    );
  };

  return (
    <Modal
      className={`${styles.selfModal}`}
      closable={false}
      title={renderTitle()}
      visible={visible}
      footer={renderFooter()}
      width={width}
      destroyOnClose={destroyOnClose || false}
    >
      {props.children}
    </Modal>
  );
}
