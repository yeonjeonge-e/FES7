import React from 'react'
import {useSelector} from 'react-redux'
import List from '../../components/List/List';

// 데이터를 불러오는 역할을 하는 파일
export default function ExpenseList() {

  const expenseList = useSelector((store) => store.expense.expenseList);
  
  return (
    <List items={expenseList}/>
  )
}
