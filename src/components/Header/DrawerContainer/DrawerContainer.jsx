import React from 'react';

import styles from './DrawerContainer.module.scss';
import Menu from '../Menu/Menu';
import Social from '../Social/Social';
import Contact from '../Contact/Contact';

const DrawerContainer = ({ handleCloseMenu }) => (
  <div className={styles.DrawerContainer}>
    <div className={styles.CloseButtonContainer}>
      <i
        className='fa fa-times fa-2x fa-pull-right'
        aria-hidden='true'
        onClick={handleCloseMenu}
      />
    </div>
    <Menu />
    <Social />
    <Contact />
  </div>
);

export default DrawerContainer;
