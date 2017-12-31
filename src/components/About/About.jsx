import React, { Component } from "react";
import { translate } from 'react-i18next';

import '../i18n/i18n';
import "./About.css";

class About extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="about">
        <h4>{t('labels.aboutMe')}</h4>
        <p>{t('description.aboutMe')}</p>
        <hr />
        <h4>{t('labels.mySkills')}</h4>
        <p>{t('description.mySkills')}</p>
      </div>
    );
  }
}

export default translate('about')(About);
