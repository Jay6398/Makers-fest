import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      {/* <Link route="/">
        <a className="item">List all Supply Chains</a>
      </Link> */}
      <h1 style={{
        color: "#000080",
        flex: 1,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      }}>Supply Chain Management System</h1>
      <Menu.Menu position="right">
        <Link route="/supply-chain/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
