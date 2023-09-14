import React, { useState } from "react";
const data = [
  "name 1",
  "name 2",
  "name 3",
  "name 4",
  "name 5",
  "name 6",
  "name 7",
  "Name 8",
  "Name 9",
];

const Pagination = () => {
  const [page, setPage] = useState(1);
  const pageContentLimit = 4;

  let lastIndex = page * pageContentLimit;
  let firstIndex = lastIndex - pageContentLimit;
  let currentPageItems = data.slice(firstIndex, lastIndex);
  let totalPages = Math.ceil(data.length / pageContentLimit);
  return (
    <div>
      <div>
        {currentPageItems.map((pro, index) => (
          <div key={index}>{pro}</div>
        ))}
      </div>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>
          {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
