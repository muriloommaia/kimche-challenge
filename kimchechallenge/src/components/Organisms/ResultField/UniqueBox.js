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
      <Flex>
        <Flex
          direction='column'
          width='50%'
          align='center'
          borderColor='black'
          borderRight='1px solid'
          borderTop='1px solid'
        >
          <p>
            States
          </p>
          <p>
            {states.length > 0 ? states.length : 'No states'}
          </p>
        </Flex>
        <Flex
          direction='column'
          width='50%'
          align='center'
          borderColor='black'
          borderTop='1px solid'
        >
          <p>
            Languages
          </p>
          <p>
            {languages.length > 0 ? languages.length : 'No languages'}
          </p>
        </Flex>
      </Flex>
    </BoxCountryStyle>
  );
}

UniqueBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  country: PropTypes.any.isRequired,
};
