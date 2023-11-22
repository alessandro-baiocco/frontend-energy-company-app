import { GET_AUTHORIZATION } from "../action";

const initialState = {
  content: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORIZATION:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
