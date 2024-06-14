import React, { useState, useEffect, useMemo } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const DataFetchingComponent = ({ userId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading state to true before fetching data
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result); // Store fetched data in state
    } catch (err) {
      setError(err); // Set error state if fetching fails
    } finally {
      setLoading(false); // Set loading state to false after fetching is complete
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    return data.filter(item => item.userId === userId);
  }, [data, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts by User {userId}</h1>
      <ul>
        {filteredData.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
