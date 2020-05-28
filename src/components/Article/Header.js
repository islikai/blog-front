import React, { Component } from 'react';
import { Input, Button } from 'antd';

import style from './index.less';

class ArticleHeader extends Component {
  render() {
    const { titleHandle, onSubmit, title } = this.props;
    return (
      <div className={style.articleTop}>
        <div className={style.leftBox}>
          <Input
            className={style.articleTitle}
            placeholder="请输入文章标题"
            onChange={titleHandle}
            value={title}
          />
        </div>
        <div className={style.rightBox}>
          <Button onClick={onSubmit}>发布文章</Button>
        </div>
      </div>
    );
  }
}

export default ArticleHeader;