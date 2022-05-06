import React, { useState } from 'react';
import { Button } from '../Atoms/Buton';
import { Input } from '../Atoms/Input';
import { Paragraph } from '../Atoms/Paragraph';

export default function Filters() {
  const [filters, setFilters] = useState('');
  const [continents, setContinents] = useState(false);

  const handleClick = () => {
    setContinents(!continents);
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
          onClick={handleClick}
          selected={continents}
        >
          Continent
        </Button>
      </div>

    </div>
  );
}
