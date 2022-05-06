export const reduceContinent = (data) => data.reduce((acc, country) => {
  const actualContinent = Object.keys(acc).map((countryName) => countryName.replace(/\s/g, '-'));
  const replacedName = country.continent.name.replace(/\s/g, '-');
  if (actualContinent.includes(replacedName)) {
    acc[replacedName] = acc[replacedName].concat(country);
    return acc;
  }
  acc[replacedName] = [country];
  return acc;
}, {});
