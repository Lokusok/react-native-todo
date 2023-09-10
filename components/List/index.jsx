import React from 'react';

import Task from '../Task';
import Header from '../Header';
import EmptyList from '../EmptyList';

import styled from 'styled-components/native';

const Wrapper = styled.FlatList`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

function List({ category, tasks }) {
  return (
    <Wrapper
      data={tasks}
      renderItem={({ item }) => (
        <Task
          category={category}
          id={item.id}
          title={item.title}
          isCompleted={item.isCompleted}
        />
      )}
      ListHeaderComponent={
        category === 'all' && <Header title={'React Todo App'} />
      }
      ListHeaderComponentStyle={{ marginBottom: 20 }}
      ListEmptyComponent={<EmptyList text={'Список задач пуст...'} />}
    />
  );
}

export default List;
