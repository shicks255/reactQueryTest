import React from 'react';
import useMyQuery from './useRQ';

export default function TestComponent() {
  const result = useMyQuery();
  console.log(result);
  if (result.isLoading) return <div>Loading...</div>;
  if (result.error) {
    console.log(result.error.message);
    return <div>Error {result.error.message}</div>;
  }

  return <div>{result.data}</div>;
}