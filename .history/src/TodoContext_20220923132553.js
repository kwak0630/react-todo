import React, { useReducer, createContext, useContext } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '리액트 공부',
        done: false
    },
    {
        id: 2,
        text: '투두리스트 템플릿 작업',
        done: true
    },
    {
        id: 3,
        text: '목록 작업',
        done: true
    },
    {
        id: 4,
        text: '할 일 등록 작업',
        done: false
    },
    {
        id: 5,
        text: '할일 수정 작업',
        done: false
    },
    {
        id: 6,
        text: '삭제 작업',
        done: true
    },
    {
        id: 7,
        text: '완료 체크 작업',
        done: true
    },
    {
        id: 8,
        text: '완료 체크 카운트 작업',
        done: false
    },
    {
        id: 9,
        text: '오늘 날짜 작업',
        done: true
    }
];

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}


const TodoStateContext = createContext();
const TodoDispatchContext = createContext();


export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    return (
        <TodoStateContext.Provider value={state}>
          <TodoDispatchContext.Provider value={dispatch}>
            {children}
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      );
}


export function useTodoState() {
    return useContext(TodoStateContext);
  }
  
  export function useTodoDispatch() {
    return useContext(TodoDispatchContext);
  }