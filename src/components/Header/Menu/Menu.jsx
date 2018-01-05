import React from 'react';
import Link from 'gatsby-link';

import styles from './Menu.module.scss';

const Menu = () => (
  <div className={styles.MenuContainer}>
    <ul className={styles.Menu}>
      <li><Link className={styles.MenuItem} to="about">About Me</Link></li>
      <li><Link className={styles.MenuItem} to="work">Work</Link></li>
      <li><Link className={styles.MenuItem} to="contact">Contact</Link></li>
      <li><Link className={styles.MenuItem} to="lab">Lab</Link></li>
    </ul>
  </div>
);

export default Menu;
