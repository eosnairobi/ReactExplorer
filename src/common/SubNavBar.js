import React from "react";
import PropTypes from "prop-types";

const SubNavBar = ({ title }) => {
  return (
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
  );
};

SubNavBar.propTypes = {
  title: PropTypes.string.isRequired
};

SubNavBar.defaultProps = {
  title: "text"
};
export default SubNavBar;
