import React, { Fragment } from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {

  function handleDelete(id) {
    console.log(id);
    
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <Fragment>
      <ProductList onDelete={handleDelete} products={products.list} />
    </Fragment>
  );
};

// export default Products;
export default connect(({ products, loading }) => ({
  products,
  loading,
}))(Products);