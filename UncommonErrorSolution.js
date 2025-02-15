// UncommonErrorSolution.js

import React, { useEffect, useState } from 'react';
import ThirdPartyLibrary from 'some-third-party-library'; // Replace with actual library

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ThirdPartyLibrary.someAsyncFunction();
        setData(result);
      } catch (err) {
        setError(err);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

export default MyComponent;