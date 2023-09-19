import React, { useState } from 'react';
import { readData, createData, updateData, deleteData } from './api/api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function App() {
  const [todo, setTodo] = useState('');
  const [updateTodo, setUpdateTodo] = useState('');
  const queryClient = useQueryClient();

  // 데이터 읽어오기 Read
  // react query - useQuery (데이터 읽어오기)
  const { data } = useQuery(['todolist'], readData);
  console.log(data);

  // 데이터 쓰기 Create
  // react query - useMutation (데이터 변경)
  const { mutate: createMutate } = useMutation(createData,queryClient.invalidateQueries("todolist"));

  // 데이터 수정 Update
  const { mutate: updateMutate } = useMutation(updateData,queryClient.invalidateQueries("todolist"));

  // 데이터 삭제 Delete
  const { mutate: deleteMutate } = useMutation(deleteData,queryClient.invalidateQueries("todolist"));

  const onUpdate = (id, updateTodo) => {
    // 값을 2개 이상 파라미터로 넘기면 객체 형태로 넘겨줘야함
    // 아래의 코드는 updateData({ id : id, updateTodo : updateTodo }); 하고 똑같음
    updateMutate({ id, updateTodo });
  };

  return (
    <div>
      <input onChange={(e) => setTodo({ ...todo, todo: e.target.value })} />
      <button onClick={() => createMutate(todo)}>추가하기</button>
      {data?.map((data, index) => (
        <div key={index}>
          <p>id : {data.id}</p>
          <p>todo : {data.todo}</p>

          <input onChange={(e) => setUpdateTodo({ ...updateTodo, todo: e.target.value })} />
          <button onClick={() => onUpdate(data.id, updateTodo)}>수정하기</button>
          <button onClick={() => deleteMutate(data.id)}>삭제하기</button>
        </div>
      ))}
    </div>
  );
}

export default App;

// 입력하는걸 updatetodo에 객체 형태로 데이터를 추가하는 것