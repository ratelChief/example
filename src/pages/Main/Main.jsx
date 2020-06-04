import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getCatsBreeds } from 'redux/actions';

import { Button, Spinner, Alert } from 'reactstrap';

const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, error } = useSelector(
    (state) => ({
      loading: state.breeds.loading,
      error: state.breeds.error,
    }),
    shallowEqual,
  );

  const handleClick = useCallback(() => {
    getCatsBreeds('/breeds', { page: 1, limit: 20 }, dispatch)
      .then(() => history.push('/list'))
      .catch((promiseError) => {
        console.error(promiseError);
      });
  }, [dispatch, history]);

  return (
    <section className="main">
      {!error &&
        (loading ? (
          <Spinner color="dark" />
        ) : (
          <Button onClick={handleClick} disabled={loading}>
            Get cats breeds
          </Button>
        ))}

      {error && (
        <>
          <Alert color="danger">{error}</Alert>

          <Button onClick={handleClick} disabled={loading}>
            {loading ? <Spinner color="white" /> : 'retry'}
          </Button>
        </>
      )}
    </section>
  );
};

export default Main;
