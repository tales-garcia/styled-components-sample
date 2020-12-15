import React from 'react';
import List from './components/List';
import GlobalStyle from './styles/global';

const transactions = [
  {},
  {}
];

function App() {
  return (
    <>
      <List transactions={transactions} />
      <GlobalStyle />
    </>
  );
}

export default App;
