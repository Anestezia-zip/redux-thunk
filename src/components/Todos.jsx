import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/actions/dataActions';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((store) => store.data.todos);

    useEffect(() => {
        dispatch(getTodos(dispatch))
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