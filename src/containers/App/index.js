import { connect } from "react-redux";
import App from "../../components/App";
import { toggleStatus, delayToggleStatus } from "../../actions/App";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    active: state.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleStatus: (status) => {
      dispatch(toggleStatus(status));
    },
    delayToggleStatus: (status) => {
      dispatch(delayToggleStatus(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
