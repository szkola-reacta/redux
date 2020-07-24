// Action:
// {
//   type: 'COUNTER_ADD',
//   payload: 123
// }

const COUNTER_INC = "counter/COUNTER_INC";
const COUNTER_DEC = "counter/COUNTER_DEC";
const COUNTER_RESET = "counter/COUNTER_RESET";

export function inc() {
  return {
    type: COUNTER_INC
  };
}

export function dec() {
  return {
    type: COUNTER_DEC
  };
}

export const reset = () => ({ type: COUNTER_RESET });

const INITIAL_STATE = {
  count: 0
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTER_INC:
      return { ...state, count: state.count + 1 };
    case COUNTER_DEC:
      return { ...state, count: state.count - 1 };
    case COUNTER_RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
  // if (action.type === COUNTER_INC) {
  //   return {...state, counter: state.counter + 1 }
  //   // return Object.assign({}, { counter: state.counter + 1 });
  // }
  // return state;
}
