import { CASES_TYPE } from "../constants";

const initialState = {
  casesType: "cases",
};

export const casesTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CASES_TYPE:
      return { ...state, casesType: action.payload };
    default:
      return state;
  }
};
