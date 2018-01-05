import React from 'react';

import styles from './Hero.module.scss'

const hero = ({ header, tagline, bgColor}) => (
  <div className={styles.Hero} style={{ backgroundColor: bgColor }}>
    <div className={styles.HeroContent}>
      <h1>{header}</h1>
      <p>{tagline}</p>
    </div>
  </div>
);

export default hero;
