/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { usePagination } from '../../../Hooks/usePagination/usePagination';
import { Button } from '../../Atoms/Button';
import { Line } from '../../Atoms/Line';
import { Paragraph } from '../../Atoms/Paragraph';
import { MediaScreen } from '../../Containers/Container.media';
import { Flex } from '../../Containers/Flex';
import { GridComponent } from '../../Containers/Grid';
import UniqueBox from './UniqueBox';

export default function BoxGroup({ items, name }) {
  const {
    setNextPage,
    setPrevPage,
    nextEnabled,
    prevEnabled,
    startIndex,
    endIndex,
  } = usePagination({ items: items.length });
  return (
    <MediaScreen
      xlWidth='1280px'
      xlMargin='auto'
    >
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
            flex=' 2 auto'
            borderWidth='3px'
            height='4px'
            color='primary'
          />
        </Flex>
        <Flex>
          <Button
            type='button'
            onClick={setPrevPage}
            disabled={!prevEnabled}
            hoverColor='primary'
            border='0px'
            visibility={!prevEnabled ? 1 : 0}
            fontSize='2.0rem'
            color='primary'
          >
            <i className='fa-solid fa-angle-left' />

          </Button>
          <GridComponent
            cols={3}
            padding='1rem 2rem'
          >
            {items.slice(startIndex, endIndex).map((country) => (
              <UniqueBox key={country.name} country={country} />
            ))}
          </GridComponent>
          <Button
            type='button'
            onClick={setNextPage}
            disabled={!nextEnabled}
            border='0px'
            visibility={!nextEnabled ? 1 : 0}
            hoverColor='primary'
            fontSize='2.0rem'
            color='primary'
          >
            <i className='fa-solid fa-angle-right' />
          </Button>
        </Flex>
      </Flex>
    </MediaScreen>
  );
}

BoxGroup.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
};
