import React, { Fragment } from 'react';
import { connect } from 'dva';
import ArticleList from '../../components/Article/List';

const Products = ({ dispatch, article }) => {

  function handleDelete(id) {
    console.log(id);

    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <Fragment>
      <ArticleList onDelete={handleDelete} products={article.list} />
    </Fragment>
  );
};

// export default Products;
export default connect(({ article, loading }) => ({
  article,
  loading,
}))(Products);