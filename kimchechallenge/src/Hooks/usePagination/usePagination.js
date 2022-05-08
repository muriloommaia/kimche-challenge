import { useCallback, useEffect, useState } from 'react';

export function usePagination({ items }) {
  const NUMBER_ITEMS = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(NUMBER_ITEMS);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [prevEnabled, setPrevEnabled] = useState(false);

  useEffect(() => {
    if (items <= NUMBER_ITEMS) {
      setNextEnabled(false);
      setPrevEnabled(false);
    } else {
      setNextEnabled(true);
      setPrevEnabled(false);
    }
  }, [items]);
}
