import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SubNavBar from "../../common/SubNavBar";
import Breadcrumb from "../../common/Breadcrumbs";
import { getBlock } from "../../actions/chainAction";
import Spinner from "../../common/Spinner";
import { Link } from "react-router-dom";

class Block extends Component {
  componentDidMount() {
    this.props.getBlock();
  }

  render() {
    const { get_block, loading } = this.props.chain;

    let blockcontent;

    if (get_block === null || loading) {
      blockcontent = <Spinner />;
    } else {
      if (Object.keys(get_block).length > 0) {
        blockcontent = Object.entries(get_block).map(e => {
          const { id, block_id, block_num, block_time } = e[1];
          return (
            <tr>
              <td class="text-white">{id}</td>
              <td>
                <Link to="/">{block_id}</Link>
              </td>
              <td>{block_num}</td>
              <td>{block_time}</td>
            </tr>
          );
        });
      }
    }
    return (
      <div className="content">
        <SubNavBar title="Blocks" />
        <Breadcrumb title="Blocks" />
        <div className="container">
          {/* <!-- START EDIT CONTENT --> */}
          <div class="row">
            <div class="col-lg-12">
              <p>All Blocks in the chain</p>

              <table id="datatables-example" class="display table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>block Id</th>
                    <th>block Num</th>
                    <th>block Time</th>
                  </tr>
                </thead>
                <tbody>{blockcontent}</tbody>
              </table>
              {/* <!-- END Zero Configuration --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Block.propTypes = {
  getBlock: PropTypes.func.isRequired,
  chain: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  chain: state.chain
});

export default connect(
  mapStateToProps,
  { getBlock }
)(Block);
