/* eslint-disable jsx-a11y/label-has-associated-control */
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
      padding='2.1rem 1rem'
      direction='column'
      align='center'
    >
      <Paragraph
        color='gray'
        padding='0px 0px 1rem 0px'
      >
        Some random text
      </Paragraph>
      <Flex
        justify='space-between'
        width='100%'
      >
        <Flex
          align='center'
          wrap='wrap'
        >
          <Paragraph>
            Group by:
          </Paragraph>
          <div>
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
          </div>
        </Flex>
        <Flex
          align='center'
        >
          <Flex
            border='1px solid black'
            borderRadius='0.25rem'
            padding='0.3rem 0.5rem'
          >
            <label htmlFor='search'>
              <Input
                type='search'
                id='search'
                margin='0 0.5rem 0  0'
                placeholder='Search a Country'
                value={filters}
                onChange={handleChange}
              />
              <i className='fa-solid fa-magnifying-glass' />
            </label>
          </Flex>
        </Flex>
      </Flex>

    </Flex>
  );
}
