import { CASES_TYPE } from "../constants";

const initialState = {
  caseType: "",
};

export const casesType = (state = initialState, action) => {
  switch (action.type) {
    case CASES_TYPE:
      return { ...state, casesType: action.payload };
    default:
      return state;
  }
};
