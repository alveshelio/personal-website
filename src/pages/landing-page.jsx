import React, { Component, Fragment} from 'react';
import Helmet from 'react-helmet';

import '../components/i18n/i18n';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import LanguageSwitcher from '../components/i18n/LanguageSwitcher';

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title={config.siteTitle} />
        <LanguageSwitcher />
        <p>I'm I in the landingPage?</p>
      </Fragment>
    );
  }
}

// export default Index;
export default Index;

