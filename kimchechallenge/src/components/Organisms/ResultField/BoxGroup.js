/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { GridComponent } from '../../Containers/Grid';
import UniqueBox from './UniqueBox';

export default function BoxGroup({ items, name }) {
  return (
    <div>
      <p>
        {name}
      </p>
      <GridComponent cols={3}>
        {items.map((country) => (
          <UniqueBox key={country.name} country={country} />
        ))}
      </GridComponent>
    </div>
  );
}

BoxGroup.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
};
