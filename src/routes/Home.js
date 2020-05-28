import React from 'react';
import { connect } from 'dva';
import { Skeleton } from 'antd';


function IndexPage() {
  return (
    <div>
      <Skeleton active />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
