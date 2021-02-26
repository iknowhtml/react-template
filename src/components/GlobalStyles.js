import { Global, css } from '@emotion/react';
import React from 'react';

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: sans-serif;
      }
    `}
  />
);

export default GlobalStyles;
