import React, { useState, useEffect, useMemo } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        memoizedData && memoizedData.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DataFetchingComponent;
