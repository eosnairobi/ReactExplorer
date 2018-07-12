import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Breadcrumb = ({ title }) => {
  return (
    <div class="sub-navbar sub-navbar__header-breadcrumbs">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 sub-navbar-column">
            <div class="sub-navbar-header">
              <h3>{title}</h3>
            </div>
            <ol class="breadcrumb navbar-text navbar-right no-bg">
              <li class="current-parent">
                <Link to="/" class="current-parent">
                  <i class="fas fa-fw fa-home" />
                </Link>
              </li>
              <li class="active">{title}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired
};

Breadcrumb.defaultProps = {
  title: "text"
};
export default Breadcrumb;
