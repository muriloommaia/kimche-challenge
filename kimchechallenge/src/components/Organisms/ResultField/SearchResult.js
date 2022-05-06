import React from 'react';
import BoxGroup from './BoxGroup';

export default function SearchResult() {
  const data = [[]];
  return (
    <div>
      {data.map((items) => <BoxGroup key='box' items={items} />)}
    </div>
  );
}
