/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';

export default function UniqueBox({ country }) {
  const {
    name, emoji,
  } = country;
  return (
    <div>
      <p>
        {name}
        {emoji}
      </p>
    </div>
  );
}

UniqueBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  country: PropTypes.any.isRequired,
};
