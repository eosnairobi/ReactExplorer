import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getInfo } from "../actions/chainAction";
import Spinner from "./Spinner";
// double weight = int64_t( (now() - (block_timestamp::block_timestamp_epoch / 1000)) / (seconds_per_day * 7) )  / double( 52 );
class Weight extends Component {
  constructor() {
    super();
    this.getInSeconds = this.getInSeconds.bind(this);
    this.compute = this.compute.bind(this);
  }
  componentWillMount() {
    this.props.getInfo();
  }
  getInSeconds(date) {
    let t = Date.parse(date);
    const result = this.compute(t);
    return result;
  }
  compute(date) {
    let now = Date.now();
    let weight = (now - date / 1000) / (86400 * 7) / 52;
    return weight;
  }
  render() {
    let getInfoContent;
    let weight;
    const { get_info, loading } = this.props.chain;

    if (get_info === null || loading) {
      getInfoContent = <Spinner />;
    } else {
      if (Object.keys(get_info).length > 0) {
        weight = this.getInSeconds(get_info.head_block_time);
      }
    }
    return { weight };
  }
}

Weight.propTypes = {
  getInfo: PropTypes.func.isRequired,
  chain: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  chain: state.chain
});

export default connect(
  mapStateToProps,
  { getInfo }
)(Weight);
