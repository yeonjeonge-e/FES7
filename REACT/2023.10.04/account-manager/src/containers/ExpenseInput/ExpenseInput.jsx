import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpenseAction } from '../../store/expense/expense-slice';

export default function ExpenseInput() {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  // 지출 이름을 관리
  const [price, setPrice] = useState(0);
  // 지출 금액을 관리

  function submit(event) {
      event.preventDefault();
      dispatch(addExpenseAction({ name, price }));
  // addExpenseAction 호출되면 실행되는건 결국 리듀서
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label>
          지출 상품 명 :
          <input type="text" placeholder='예시 : "사과"' onChange={(event) => setName(event.target.value)}/>
        </label>
      </div>

      <div>
        <label>
          지출 상품 금액 :
          <input type="number" placeholder='예시 : 5000' onChange={(event) => setPrice(parseInt(event.target.value))}/>
        </label>
      </div>

      <button type='submit'>추가</button>
      
    </form>
  )
}
