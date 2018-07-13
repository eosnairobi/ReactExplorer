import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getProducers } from "../../actions/chainAction";
import Spinner from "../../common/Spinner";
import isEmpty from "../../validation/is-empty";

class Producers extends Component {
  componentDidMount() {
    const producerParams = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      json: "true",
      limit: "12"
    };
    this.props.getProducers(producerParams);
  }

  render() {
    const { get_producers, loading } = this.props.chain;

    let producercontent;
    let totalVotes;

    if (isEmpty(get_producers) || loading) {
      producercontent = <Spinner />;
    } else {
      if (Object.keys(get_producers).length > 0) {
        totalVotes = Object.entries(get_producers).map(e => {
          // const total_producer_vote_weight = e[1];
          console.log(e.total_producer_vote_weight);
        });
        producercontent = Object.entries(get_producers.rows).map(e => {
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
          totalVotes;
          return (
            <tr>
              <td className="v-a-m">
                <span className="text-white">{owner}</span>
              </td>
              <td className="v-a-m">
                <span>{location}</span>
              </td>
              <td className="v-a-m">
                <span>{Math.round(total_votes)}</span>
              </td>
              <td className="v-a-m">
                <i className="fa fa-circle text-success m-r-1" />Confirmed
              </td>
            </tr>
          );
        });
      }
    }
    return (
      <div className="col-lg-6">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-6">
            <h5 className="m-b-0 m-t-0 f-w-300">Latest Producers</h5>
          </div>
          <div className="col-md-4 col-sm-4 col-sm-4 col-sm-offset-4 col-md-offset-4 col-xs-offset-2 text-right">
            <Link to="/producers">
              <button type="button" className="btn btn-sm btn-default">
                See All Producers<i className="fa m-l-1 fa-angle-right" />{" "}
              </button>
            </Link>
          </div>
        </div>
        <table className="table m-t-2">
          <thead>
            <tr>
              <th className="small text-muted text-uppercase">
                <strong># BP Name</strong>
              </th>
              <th className="small text-muted text-uppercase">
                <strong>Location</strong>
              </th>
              <th className="small text-muted text-uppercase">
                <strong>Votes %</strong>
              </th>

              <th className="small text-muted text-uppercase">
                <strong>Total Votes</strong>
              </th>
            </tr>
          </thead>
          <tbody>{producercontent}</tbody>
        </table>
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
