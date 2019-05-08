import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  renderStocks() {
    return this.props.stocks.map(stock => (
      <Stock
        stock={stock}
        headerMessage="Hi"
        key={stock.id}
        handleStockClick={this.props.handleStockClick}
      />
    ));
  }

  render() {
    console.log("in StockContainer, state: ", this.props.stocks);
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }
}

export default StockContainer;
