import React, { Component, Fragment} from 'react';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';

import 'font-awesome/css/font-awesome.min.css';
import styles from './index.module.scss';
import '../components/i18n/i18n';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import Header from '../components/Header/Header';
import Hero from '../components/Header/Hero/Hero';
import Footer from '../components/Footer/Footer';
import LanguageSwitcher from '../components/i18n/LanguageSwitcher';

class Index extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const { t } = this.props;
    return (
      <Fragment>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Header />
        <Hero header='Hero' tagline='This is the hero tagline' bgColor='red' />
        <main className={styles.ContentContainer}>
          <LanguageSwitcher />
          <p>
            {t('userInfo.labels.aboutMe')}: {t('userInfo.header')}
          </p>
          <p>
            {t('userInfo.labels.skills')}: {t('userInfo.skills')}
          </p>
        </main>
        <Footer config={config} />
      </Fragment>
    );
  }
}

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
