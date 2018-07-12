import React, { Component } from "react";

export default class Top extends Component {
  render() {
    return (
      <div className="navbar-inverse navbar navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="current navbar-brand" href="../index.html">
              <img
                alt="Spin Logo Inverted"
                className="h-20"
                src="../assets/images/spin-logo-inverted-@2X.png"
              />
            </a>
            <button
              className="action-right-sidebar-toggle navbar-toggle collapsed"
              data-target="#navdbar"
              data-toggle="collapse"
              type="button"
            >
              <i className="fas fa-fw fa-align-right text-white" />
            </button>
            <button
              className="navbar-toggle collapsed"
              data-target="#navbar"
              data-toggle="collapse"
              type="button"
            >
              <i className="fas fa-fw fa-user text-white" />
            </button>
            <button
              className="action-sidebar-open navbar-toggle collapsed"
              type="button"
            >
              <i className="fas fa-fw fa-bars text-white" />
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbar">
            {/* <!-- START Search Mobile --> */}
            <div className="form-group hidden-lg hidden-md hidden-sm">
              <div className="input-group hidden-lg hidden-md">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-fw fa-search" />
                  </button>
                </span>
              </div>
            </div>
            {/* <!-- END Search Mobile --> */}

            {/* <!-- START Left Side Navbar --> */}
            <ul className="nav navbar-nav navbar-left clearfix yamm">
              <li className="spin-search-box clearfix hidden-xs">
                <a href="#" className="pull-left">
                  <i className="fas fa-search fa-lg icon-inactive" />
                  <i className="fas fa-close fa-lg icon-active" />
                </a>
                <div className="input-group input-group-sm pull-left p-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search" />
                    </button>
                  </span>
                </div>
              </li>
            </ul>
            {/* <!-- START Left Side Navbar --> */}
          </div>
        </div>
      </div>
    );
  }
}
