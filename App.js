import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import TasksList from './components/TasksList';

import { Provider } from 'react-redux';
import store from './store';

const MainRoot = styled.View`
  padding-bottom: 0;
`;

function App() {
  return (
    <>
      <Provider store={store}>
        <MainRoot>
          <TasksList />
        </MainRoot>

        <StatusBar hidden={true} />
      </Provider>
    </>
  );
}

export default App;
