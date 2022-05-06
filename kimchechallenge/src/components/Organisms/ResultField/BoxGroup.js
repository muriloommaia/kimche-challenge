/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';

export default function BoxGroup({ items }) {
  return (
    <div>
      UniqueBox
      {items}
    </div>
  );
}

BoxGroup.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
