import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    sortBy: null,
    filterBy: "All"
  };

  handleStockFilter = filter => {
    this.setState({
      filterBy: filter
    });
  };

  handleStockSort = sortBy => {
    this.setState({
      sortBy: sortBy
    });
  };

  // we need to set state to add stocks to myPortfolio in state
  addStockToMyPortfolio = clickedStock => {
    // console.log(this);
    this.setState(prevState => {
      const newStocks = prevState.stocks.map(stock => {
        if (stock.id === clickedStock.id) {
          return { ...stock, inPortolio: true };
        } else {
          return stock;
        }
      });

      return {
        stocks: newStocks
      };
    });
    // console.log(stock);
  };

  removeStockFromMyPortfolio = clickedStock => {
    // find the stock in myPortfolio and remove it
    this.setState(prevState => {
      const newStocks = prevState.stocks.map(stock => {
        if (stock.id === clickedStock.id) {
          return { ...stock, inPortolio: false };
        } else {
          return stock;
        }
      });

      return {
        stocks: newStocks
      };
    });
    console.log(clickedStock);
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(r => r.json())
      .then(stockData => {
        const mappedStocks = stockData.map(stock => {
          return {
            ...stock,
            inPortolio: false
          };
        });
        this.setState({
          stocks: mappedStocks
        });
      });
  }

  renderStocks() {
    const sortedStocks = [...this.state.stocks];
    if (this.state.sortBy === "alpha") {
      sortedStocks.sort((stockA, stockB) => {
        return stockA.name.localeCompare(stockB.name);
      });
    } else if (this.state.sortBy === "price") {
      sortedStocks.sort((stockA, stockB) => {
        return stockA.price - stockB.price;
      });
    }
    let filteredStocks = sortedStocks;
    if (this.state.filterBy !== "All") {
      filteredStocks = sortedStocks.filter(
        stock => stock.type === this.state.filterBy
      );
    }
    return filteredStocks;
  }

  renderPortfolioStocks() {
    return this.state.stocks.filter(stock => stock.inPortolio);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <SearchBar
          handleStockFilter={this.handleStockFilter}
          handleStockSort={this.handleStockSort}
          filterBy={this.state.filterBy}
          sortBy={this.state.sortBy}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.renderStocks()}
              handleStockClick={this.addStockToMyPortfolio}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={this.renderPortfolioStocks()}
              removeStock={this.removeStockFromMyPortfolio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
