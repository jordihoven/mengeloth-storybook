import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './footer.css';

export const Footer = ({ }) => (
    <footer>
      <div className="wrapper">
        <div>
            <Button secondary label="Annuleren"></Button>
            <Button primary label="Wijzigingen opslaan"></Button>
        </div>
      </div>
    </footer>
);