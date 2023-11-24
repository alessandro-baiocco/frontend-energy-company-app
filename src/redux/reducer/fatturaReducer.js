import { DELETE_FATTURE, FETCH_FATTURE, PUT_FATTURE } from "../actions";

const initialState = {
  content: null,
};

const fattureReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FATTURE:
      return {
        content: action.payload,
      };
    case DELETE_FATTURE:
      return {
        ...state,
        content: state.content.filter((fattura) => fattura.id !== action.payload.id),
      };
    case PUT_FATTURE:
      return {
        ...state,
        content: state.content.filter((fattura) => fattura.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default fattureReducer;
