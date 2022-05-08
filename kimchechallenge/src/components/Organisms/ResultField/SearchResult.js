import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Background } from '../../Containers/Container.Background';
import Loading from '../Loading/Loading';
import BoxGroup from './BoxGroup';

export default function SearchResult() {
  const [countries, setCountries] = useState([]);
  const { loading } = useSelector((state) => state.countries);
  const { filtered } = useSelector((state) => state.filter);

  useEffect(() => {
    if (filtered) {
      const data = Object.entries(filtered);
      setCountries(data);
    }
  }, [filtered]);
  if (loading) return <Loading />;
  return (
    <Background
      image='secondary'
    >
      {countries.map((items) => (
        <BoxGroup key={items[0]} items={items[1]} name={items[0]} />
      ))}
    </Background>
  );
}
