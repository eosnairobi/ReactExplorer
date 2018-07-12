import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { getTransactions } from "../../actions/historyAction";
import Spinner from "../../common/Spinner";

class Transactions extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const { get_transactions, loading } = this.props.history;

    let transactionContent;

    if (get_transactions === null || loading) {
      transactionContent = (
        <tr>
          <td className="v-a-m">
            <div className="media media-auto">
              <div className="media-left">
                <a href="javascript: void(0)">
                  <img
                    className="media-object img-circle"
                    style={{ width: "35px" }}
                    src="https://s3.amazonaws.com/uifaces/faces/twitter/lvovenok/128.jpg"
                    alt="Avatar"
                  />
                </a>
              </div>
              <div className="media-body">
                <span className="media-heading text-white">Alpha Nganga</span>
                <br />
                <span className="media-heading">
                  <span>on May 18, 2017 </span>
                </span>
              </div>
            </div>
          </td>
          <td className="v-a-m">
            <span>IDR 515.00</span>
          </td>
          <td className="v-a-m">
            <span> 3 days</span>
          </td>
          <td className="v-a-m">
            <i className="fa fa-circle text-success m-r-1" />{" "}
            <span className="text-success">Confirmed</span>
          </td>
        </tr>
      );
    } else {
      if (Object.keys(get_transactions).length > 0) {
        transactionContent = Object.entries(get_transactions).map(e => {
          console.log(e);
          return (
            <tr>
              <td className="v-a-m">
                <div className="media media-auto">
                  <div className="media-left">
                    <a href="javascript: void(0)">
                      <img
                        className="media-object img-circle"
                        style={{ width: "35px" }}
                        src="https://s3.amazonaws.com/uifaces/faces/twitter/lvovenok/128.jpg"
                        alt="Avatar"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <span className="media-heading text-white">
                      Alpha Nganga
                    </span>
                    <br />
                    <span className="media-heading">
                      <span>on May 18, 2017 </span>
                    </span>
                  </div>
                </div>
              </td>
              <td className="v-a-m">
                <span>IDR 515.00</span>
              </td>
              <td className="v-a-m">
                <span> 3 days</span>
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
            <h5 className="m-b-0 m-t-0 f-w-300">Latest Transactions</h5>
          </div>
          <div className="col-md-4 col-sm-4 col-sm-4 col-sm-offset-4 col-md-offset-4 col-xs-offset-2 text-right">
            <Link to="/transactions">
              {" "}
              <button type="button" className="btn btn-sm btn-default">
                See All Transactions<i className="fa m-l-1 fa-angle-right" />{" "}
              </button>
            </Link>
          </div>
        </div>
        <table className="table m-t-2">
          <thead>
            <tr>
              <th className="small text-muted text-uppercase">
                <strong>TX #</strong>
              </th>
              <th className="small text-muted text-uppercase">
                <strong>Block ID</strong>
              </th>
              <th className="small text-muted text-uppercase">
                <strong>Age</strong>
              </th>

              <th className="small text-muted text-uppercase">
                <strong>Actions</strong>
              </th>
            </tr>
          </thead>
          <tbody>{transactionContent}</tbody>
        </table>
      </div>
    );
  }
}
Transactions.propTypes = {
  getTransactions: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  history: state.history
});

export default connect(
  mapStateToProps,
  { getTransactions }
)(Transactions);
