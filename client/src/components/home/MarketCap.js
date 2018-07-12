import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./MarketCap.css";
import isEmpty from "../../validation/is-empty";

import { getCoinMarketCap } from "../../actions/coinmarketcapAction";
class MarketCap extends Component {
  constructor() {
    super();
    this.getCoin = this.getCoin.bind(this);
  }
  componentDidMount() {
    this.props.getCoinMarketCap();
  }

  getCoin(coin, loading) {
    let coincontent;

    if (isEmpty(coin) || loading) {
      coincontent = "test";
    } else {
      if (Object.keys(coin).length > 0) {
        coincontent = Object.entries(coin).map(e => {
          console.log(e);
        });
      }
    }
    return coincontent;
  }

  render() {
    const { coin, loading } = this.props.coin;
    const current = this.getCoin(coin, loading);
    console.log(current);
    return (
      <div>
        {current}
        <div
          class="coinmarketcap-currency-widget"
          data-currencyid="1765"
          data-base="EOS"
          data-secondary="USD"
          data-ticker="true"
          data-rank="true"
          data-marketcap="true"
          data-volume="true"
          data-stats="USD"
          data-statsticker="true"
        />
      </div>
    );
  }
}
MarketCap.propTypes = {
  getCoinMarketCap: PropTypes.func.isRequired,
  coin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  coin: state.coin
});

export default connect(
  mapStateToProps,
  { getCoinMarketCap }
)(MarketCap);
