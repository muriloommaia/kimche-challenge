/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { Flex } from '../../Containers/Flex';
import { GridComponent } from '../../Containers/Grid';
import UniqueBox from './UniqueBox';

export default function BoxGroup({ items, name }) {
  return (
    <Flex
      direction='column'
      padding='0px 30px'
    >
      <p>
        {name}
      </p>
      <GridComponent cols={3}>
        {items.map((country) => (
          <UniqueBox key={country.name} country={country} />
        ))}
      </GridComponent>
    </Flex>
  );
}

BoxGroup.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
};
