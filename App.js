import 'react-native-gesture-handler';

import { Text, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import TasksList from './components/TasksList';

import { Provider } from 'react-redux';
import store from './store';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Все задачи"
        component={TasksList}
        initialParams={{ category: 'all' }}
      />
      <Drawer.Screen
        name="Выполненные"
        component={TasksList}
        initialParams={{ category: 'completed' }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <MyDrawer />
        </Provider>
      </NavigationContainer>
    </>
  );
}

export default App;
