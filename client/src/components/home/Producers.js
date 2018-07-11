import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getProducers } from "../../actions/chainAction";
import Spinner from "../../common/Spinner";

class Producers extends Component {
  componentDidMount() {
    this.props.getProducers();
  }

  render() {
    const { get_producers, loading } = this.props.chain;

    let producercontent;

    if (get_producers === null || loading) {
      producercontent = <Spinner />;
    } else {
      if (Object.keys(get_producers).length > 0) {
        Object.entries(get_producers.rows).map(e => {
          const {
            is_active,
            last_claim_time,
            location,
            owner,
            producer_key,
            total_votes,
            unpaid_blocks,
            url
          } = e[1];
          console.log(
            is_active,
            last_claim_time,
            location,
            owner,
            producer_key,
            total_votes,
            unpaid_blocks,
            url
          );
        });
        producercontent = <div> Test</div>;
      }
    }
    return (
      <div class="row m-b-2" id="">
        {producercontent}
      </div>
    );
  }
}
Producers.propTypes = {
  getProducers: PropTypes.func.isRequired,
  chain: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  chain: state.chain
});

export default connect(
  mapStateToProps,
  { getProducers }
)(Producers);
