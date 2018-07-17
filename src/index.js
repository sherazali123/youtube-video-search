import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './compnents/search_bar';

const API_KEY = 'AIzaSyBfTwfXGOcrMUNaK8TrdfbdcWC_qsPcedQ';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
