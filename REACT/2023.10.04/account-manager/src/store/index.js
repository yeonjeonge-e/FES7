// 리덕스 툴킷 - configureStore
import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from './expense/expense-slice';

// configureStore : 리듀서 통합하는 역할
const store = configureStore({
  reducer: {
      expense: expenseSlice
  }
});

export default store;