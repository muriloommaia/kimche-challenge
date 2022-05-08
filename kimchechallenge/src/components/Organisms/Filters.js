import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGroup, setSearch } from '../../redux/slices/filter.slice';
import { Button } from '../Atoms/Button';
import { Input } from '../Atoms/Input';
import { Paragraph } from '../Atoms/Paragraph';
import { Flex } from '../Containers/Flex';

export default function Filters() {
  const [filters, setFilters] = useState('');
  const [continents, setContinents] = useState(false);
  const dispatch = useDispatch();

  const handleClick = ({ target: { id } }) => {
    if (id === 'continent') {
      setContinents(true);
      dispatch(setGroup(true));
    } else {
      setContinents(false);
      dispatch(setGroup(false));
    }
  };

  const handleChange = ({ target: { value } }) => {
    setFilters(value);
    dispatch(setSearch(value));
  };

  return (
    <Flex
      padding='1rem 0 0 1rem'
      direction='column'
      align='center'
    >
      <Paragraph color='gray'>
        Some random text
      </Paragraph>
      <Flex
        justify='space-around'
        width='100%'
      >
        <Flex
          align='center'
        >
          <Paragraph>
            Group by:
          </Paragraph>
          <Button
            type='button'
            id='continent'
            onClick={handleClick}
            selected={continents}
          >
            Continent
          </Button>
          <Button
            type='button'
            id='language'
            onClick={handleClick}
            selected={!continents}
          >
            Language
          </Button>
        </Flex>
        <Input
          type='text'
          placeholder='Search'
          value={filters}
          onChange={handleChange}
        />
      </Flex>

    </Flex>
  );
}
