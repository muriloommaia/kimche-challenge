import React, { useState } from 'react';
import { Button } from '../Atoms/Buton';
import { Input } from '../Atoms/Input';
import { Paragraph } from '../Atoms/Paragraph';

export default function Filters() {

  return (
    <div>
      <Paragraph color='gray'>
        Some random text
      </Paragraph>
      <Input
        type='text'
        placeholder='Search'
      />
      <div>
        <Paragraph>
          Group by:
        </Paragraph>
        <Button
          type='button'
        >
          Continent
        </Button>
      </div>

    </div>
  );
}
