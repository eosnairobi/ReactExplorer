import React, { Component } from "react";
import PanelCard from "./../../common/PanelCard";

class Pannel extends Component {
  render() {
    return (
      <div class="col-lg-12 m-t-2">
        <div class="row m-b-0">
          <div class="col-lg-2 col-md-6 col-xs-12 col-sm-6 m-b-0">
            <div class="hr-text hr-text-left m-t-0 m-b-0">
              <h6 class="text-white">
                <strong>RAM Price</strong>
              </h6>
            </div>
            <h1 class="f-w-300 m-t-0 hidden-md hidden-sm hidden-xs">0.47559</h1>
            <h3 class="f-w-300 m-t-0 hidden-lg">0.47559</h3>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12 col-sm-6 m-b-0">
            <div class="hr-text hr-text-left m-t-0 m-b-0">
              <h6 class="text-white">
                <strong>Irreversible Blocks</strong>
              </h6>
            </div>
            <h1 class="f-w-300 m-t-0 hidden-md hidden-sm hidden-xs">
              4,904,059
            </h1>
            <h3 class="f-w-300 m-t-0 hidden-lg">4,904,059</h3>
          </div>

          <div class="col-lg-2 col-md-6 col-xs-12 col-sm-6 m-b-0">
            <div class="hr-text hr-text-left m-t-0 m-b-0">
              <h6 class="text-white">
                <strong>Accounts Created</strong>
              </h6>
            </div>
            <h1 class="f-w-300 m-t-0 hidden-md hidden-sm hidden-xs">259,271</h1>
            <h3 class="f-w-300 m-t-0 hidden-lg">259,271</h3>
          </div>

          <div class="col-lg-2 col-md-6 col-xs-12 col-sm-6 m-b-0">
            <div class="hr-text hr-text-left m-t-0 m-b-0">
              <h6 class="text-white">
                <strong>Total Minutes Viewed</strong>
              </h6>
            </div>
            <h1 class="f-w-300 m-t-0 hidden-md hidden-sm hidden-xs">
              4,345,687
            </h1>
            <h3 class="f-w-300 m-t-0 hidden-lg">4,345,687</h3>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12 col-sm-6 m-b-0">
            <div class="hr-text hr-text-left m-t-0 m-b-0">
              <h6 class="text-white">
                <strong>Total Votes on Chain</strong>
              </h6>
            </div>
            <h1 class="f-w-300 m-t-0 hidden-md hidden-sm hidden-xs">
              305,435,689
            </h1>
            <h3 class="f-w-300 m-t-0 hidden-lg">305,435,689</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Pannel;
