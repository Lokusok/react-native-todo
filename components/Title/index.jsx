import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';

const TitleText = styled.Text`
  font-size: 27px;
  text-align: center;
  text-transform: uppercase;
  color: green;
`;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

function Title({ text }) {
  return <TitleText>{text}</TitleText>;
}

export default Title;
