import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.error(error);

  return <div>Error</div>;
}

export default Error;
