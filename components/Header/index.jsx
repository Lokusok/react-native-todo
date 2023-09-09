import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import AddBlock from '../AddBlock';

import styled from 'styled-components/native';

const HeaderBlock = styled.View`
  display: flex;
  flex-direction: column;
`;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

function Header({ title }) {
  return (
    <HeaderBlock>
      <Title text={title} />
      <AddBlock />
    </HeaderBlock>
  );
}

export default Header;
