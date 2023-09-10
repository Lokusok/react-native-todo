import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TextBlock = styled.Text`
  text-align: center;
  font-size: 22px;
`;

EmptyList.propTypes = {
  text: PropTypes.string.isRequired,
};

function EmptyList({ text }) {
  return <TextBlock>{text}</TextBlock>;
}

export default EmptyList;
