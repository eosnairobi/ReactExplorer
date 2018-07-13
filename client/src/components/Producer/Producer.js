import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getProducers } from "../../actions/chainAction";
import Spinner from "../../common/Spinner";
import SubNavBar from "../../common/SubNavBar";
import Breadcrumb from "../../common/Breadcrumbs";
import { getInfo } from "../../actions/chainAction";
import { get } from "https";

class Producer extends Component {
  constructor() {
    super();
    this.state = {
      producers: {}
    };
    this.getInSeconds = this.getInSeconds.bind(this);
    this.compute = this.compute.bind(this);
  }
  componentDidMount() {
    const producerParams = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      json: "true",
      limit: "300"
    };
    this.props.getProducers(producerParams);
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
    const { get_info, get_producers, loading } = this.props.chain;

    let producercontent;
    let totalProducers = 0;
    let totalVotes = 0;
    let weight;
    let total_votes_percentage;

    if (get_info === null || get_producers === null || loading) {
      producercontent = <Spinner />;
    } else {
      if (Object.keys(get_info).length > 0) {
        weight = this.getInSeconds(get_info.head_block_time);
      }
      if (Object.keys(get_producers).length > 0) {
        producercontent = Object.entries(get_producers.rows).map(e => {
          totalProducers += 1;
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

          total_votes_percentage = total_votes * Math.pow(2, weight);

          let active;
          let label;

          if (is_active) {
            active = "Active";
            label = "success";
          } else {
            active = "Disabled";
            label = "gray-lighter";
          }
          return (
            <div className="col-lg-3 col-md-3">
              <div className="panel panel-default  b-a-2 no-bg b-gray-dark">
                <div className="panel-body">
                  {/* <!-- START Label --> */}
                  <span className={`label label-${label} label-outline`}>
                    {active}
                  </span>
                  {/* <!-- END Label --> */}
                  {/* <!-- START Media Task Name --> */}
                  <div className="media m-t-0">
                    <div className="media-left media-middle">
                      {/* <!-- START Star --> */}
                      <a
                        href="#"
                        className="text-muted"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Favorites"
                      >
                        <i className="fas fa-fw fa-lg fa-star-o" />
                      </a>
                      {/* <!-- END Star --> */}
                    </div>
                    <div className="media-body">
                      {/* <!-- START ID & Title Task --> */}
                      <h4 className="m-b-1">
                        <a href="tasks-grid.html">{owner}</a>{" "}
                      </h4>
                      {/* <!-- END ID & Title Task --> */}
                    </div>
                  </div>
                  {/* <!-- END Media Task Name --> */}
                  Time: <span className="text-white">{last_claim_time}</span>
                </div>
                <ul className="list-group no-bg">
                  <li className="list-group-item  no-bg">
                    {/* <!-- START Widget - Usage --> */}
                    <div className="progress b-r-a-0 m-t-0 m-b-1 h-3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "60%" }}
                      >
                        <span className="sr-only">60% Complete</span>
                      </div>
                    </div>
                    <span className="m-t-0">
                      Percentage:{" "}
                      <span className="text-white">60% Complete</span>
                    </span>
                    {/* <!-- END Widget - Usage --> */}
                  </li>
                  <li className="list-group-item  no-bg">
                    {/* <!-- START Dropdown SM Actions --> */}
                    <div className="btn-group pull-right">
                      <button
                        type="button"
                        className="btn btn-default  btn-xs dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="faslse"
                      >
                        <i className="fas fa-fw fa-gear" />{" "}
                        <span className="caret" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <a href="tasks-list.html">
                            <i className="fas fa-fw fa-folder-open text-gray-lighter m-r-1" />{" "}
                            View
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- END Dropdown SM Actions --> */}
                    Daily Rewards:{" "}
                    <span className="text-white">
                      {Math.round(total_votes)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          );
        });
      }
    }
    return (
      <div className="content">
        <SubNavBar title="Producers" />
        <Breadcrumb title="Producers" />
        <div className="container">
          {/* <!-- START EDIT CONTENT --> */}
          <div className="row">
            <div className="row m-b-1">
              <div className="col-md-12 col-sm-12  col-xs-12">
                {/* <!-- START Header --> */}
                <h3 className="f-w-300 m-t-1">
                  Producers
                  <div class="progress" style={{ width: "100%" }}>
                    <div
                      class="progress-bar progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow="45"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "15%" }}
                    >
                      <span class="sr-only">45% Complete</span>
                    </div>
                  </div>
                  <span className="badge m-l-1 hidden-xs">
                    {totalProducers} | {totalVotes}
                  </span>
                </h3>
                {/* <!-- END Header --> */}
              </div>
            </div>
            <div className="row">{producercontent}</div>
          </div>
        </div>
      </div>
    );
  }
}
Producer.propTypes = {
  getProducers: PropTypes.func.isRequired,
  getInfo: PropTypes.func.isRequired,
  chain: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  chain: state.chain
});

export default connect(
  mapStateToProps,
  { getProducers, getInfo }
)(Producer);
