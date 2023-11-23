import { GET_ADDRESS } from "../actions";

const initialState = {
  content: [],
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESS:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;
