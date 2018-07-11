import React, { Component } from "react";
import Pannel from "./Pannel";
import MarketCap from "./MarketCap";
import Producers from "./Producers";

class Home extends Component {
  render() {
    return (
      <div class="content">
        {/* <!-- START Sub-Navbar with Header only--> */}
        <div class="sub-navbar sub-navbar__header">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="page-header m-t-0">
                  <h3 class="m-t-0">home</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END Sub-Navbar with Header only--> */}

        <div class="container">
          <coingecko-coin-price-marquee-widget
            currency="usd"
            coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
            locale="en"
          />
        </div>
        <br />
        <Pannel />
        <div class="row">
          {/* <!-- START Widget--> */}
          <div class="col-lg-5">
            <MarketCap />
          </div>
          <div class="col-lg-7">
            <Producers />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
