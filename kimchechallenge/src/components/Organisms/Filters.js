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
      padding='2.1rem 0'
      direction='column'
      align='center'
      borderBottom='2px solid #ccc'
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
          wrap='wrap'
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
        <Flex
          align='center'
        >
          <Input
            type='text'
            align='center'
            margin='0 0.1rem 0  0'
            placeholder='Search a Country'
            value={filters}
            onChange={handleChange}
          />
          <i className='fa-solid fa-magnifying-glass' />
        </Flex>
      </Flex>

    </Flex>
  );
}
