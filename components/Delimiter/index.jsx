import styled from 'styled-components/native';

const Line = styled.View`
  width: 100%;
  border: 1px solid green;
`;

function Delimiter() {
  return <Line />;
}

export default Delimiter;
