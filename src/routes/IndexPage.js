import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './IndexPage.less';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <Button>Button</Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
