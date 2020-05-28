import React, { Component, Fragment } from 'react';
import { routerRedux } from 'dva/router'
import { connect } from 'dva';

import { message } from 'antd';

import ArticleHeader from '../../components/Article/Header';
import ArticleInfo from '../../components/Article/Info';

let timeout;

class Artical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      info: null,
    };
  }

  titleHandle = ({ target: { value } }) => {
    this.setState({
      title: value,
    })
  }

  onChange = ({ target: { value } }) => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      this.setState({
        info: value,
      })
    }, 300);
  }

  onSubmit = () => {
    const { info, title} = this.state;
    this.props.dispatch({
      type: 'article/submit',
      payload: {
        id: 1,
        info,
        title,
      },
    }).then(() => {
      message.success('发布成功');
      setTimeout(() => {
        this.props.dispatch(routerRedux.push('/article/list'));
      }, 1000);
    });
  }


  render() {
    const { info, title } = this.state;
    return (
      <Fragment>
        <ArticleHeader
          title={title}
          titleHandle={this.titleHandle}
          onSubmit={this.onSubmit}
        />
        <ArticleInfo
          articleInfo={info}
          onChange={this.onChange}
        />
      </Fragment>
    )
  }
}

export default connect(({ article, loading }) => ({
  article,
  loading,
}))(Artical);
