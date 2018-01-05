import React from 'react';
import Drawer from 'react-motion-drawer'

import 'font-awesome/css/font-awesome.min.css';
import styles from './Drawer.module.scss';
import DrawerContainer from '../DrawerContainer/DrawerContainer';

const drawer = ({ width, open, handleChange, onMenuClose }) => (
  <Drawer
    right
    width={width}
    overlayClassName={styles.Overlay}
    open={open}
    onChange={handleChange}
    className={styles.Drawer}
  >
    <div className={styles.DrawerContainer}>
      <DrawerContainer handleCloseMenu={onMenuClose} />
    </div>
  </Drawer>
);

export default drawer;
