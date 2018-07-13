import React, { Component } from "react";
import Pannel from "./Pannel";
import MarketCap from "./MarketCap";
import Producers from "./Producers";
import SubNavBar from "../../common/SubNavBar";
import Transactions from "./Transactions";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <div class="sub-navbar sub-navbar__header">
          <div class="container" style={{ padding: "0" }}>
            <coingecko-coin-price-marquee-widget
              currency="usd"
              coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
              locale="en"
            />
          </div>
        </div>
        <div class="sub-navbar sub-navbar__header-breadcrumbs">
          <div class="container">
            <coingecko-coin-price-marquee-widget
              currency="usd"
              coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
              locale="en"
            />
          </div>
        </div>
        <div class="container">
          <div className="row">
            <div className="col-lg-12">
              <div class="row m-t-1">
                {/* <!-- START Revenue --> */}
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <div class="panel panel-default b-a-0 bg-gray-dark">
                    <div class="panel-heading">Blocks </div>
                    <div class="panel-body">
                      <h2 class="m-t-0 f-w-300">IDR 10,215,845</h2>
                      <i class="fa fa-fw fa-caret-up text-success" />{" "}
                      <span class="text-success m-r-1">33,87%</span>{" "}
                      <small>from last week</small>
                    </div>
                  </div>
                </div>
                {/* <!-- END Revenue --> */}

                {/* <!-- START Total Item Sold --> */}
                <div class="col-lg-4 col-md-4  col-sm-4">
                  <div class="panel panel-default b-a-0 bg-gray-dark">
                    <div class="panel-heading">Transactions </div>
                    <div class="panel-body">
                      <h2 class="m-t-0 f-w-300">128,980</h2>
                      <i class="fa fa-fw fa-caret-down text-danger" />{" "}
                      <span class="text-danger m-r-1">33,87%</span>{" "}
                      <small>from last week</small>
                    </div>
                  </div>
                </div>
                {/* <!-- END Total Item Sold --> */}

                {/* <!-- START Total Visitor --> */}
                <div class="col-lg-4 col-md-4  col-sm-4">
                  <div class="panel panel-default b-a-0 bg-gray-dark">
                    <div class="panel-heading">Accounts </div>
                    <div class="panel-body">
                      <h2 class="m-t-0 f-w-300">2,905,895</h2>
                      <i class="fa fa-fw fa-caret-up text-success" />{" "}
                      <span class="text-success m-r-1">92,01%</span>{" "}
                      <small>from last week</small>
                    </div>
                  </div>
                </div>
                {/* <!-- END Total Visitor --> */}
              </div>
            </div>
          </div>
          <div class="row">
            <Pannel />
            <div className="row">
              {/* <!-- START Widget--> */}
              <div className="col-lg-6">
                <MarketCap />
              </div>
            </div>
            <div className="row" style={{ paddingTop: "3rem" }}>
              <div className="col-lg-12">
                <Producers />
                <Transactions />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
