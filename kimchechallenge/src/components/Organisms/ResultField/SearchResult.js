import React from 'react';
import BoxGroup from './BoxGroup';

export default function SearchResult() {
  const data = [[]];
  return (
    <div>
      {data.map((item) => <BoxGroup key='box' item={item} />)}
    </div>
  );
}
