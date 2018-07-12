import React from "react";
import PropTypes from "prop-types";

const PanelCard = ({ name, price, type }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      {/* <!-- START RAM Price --> */}
      <div className="panel panel-default b-a-0 bg-gray-dark">
        <div className="panel-heading">{name}</div>
        <div className="panel-body">
          <h2 className="m-t-0 f-w-300">
            <span>{price} </span>
          </h2>
          <i className="fas fa-fw fas-caret-up text-success" />{" "}
          <span>{type}</span>
        </div>
      </div>
      {/* <!-- END RAM Price  --> */}
    </div>
  );
};

PanelCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

PanelCard.defaultProps = {
  name: "text",
  price: "text",
  type: "text"
};
export default PanelCard;
