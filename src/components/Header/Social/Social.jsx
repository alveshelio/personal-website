import React from 'react';

import styles from './Social.module.scss'

const Social = () => (
  <div className={styles.SocialContainer}>
    <a href="#">
      <i
        className='fa fa-facebook-square fa-2x'
        aria-hidden='true'
      />
    </a>
    <a href="#">
      <i
        className='fa fa-twitter-square fa-2x'
        aria-hidden='true'
      />
    </a>
    <a href="#">
      <i
        className='fa fa-linkedin-square fa-2x'
        aria-hidden='true'
      />
    </a>
  </div>
);

export default Social;
