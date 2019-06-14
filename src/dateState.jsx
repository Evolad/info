const 
  UPDATE_DATE_STATE = 'UPDATE_DATE_STATE',
  UPDATE_DATE_DYNAMIC_STATE = 'UPDATE_DATE_DYNAMIC_STATE',
  initialState = {
    dunamicId: 'auth',
    menu: false,
    gameMenu: false,
    toggle: false,
    none: false
  };

let oldState = 'menu';

export default function dateState(state = initialState, action) {
  if (action.type === UPDATE_DATE_STATE) {
    state[oldState] = false;
    oldState = action.payload;
    state[oldState] = true;
    state.toggle = (oldState === "none") ? true : false;
    state.dynamicId = -1;
    return { ...state };
  } else if (action.type === UPDATE_DATE_DYNAMIC_STATE) {
    state.dynamicId = action.payload;
    state.toggle = (oldState === "none") ? true : false;
    return { ...state };
  }
  return state;
}