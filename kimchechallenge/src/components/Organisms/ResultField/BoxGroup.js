/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { Line } from '../../Atoms/Line';
import { Paragraph } from '../../Atoms/Paragraph';
import { Flex } from '../../Containers/Flex';
import { GridComponent } from '../../Containers/Grid';
import UniqueBox from './UniqueBox';

export default function BoxGroup({ items, name }) {
  return (
    <Flex
      direction='column'
      padding='0px'
    >
      <Flex
        align='center'
        justify='space-between'
      >
        <Line
          width='3.75rem'
          borderWidth='3px'
          height='4px'
          color='primary'
        />
        <Paragraph
          fontSize='2.0rem'
          text='center'
          padding='0 0.5rem'
        >
          {name}
        </Paragraph>
        <Line
          flex='2 2 auto'
          borderWidth='3px'
          height='4px'
          color='primary'
        />
      </Flex>
      <GridComponent
        cols={3}
        padding='1rem 3.75rem'
      >
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
