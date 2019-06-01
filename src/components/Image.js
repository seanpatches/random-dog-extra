import React from 'react';
import PropTypes from 'prop-types';

function Image({ img }) {
  return <img src={img} />;
}

Image.propTypes = {
  img: PropTypes.string.isRequired
};

export default Image;
