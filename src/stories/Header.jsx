import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>Afspraakbeheer</h1>
      </div>
      <div>
          <Button size="small" onClick={onLogout} label="HRBP17.2 - Anne Bakker - 10.8.2018 - 15:00" />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
