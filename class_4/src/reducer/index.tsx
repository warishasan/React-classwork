// An enum with all the types of actions to use in our reducer
type CountActionKind  = 'INCREASE' | 'DECREASE'

  
  // An interface for our actions
  export interface CountAction {
    type: CountActionKind;
    payload: number;
  }
  
  // An interface for our state
 export interface CountState {
    count: number;
  }

  
  // Our reducer function that uses a switch statement to handle our actions
 export default function counterReducer(state: CountState, action: CountAction) {
    const { type,payload } = action;
    switch (type) {
      case 'INCREASE':
        return {
          count: state.count +payload,
        };
      case 'DECREASE':
        return {
          count: state.count - payload,
        };
      default:
        return state;
    }
  }
  
