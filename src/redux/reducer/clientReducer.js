import { ADD_CLIENT, GET_CLIENTS, REMOVE_CLIENT } from "../actions";

const initialState = {
  content: [],
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        content: action.payload,
      };
    case REMOVE_CLIENT:
      return {
        ...state,
        content: state.content.filter((client) => client.id !== action.payload.id),
      };
    case ADD_CLIENT:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    default:
      return state;
  }
};

export default clientReducer;
