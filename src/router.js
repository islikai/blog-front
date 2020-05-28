import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './routes/Home';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

import ArticleEdit from './routes/Article/edit';
import ArticleList from './routes/Article/list';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" component={IndexPage} />
        <Route path="/products" component={Products} />
        <Route path="/article/edit" component={ArticleEdit} />
        <Route path="/article/list" component={ArticleList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
