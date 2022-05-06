export const reduceLanguage = (data) => data.reduce((acc, country) => {
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
