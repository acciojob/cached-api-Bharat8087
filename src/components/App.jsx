import React from 'react';
import ReactDOM from 'react-dom';
import DataFetchingComponent from './DataFetchingComponent';

const App = () => {
  return (
    <div>
      <DataFetchingComponent userId={1} />
      <DataFetchingComponent userId={2} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
