import React, { Component } from "react";
import Link from "gatsby-link";

import UserLinks from "../UserLinks/UserLinks";
import styles from "./Footer.module.scss";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={styles.Footer}>
        <UserLinks config={config} labeled />
        <div className={styles.noticeContainer}>
          <h4>
            {copyright}
          </h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
