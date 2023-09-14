import React, { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState([]);
  const [categrey, setCategrey] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const url = "http://localhost:3000/product";

  const getData = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => setData(ele));
  };
  useEffect(() => getData, []);
  console.log(data);
  const filterData =
    categrey === "all" ? data : data.filter((ele) => ele.cate === categrey);

  const sortedProducts = [...filterData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price.localeCompare(b.price);
    } else {
      return b.price.localeCompare(a.price);
    }
  });
  console.log(categrey);
  return (
    // Api add, post,del
    <div>
      <select onChange={(e) => setCategrey(e.target.value)}>
        <option value="all">All</option>
        <option value="Sony">Sony</option>
        <option value="Phone">Phone</option>
        <option value="Camera">Camera</option>
      </select>
      {/* //Filter , Asc & Dec */}
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Asc</option>
        <option value="dsc">Dsc</option>
      </select>

      <ul>
        {sortedProducts.map((product, index) => (
          <>
            <li key={index}>
              {product.name} - {product.cate} - {product.price}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Product;
