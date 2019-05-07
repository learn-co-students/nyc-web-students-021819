import React from "react";

const Stock = ({ stock, handleStockClick, headerMessage }) => (
  <div>
    <div
      className="card"
      onClick={() => {
        if (handleStockClick) {
          handleStockClick(stock);
        }
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.price}</p>
      </div>
    </div>
  </div>
);

export default Stock;
