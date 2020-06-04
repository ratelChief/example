import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'reactstrap';

const NoMatch = () => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <section className="no_match-container">
      <h1>{`You are now on ${history.location.pathname}`}</h1>

      <Button onClick={handleClick} color="warning">
        Go to the home page
      </Button>
    </section>
  );
};

export default NoMatch;
