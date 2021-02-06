import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import SeachMain from './SeachMain';

function App() {
  return (
    <div className="search-holderofall">
      <SeachMain />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
