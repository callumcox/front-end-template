import { TOGGLE_STATUS } from "../../actions/App";

export const status = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_STATUS:
      return action.status;
    default:
      return state;
  }
};
