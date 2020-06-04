import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getReducerData } from 'redux/selectors/common';

import { Card } from 'components/Card';

const List = () => {
  const history = useHistory();

  const breeds = useSelector((state) => getReducerData(state, 'breeds'));

  if (!breeds.length) {
    history.push('/');
  }

  return (
    <section className="list">
      {breeds.map((breed) => {
        const { name, origin, description, wikipedia_url: wiki } = breed;

        return (
          <article key={breed.id} className="list_item">
            <Card title={name} subtitle={origin} link={wiki}>
              {description}
            </Card>
          </article>
        );
      })}
    </section>
  );
};

export default List;
