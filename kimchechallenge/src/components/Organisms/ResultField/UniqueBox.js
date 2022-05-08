/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { Paragraph } from '../../Atoms/Paragraph';
import { BoxCountryStyle } from '../../Containers/Container.Box.Country';
import { Flex } from '../../Containers/Flex';

export default function UniqueBox({ country }) {
  const {
    name, emoji, native, states, languages, code, currency, capital,
  } = country;
  return (
    <BoxCountryStyle>
      <Flex
        align='start'
        padding='0.5rem 1rem'
        justify='space-between'
      >
        <div>
          <Paragraph
            fontSize='30px'
            lineHeight='2rem'
          >
            {name}
          </Paragraph>
          <Paragraph
            fontSize='0.9rem'
            lineHeight='1.5rem'
          >
            {`${native} | ${code}`}
          </Paragraph>
        </div>
        <Paragraph
          fontSize='50px'
          width='30%'
          text='center'
        >
          {emoji}
        </Paragraph>
      </Flex>
      <div>
        <Flex>
          <Flex
            direction='column'
            width='50%'
            align='center'
            borderColor='black'
            borderTop='1px solid'
            padding='0.2rem 0'
          >
            <p>
              Capital
            </p>
            <p>
              {capital}
            </p>
          </Flex>
          <Flex
            direction='column'
            width='50%'
            align='center'
            borderColor='black'
            borderTop='1px solid'
            padding='0.2rem 0'
          >
            <p>
              Currency
            </p>
            <p>
              {currency}
            </p>
          </Flex>
        </Flex>
        <Flex>
          <Flex
            direction='column'
            width='50%'
            align='center'
            borderColor='black'
            // borderRight='1px solid'
            borderTop='1px solid'
            padding='0.2rem 0'
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
            padding='0.2rem 0'
          >
            <p>
              Languages
            </p>
            <p>
              {languages.length > 0 ? languages.length : 'No languages'}
            </p>
          </Flex>
        </Flex>
      </div>
    </BoxCountryStyle>
  );
}

UniqueBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  country: PropTypes.any.isRequired,
};
