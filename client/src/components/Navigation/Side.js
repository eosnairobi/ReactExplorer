import React, { Component } from "react";

export default class Side extends Component {
  render() {
    return (
      <aside class="navbar-default sidebar">
        <div class="sidebar-overlay-head">
          EOS | BlockExplorerr
          <a href="#" class="sidebar-switch action-sidebar-close">
            <i class="fas fa-times" />
          </a>
        </div>

        <div class="sidebar-content">
          <div class="sidebar-default-visible text-muted small text-uppercase sidebar-section p-y-2">
            <strong>Navigation</strong>
          </div>

          {/* <!-- START Tree Sidebar Common --> */}
          <ul class="side-menu">
            <li class="Dashboards">
              <a href="#" title="Dashboards">
                <i class="fas fa-tachometer-alt" />{" "}
                <span class="nav-label">Dashboard</span>
              </a>
              <ul>
                <li class="active">
                  <a href="../start/home.html">
                    <span class="nav-label">Home</span>
                  </a>
                </li>
                <li class="">
                  <a href="../start/producers.html">
                    <span class="nav-label">Producers</span>
                  </a>
                </li>
                <li class="">
                  <a href="../start/blocks.html">
                    <span class="nav-label">Blocks</span>
                  </a>
                </li>
                <li class="">
                  <a href="../start/accounts.html">
                    <span class="nav-label">Top Accounts</span>
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" title="Dashboards">
                <i class="far fa-chart-bar active" />{" "}
                <span class="nav-label">Charts & Graphs</span>
                {/* <!-- <span class="pull-right label label-primary label-outline text-uppercase">New</span> --> */}
              </a>
              <ul>
                <li class="">
                  <a href="../charts/prices.html">
                    <span class="nav-label">Token Price </span>
                  </a>
                </li>
                <li class="">
                  <a href="../charts/marketcap.html">
                    <span class="nav-label">Market Capitalization</span>
                  </a>
                </li>
                <li class="">
                  <a href="../charts/prices.html">
                    <span class="nav-label">Transactions Volume</span>
                  </a>
                </li>
                <li class="">
                  <a href="../charts/prices.html">
                    <span class="nav-label">Transactions Fees</span>
                  </a>
                </li>
                <li class="">
                  <a href="../charts/suply.html">
                    <span class="nav-label">Total Supply Chart</span>
                  </a>
                </li>
                <li class="">
                  <a href="../charts/prices.html">
                    <span class="nav-label">Accounts growth rate</span>
                  </a>
                </li>
                <li class="">
                  <a href="../charts/marketcap.html">
                    <span class="nav-label">Top DEX Chart</span>
                  </a>
                </li>
                <li class="">
                  <a href="../charts/marketcap.html">
                    <span class="nav-label">Name Bids Chart</span>
                  </a>
                </li>
                <li class="">
                  <a href="../charts/marketcap.html">
                    <span class="nav-label">RAM Auction Chart</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <!-- END Tree Sidebar Common  --> */}

          <div class="sidebar-default-visible">
            <hr />
          </div>

          <div class="sidebar-default-visible sidebar-section m-b-2" id="links">
            <span class="small text-muted text-uppercase p-b-2 block">
              <strong>Links</strong>
            </span>
            <br />
            <br />
            <a href="#">
              <p>
                <i class="fas fa-envelope" /> Contact Us
              </p>
            </a>
            <a href="#">
              <p>
                <i class="fas fa-users" /> About Us
              </p>
            </a>
            <a href="#">
              <p>
                <i class="fab fa-twitter" /> Twitter
              </p>
            </a>
            <a href="#">
              <p>
                <i class="fab fa-telegram" /> Telegram
              </p>
            </a>
            <br />
          </div>
        </div>
      </aside>
    );
  }
}
