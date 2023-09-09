import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components/native';

import CheckBox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';
import { toggleStatus, removeTodo } from '../../store/slices/tasks-slice';

const TaskBlock = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid green;
  border-radius: 5px;
  margin: 0 15px;
  margin-bottom: 15px;
`;

const MainContent = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const CheckBoxBlock = styled.View`
  margin-right: 15px;
`;

const TaskTitle = styled.Text`
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : '')};
`;

const DeleteButton = styled.TouchableOpacity`
  background-color: red;
  padding: 10px;
  display: ${(props) => (props.isHide ? 'none' : '')};
`;

Task.propTypes = {
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.boolean,
};

function Task({ id, title, isCompleted }) {
  const dispatch = useDispatch();

  const handleMainContentClick = () => {
    dispatch(toggleStatus(id));
  };

  const handleChange = (value) => {
    dispatch(toggleStatus(id));
  };

  const handleDeleteClick = () => {
    dispatch(removeTodo(id));
  };

  return (
    <TaskBlock>
      <MainContent onPress={handleMainContentClick}>
        <CheckBoxBlock>
          <CheckBox value={isCompleted} onValueChange={handleChange} />
        </CheckBoxBlock>

        <TaskTitle isCompleted={isCompleted}>{title}</TaskTitle>
      </MainContent>

      <DeleteButton isHide={isCompleted} onPress={handleDeleteClick}>
        <Feather name="trash-2" size={26} color="#fff" />
      </DeleteButton>
    </TaskBlock>
  );
}

export default Task;
