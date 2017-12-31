import React from 'react';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

import '../components/i18n/i18n';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import LanguageSwitcher from '../components/i18n/LanguageSwitcher';
import Footer from '../components/Footer/Footer';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const { t } = this.props;
    return (
      <div className='index-container'>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <LanguageSwitcher />
        <PostListing postEdges={postEdges} />
        <p>
          {t('userInfo.labels.aboutMe')}: {t('userInfo.header')}
        </p>
        <p>
          {t('userInfo.labels.skills')}: {t('userInfo.skills')}
        </p>
        <Footer config={config} />
      </div>
    );
  }
}

// export default Index;
export default translate('index')(Index);

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
