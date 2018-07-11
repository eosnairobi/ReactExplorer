import React from "react";
import { Link } from "react-router-dom";

export default ({ title }) => {
  return (
    <div>
      {/* <!-- START Sub-Navbar with Header only--> */}
      <div className="sub-navbar sub-navbar__header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header m-t-0">
                <h3 className="m-t-0">{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END Sub-Navbar with Header only--> */}

      {/* <!-- START Sub-Navbar with Header and Breadcrumbs--> */}
      <div className="sub-navbar sub-navbar__header-breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 sub-navbar-column">
              <div className="sub-navbar-header">
                <h3>{title}</h3>
              </div>
              <ol className="breadcrumb navbar-text navbar-right no-bg">
                <li className="current-parent">
                  <Link to="/" className="current-parent">
                    <i className="fa fa-fw fa-home" />
                  </Link>
                </li>
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li className="active">{title}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END Sub-Navbar with Header and Breadcrumbs--> */}
    </div>
  );
};
