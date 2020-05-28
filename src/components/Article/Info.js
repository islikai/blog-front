import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Row, Col, Input, Tooltip } from 'antd';

import style from './index.less';

const { TextArea } = Input;

const exampleInfo = `
标题：# 一级标题
无序列表：- 文本一
有序列表：1. 文本一
任务列表：- [x] 文本一
链接：[链接注释](链接地址)
图片：![图片的标注](图片链接地址)
引用：> 应用内容
`

class ArticleInfo extends Component {
  state = {
  }

  render() {
    const { articleInfo } = this.props;
    return (
      <Row className={style.articleInfoWarp}>
        <Col
          className={style.infoLeft}
          xs={24} sm={24} md={12} lg={12} xl={12}>
          <TextArea
            className={style.articleTextArea}
            onChange={this.props.onChange}
          />
          <div className={style.leftFooter}>
            <Tooltip placement="topLeft" title={exampleInfo}>
              <a>markdown 语法参考</a>
            </Tooltip>
          </div>
        </Col>
        <Col
          className={style.infoRight}
          xs={24} sm={24} md={12} lg={12} xl={12}
        >
          <ReactMarkdown
            escapeHtml={false}
            source={articleInfo}
          />
        </Col>
      </Row>
    );
  }
}

export default ArticleInfo;