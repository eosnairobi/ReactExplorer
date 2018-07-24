import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Popup from "reactjs-popup";

import SubNavBar from "../../common/SubNavBar";
import Breadcrumb from "../../common/Breadcrumbs";
import { getBlockInfo } from "../../actions/chainAction";
import Spinner from "../../common/Spinner";
import { Link } from "react-router-dom";

class BlockSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  openModal = () => {
    this.setState({ open: true });
  };
  closeModal = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.props.getBlockInfo();
  }

  render() {
    const { get_block_info, loading } = this.props.chain;

    let blockcontent;

    if (get_block_info === null || loading) {
      blockcontent = <Spinner />;
    } else {
      if (Object.keys(get_block_info).length > 0) {
        blockcontent = Object.entries(get_block_info).map(e => {
          const { id, block_id, block_num, block_time } = e[1];
          return (
            <tr>
              <td class="text-white">{id}</td>
              <td>
                <Link to="/block/search">{block_id}</Link>
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
              <button className="button" onClick={this.openModal}>
                Controlled Popup
              </button>
              <Popup
                open={this.state.open}
                closeOnDocumentClick
                onClose={this.closeModal}
              >
                <div className="modal">
                  <a className="close" onClick={this.closeModal}>
                    &times;
                  </a>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni omnis delectus nemo, maxime molestiae dolorem
                  numquam mollitia, voluptate ea, accusamus excepturi deleniti
                  ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
                </div>
              </Popup>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Block.propTypes = {
  getBlockInfo: PropTypes.func.isRequired,
  chain: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  chain: state.chain
});

export default connect(
  mapStateToProps,
  { getBlockInfo }
)(BlockSearch);
