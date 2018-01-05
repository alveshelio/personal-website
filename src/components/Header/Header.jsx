import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Drawer from './Drawer/Drawer';
import styles from './Header.module.scss'


class Header extends PureComponent {
  state = {
    menuOpen: false,
    width: '100vw',
  };

  onChange = menuOpen => {
    this.setState({ menuOpen });
  };

  handleCloseMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { menuOpen, width } = this.state;

    return (
      <header className={styles.Header}>
        <div className={styles.LogoWrapper}>Helio Alves</div>
        <div className={styles.MenuWrapper}>
          <i
            className="fa fa-bars fa-2x"
            aria-hidden="true"
            onClick={this.onChange}
          />

        </div>
        <Drawer width={width} open={menuOpen} handleChange={this.onChange} onMenuClose={this.handleCloseMenu} />
      </header>
    )
  }
}

export default Header;
