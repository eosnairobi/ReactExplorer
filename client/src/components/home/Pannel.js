import React, { Component } from "react";
import PanelCard from "./../../common/PanelCard";

class Pannel extends Component {
  render() {
    return (
      <div class="row">
        <PanelCard name="RAM Price" price="0.47559" value="EOS/KB" />
        <PanelCard
          name="Irreversible Blocks"
          price="4,904,059"
          value="realtime"
        />
        <PanelCard name="Accounts Created" price="259,271" value="realtime" />
        <PanelCard
          name="Total Votes on Chain"
          price="305,435,689"
          value="realtime"
        />
      </div>
    );
  }
}

export default Pannel;
