import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGroup, setSearch } from '../../redux/slices/filter.slice';
import { Button } from '../Atoms/Button';
import { Input } from '../Atoms/Input';
import { Paragraph } from '../Atoms/Paragraph';

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
    <div>
      <Paragraph color='gray'>
        Some random text
      </Paragraph>
      <Input
        type='text'
        placeholder='Search'
        value={filters}
        onChange={handleChange}
      />
      <div>
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
      </div>

    </div>
  );
}
