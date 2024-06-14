import React, { useState, useEffect, useMemo } from 'react';

const DataFetchingComponent = ({ userId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API based on userId
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Memoize the filtered data based on userId
  const filteredData = useMemo(() => {
    return data.filter(item => item.userId === userId);
  }, [data, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Posts for User {userId}</h1>
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
