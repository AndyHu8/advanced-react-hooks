// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  //First solution
  // const [count, setCount] = React.useReducer(countReducer, initialCount)

  // const increment = () => setCount(count + step)

  // function countReducer(state, newState) {
  //   return newState;
  // }

  //Second solution
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)
  // const increment = () => changeCount(step)

  // function countReducer(count, step) {
  //   return count + step;
  // }

  //Third solution
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () => setState({count: count + step})

  // function countReducer(state, action) {
  //   return {...state, ...action};
  // }

  //Fifth solution
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))

  //   function countReducer(state, action) {
  //   return {
  //     ...state,
  //     ...(typeof action === 'function' ? action(state) : action)
  //   };
  // }

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  function countReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT': return {count: state.count + action.step}
    
      default:
        throw new Error(`Unsupported Type: ${action.type}`);
    }
  }

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
