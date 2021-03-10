import { CASES_TYPE } from "../constants";

export const casesType = (text) => {
  return {
    type: CASES_TYPE,
    payload: text,
  };
};
