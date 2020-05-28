import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ArticleList = ({ onDelete, products }) => {
  const columns = [{
    title: 'title',
    dataIndex: 'title',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  );
};

ArticleList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

export default ArticleList;