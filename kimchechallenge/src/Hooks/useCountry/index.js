import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/slices/country.slice';
import { setFilter } from '../../redux/slices/filter.slice';

export function useCountry() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.data);
  const { continent, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch, countries]);

  const filterByContinent = useCallback((searchContinent) => {
    const data = countries
      .filter((country) => country.name.includes(searchContinent));

    const result = reduceContinent(data);

    dispatch(setFilter(result));
  }, [dispatch, countries]);

  const filterByLanguage = useCallback((searchLanguage) => {
    const data = countries
      .filter((country) => country.name.includes(searchLanguage));
    const result = reduceLanguage(data);
    dispatch(setFilter(result));
  }, [dispatch, countries]);

  useEffect(() => {
    if (continent) {
      filterByContinent(search);
    } else {
      filterByLanguage(search);
    }
  }, [search, continent, filterByContinent, filterByLanguage]);

  const reduceContinent = (data) => data.reduce((acc, country) => {
    const actualContinent = Object.keys(acc).map((countryName) => countryName);
    const replacedName = country.continent.name;
    if (actualContinent.includes(replacedName)) {
      acc[replacedName] = acc[replacedName].concat(country);
      return acc;
    }
    acc[replacedName] = [country];
    return acc;
  }, {});

  const reduceLanguage = (data) => data.reduce((acc, country) => {
    const actualLanguages = Object.keys(acc);
    const languagesName = country.languages.map((language) => language.name);
    languagesName.forEach((name) => {
      if (actualLanguages.includes(name)) {
        acc[name] = acc[name].concat(country);
        return acc;
      }
      acc[name] = [country];
      return acc;
    });
    return acc;
  }, {});
}
