import React from 'react';
import { Modal, Button } from 'antd';
import styles from './index.less';
import loading from '@/pages/trade/components/loading';

interface myModalProps {
  className?: string;
  visible?: boolean;
  title?: React.ReactNode;
  width?: number;
  okText?: string;
  hideOk?: boolean;
  hideCancel?: boolean;
  cancelText?: string;
  onOk?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  children?: any;
  destroyOnClose?: boolean;
  loading?: boolean;
}

export default (props: myModalProps) => {
  const {
    title,
    width = 520,
    okText,
    onOk,
    onCancel,
    visible,
    hideOk = true,
    hideCancel = true,
    cancelText,
    loading,
  } = props;

  const renderTitle = () => {
    return <div className={`${styles.titleText}`}>{title || '提示'}</div>;
  };
  const renderFooter = () => {
    return (
      <div className={styles.btnBox}>
        {hideCancel && (
          <Button
            className={`${styles.btn}`}
            onClick={() => {
              typeof onCancel === 'function' && onCancel();
            }}
          >
            {cancelText || '取消'}
          </Button>
        )}
        {hideOk && (
          <Button
            loading={loading}
            type="primary"
            className={`${styles.btn}`}
            onClick={() => {
              typeof onOk === 'function' && onOk();
            }}
          >
            {okText || '确定'}
          </Button>
        )}
      </div>
    );
  };

  return (
    <Modal
      width={width}
      closable={false}
      className={`${styles.selfConfim}`}
      visible={visible}
      title={renderTitle()}
      footer={renderFooter()}
      destroyOnClose={true}
    >
      {props.children}
    </Modal>
  );
};
