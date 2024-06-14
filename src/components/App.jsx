import React from 'react';
import ReactDOM from 'react-dom';
import DataFetchingComponent from './DataFetchingComponent';

const App = () => {
  return (
    <div>
      <DataFetchingComponent userId={1} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
