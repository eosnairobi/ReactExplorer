import React, { Component } from "react";

export default class MarketCap extends Component {
  render() {
    return (
      <div
        class="coinmarketcap-currency-widget"
        data-currencyid="1765"
        data-base="USD"
        data-secondary="BTC"
        data-ticker="true"
        data-rank="true"
        data-marketcap="true"
        data-volume="true"
        data-stats="USD"
        data-statsticker="false"
      />
    );
  }
}
