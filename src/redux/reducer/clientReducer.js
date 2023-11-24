import { GET_CLIENTS } from "../actions";

const initialState = {
  content: {},
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default clientReducer;
