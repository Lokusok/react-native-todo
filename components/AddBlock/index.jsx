import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import styled from 'styled-components/native';

import Delimiter from '../Delimiter';

import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/slices/tasks-slice';

const Input = styled.TextInput`
  border: 1px solid #666;
  padding: 3px 10px;
  border-radius: 5px;
  flex-basis: 65%;
`;

const SubmitButton = styled.Button`
  flex-basis: 35%;
`;

const TopBlock = styled.View`
  padding: 0 15px;
  margin-top: 15px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  box-shadow: 1px 10px 10px #000;
`;

function AddBlock() {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = React.useState('');

  const handleChange = (value) => {
    setNewTodoText(value);
  };

  const handleAddClick = () => {
    const newTodo = { id: 7, title: newTodoText, isCompleted: false };
    dispatch(addTodo(newTodo));

    setNewTodoText('');
  };

  return (
    <View>
      <TopBlock>
        <Input
          value={newTodoText}
          onChangeText={handleChange}
          placeholder={'Введите задачу'}
        />
        <SubmitButton
          disabled={newTodoText.length < 5}
          onPress={handleAddClick}
          title="Добавить"
        />
      </TopBlock>

      <Delimiter />
    </View>
  );
}

export default AddBlock;
