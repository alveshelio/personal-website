import React, { Component, Fragment} from 'react';
import Helmet from 'react-helmet';

import '../../components/i18n/i18n';

import config from '../../../data/SiteConfig';
import LanguageSwitcher from '../../components/i18n/LanguageSwitcher';

class Project1 extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title={config.siteTitle} />
        <p>I'm I in the projectsPage page?</p>
      </Fragment>
    );
  }
}

// export default Index;
export default Project1;


