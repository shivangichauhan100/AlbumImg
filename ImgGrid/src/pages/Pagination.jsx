import React from 'react';
import './Pagination.css'

const Pagination = ({ current, total, onPageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(current - 1)} disabled={current === 1}>Previous</button>
      <span> Page {current} of {total} </span>
      <button onClick={() => onPageChange(current + 1)} disabled={current === total}>Next</button>
    </div>
  );
};

export default Pagination;
