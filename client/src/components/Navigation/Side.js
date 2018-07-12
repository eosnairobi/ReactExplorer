import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Side extends Component {
  render() {
    return (
      <aside className="navbar-default sidebar">
        <div className="sidebar-overlay-head">
          EOS | BlockExplorerr
          <Link to="#" className="sidebar-switch action-sidebar-close">
            <i className="fas fa-times" />
          </Link>
        </div>

        <div className="sidebar-content">
          <div className="sidebar-default-visible text-muted small text-uppercase sidebar-section p-y-2">
            <strong>Navigation</strong>
          </div>

          {/* <!-- START Tree Sidebar Common --> */}
          <ul className="side-menu">
            <li className="Dashboards">
              <Link to="#" title="Dashboards">
                <i className="fas fa-tachometer-alt" />{" "}
                <span className="nav-label">Dashboard</span>
              </Link>
              <ul>
                <li className="active">
                  <Link to="/">
                    <span className="nav-label">Home</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/producers">
                    <span className="nav-label">Producers</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/blocks">
                    <span className="nav-label">Blocks</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="/accounts">
                    <span className="nav-label">Top Accounts</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="#" title="Dashboards">
                <i className="far fa-chart-bar active" />{" "}
                <span className="nav-label">Charts & Graphs</span>
                {/* <!-- <span className="pull-right label label-primary label-outline text-uppercase">New</span> --> */}
              </Link>
              <ul>
                <li className="">
                  <Link to="../charts/prices.html">
                    <span className="nav-label">Token Price </span>
                  </Link>
                </li>
                <li className="">
                  <Link to="../charts/marketcap.html">
                    <span className="nav-label">Market Capitalization</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="../charts/prices.html">
                    <span className="nav-label">Transactions Volume</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="../charts/prices.html">
                    <span className="nav-label">Transactions Fees</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="../charts/suply.html">
                    <span className="nav-label">Total Supply Chart</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="../charts/prices.html">
                    <span className="nav-label">Accounts growth rate</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="../charts/marketcap.html">
                    <span className="nav-label">Top DEX Chart</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="../charts/marketcap.html">
                    <span className="nav-label">Name Bids Chart</span>
                  </Link>
                </li>
                <li className="">
                  <Link to="../charts/marketcap.html">
                    <span className="nav-label">RAM Auction Chart</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {/* <!-- END Tree Sidebar Common  --> */}

          <div className="sidebar-default-visible">
            <hr />
          </div>

          <div
            className="sidebar-default-visible sidebar-section m-b-2"
            id="links"
          >
            <span className="small text-muted text-uppercase p-b-2 block">
              <strong>Links</strong>
            </span>
            <br />
            <br />
            <Link to="#">
              <p>
                <i className="fas fa-envelope" /> Contact Us
              </p>
            </Link>
            <Link to="#">
              <p>
                <i className="fas fa-users" /> About Us
              </p>
            </Link>
            <Link to="#">
              <p>
                <i className="fab fa-twitter" /> Twitter
              </p>
            </Link>
            <Link to="#">
              <p>
                <i className="fab fa-telegram" /> Telegram
              </p>
            </Link>
            <br />
          </div>
        </div>
      </aside>
    );
  }
}
