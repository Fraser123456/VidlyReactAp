import React, { Component } from 'react';

//Columns : array
//SortColumn
//onSort

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    this.props.onSort(sortColumn);
  };

  renderSortIcon = (path) => {
    const { sortColumn } = this.props;

    if (path !== sortColumn.path) return null;
    if (sortColumn.order === 'asc') {
      return <i className="fa fa-sort-asc"></i>;
    }

    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              style={{ cursor: 'pointer' }}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.lable}
              {this.renderSortIcon(column.path)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
