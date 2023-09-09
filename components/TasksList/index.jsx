import React from 'react';

import Task from '../Task';
import Header from '../Header';

import styled from 'styled-components/native';

import { useSelector } from 'react-redux';

const Wrapper = styled.FlatList`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

function TasksList() {
  const tasks = useSelector((state) => state.tasks.items);

  return (
    <Wrapper
      data={tasks}
      renderItem={({ item }) => (
        <Task id={item.id} title={item.title} isCompleted={item.isCompleted} />
      )}
      ListHeaderComponent={<Header title={'React Todo App'} />}
      ListHeaderComponentStyle={{ marginBottom: 20 }}
    />
  );
}

export default TasksList;
