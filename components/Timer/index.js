import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActions } from "../../reducer";
import Timer from "./presenter";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration,
    addSecond
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
}

// connect mapStateToProps to Timer
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
