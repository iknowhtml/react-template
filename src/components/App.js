import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';

const Container = styled.div`
  font-size: 2em;
`;

const App = () => (
  <>
    <GlobalStyles />
    <Container>React Template</Container>
  </>
);

export default App;
