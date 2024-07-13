import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppStateType } from '../redux/storage';
import { Todo } from '../redux/interfaces/interfaces';
import { getTodos } from '../redux/slices/dataSlice.ts';

const Todos = () => {
    const dispatch: AppDispatch = useDispatch();
    const todos: Todo[] = useSelector((store: AppStateType) => store.data.todos);

    useEffect(() => {
        dispatch(getTodos())
    }, [])


  return (
    <div style={{backgroundColor: 'lightgoldenrodyellow'}}>
      <h2 style={{margin: '20px'}}>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos