import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        // 사용자의 지출 목록을 관리합니다.
        expenseList: [{ name: 'coffee', price: 5000 }, { name: 'icecream', price: 1500 }],
        income: 1000000
    },


    // reducers : 실행되는 디스패치에 전달되는 액션에 따라서 바뀜 - 그걸 등록해주는 것
    reducers: {
      // addExpenseAction ===> 액션 type의 이름
      // 사용자의 지출 내역을 store에 반영합니다
      addExpenseAction: (currentSlice, action) => {
        // console.log('addExpenseAction');
        currentSlice.expenseList.push( action.payload );
        // slilce의 expenseList에 접근하여 데이터를 수정한다
        // 리덕스 액션엔 타입과 페이로드가 들어있음
      },
      // () => {} : 이 함수 자체가 리듀스

      // 사용자의 수입을 store에 반영합니다
      setIncomeAction: (currentSlice, action) => {
        console.log('setIncomeAction');
        currentSlice.income = action.payload;
      }
    }
});

// action을 디스패치에서 사용할 수 있도록 밖으로 내보냄
export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

// slice 에서 생성한 reducer들을 외부로 내보낸다
export default expenseSlice.reducer