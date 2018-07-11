import React from "react";
import PropTypes from "prop-types";

const PanelCard = ({ name, price, type }) => {
  return (
    <div class="col-lg-3 col-md-6 col-sm-6">
      {/* <!-- START RAM Price --> */}
      <div class="panel panel-default b-a-0 bg-gray-dark">
        <div class="panel-heading">{name}</div>
        <div class="panel-body">
          <h2 class="m-t-0 f-w-300">
            <span>{price} </span>
          </h2>
          <i class="fas fa-fw fas-caret-up text-success" /> <span>{type}</span>
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
