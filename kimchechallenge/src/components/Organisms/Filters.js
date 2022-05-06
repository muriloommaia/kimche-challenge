import React, { useState } from 'react';
import { Button } from '../Atoms/Button';
import { Input } from '../Atoms/Input';
import { Paragraph } from '../Atoms/Paragraph';

export default function Filters() {
  const [filters, setFilters] = useState('');
  const [continents, setContinents] = useState(false);

  const handleClick = ({ target: { id } }) => {
    if (id === 'continent') {
      setContinents(true);
    } else {
      setContinents(false);
    }
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
        onChange={(e) => setFilters(e.target.value)}
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
