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

  const setNextPage = useCallback(() => {
    const newEnd = endIndex + NUMBER_ITEMS;
    console.log(nextEnabled);
    if (newEnd < items) {
      setStartIndex(startIndex + NUMBER_ITEMS);
      setEndIndex(newEnd);
      setNextEnabled(true);
    } else {
      setStartIndex(items - NUMBER_ITEMS);
      setEndIndex(items);
      setNextEnabled(false);
    }
    setPrevEnabled(true);
  }, [endIndex, items, startIndex, nextEnabled]);

  const setPrevPage = useCallback(() => {
    const newStart = startIndex - NUMBER_ITEMS;
    if (newStart > 0) {
      setStartIndex(newStart);
      setEndIndex(endIndex - NUMBER_ITEMS);
      setPrevEnabled(true);
    } else {
      setStartIndex(0);
      setEndIndex(NUMBER_ITEMS);
      setPrevEnabled(false);
    }
    setNextEnabled(true);
  }, [endIndex, startIndex]);
}
