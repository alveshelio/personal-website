import React, { Component } from "react";
import Helmet from "react-helmet";

import About from "../components/About/About";
import config from "../../data/SiteConfig";
import LanguageSwitcher from '../components/i18n/LanguageSwitcher';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <LanguageSwitcher />
        <About />
      </div>
    );
  }
}

export default AboutPage;
