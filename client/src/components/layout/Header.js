import React, { Component } from "react";
import Top from "../Navigation/Top";
import Side from "../Navigation/Side";

class Header extends Component {
  render() {
    return (
      <nav class="navigation">
        {/* START Navbar */}
        <Top />
        {/* END Navbar */}
        <Side />
      </nav>
    );
  }
}

export default Header;
