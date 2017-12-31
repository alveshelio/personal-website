import React, { Component } from "react";
import Link from "gatsby-link";

import UserLinks from "../UserLinks/UserLinks";
import styles from "./Footer.module.scss";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
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

          <Link to={url}>
            <button>Subscribe</button>
          </Link>
          <h4>
            Based on{" "}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>.
          </h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
