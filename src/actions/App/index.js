export const TOGGLE_STATUS = "TOGGLE_STATUS";
import { delayChange } from "../../api/timeout";

export const toggleStatus = (status) => ({
  type: "TOGGLE_STATUS",
  status,
});

export const delayToggleStatus = (status) => async (dispatch) => {
  const newStatus = await delayChange(status);
  dispatch(toggleStatus(newStatus));
};
