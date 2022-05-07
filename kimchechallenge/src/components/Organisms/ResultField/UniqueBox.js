/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { Paragraph } from '../../Atoms/Paragraph';
import { BoxCountryStyle } from '../../Containers/Container.Box.Country';

export default function UniqueBox({ country }) {
  const {
    name, emoji, native, states, languages, code, currency,
  } = country;
  return (
    <BoxCountryStyle>
      <Paragraph>
        {name}
        {emoji}
      </Paragraph>
      <Paragraph>
        {native}
      </Paragraph>
      <Paragraph>
        Code:
        { ' ' }
        {code}
      </Paragraph>
      <Paragraph>
        {currency}
      </Paragraph>
      <Paragraph>
        Number of states:
        { ' ' }
        {states.length > 0 ? states.length : 'No states'}
      </Paragraph>
      <Paragraph>
        Number of languages:
        { ' '}
        {languages.length > 0 ? languages.length : 'No languages'}
      </Paragraph>
    </BoxCountryStyle>
  );
}

UniqueBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  country: PropTypes.any.isRequired,
};