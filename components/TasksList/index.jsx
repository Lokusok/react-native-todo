import React from 'react';

import List from '../List';

import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

function TasksList() {
  const route = useRoute();
  const category = route.params.category;

  const tasks = useSelector((state) => {
    switch (category) {
      case 'all':
        return state.tasks.items;
      case 'completed':
        return state.tasks.items.filter((item) => item.isCompleted);
    }
  });

  return <List category={category} tasks={tasks} />;
}

export default TasksList;
