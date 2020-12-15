import { connect } from "react-redux";
import MainDashBoard from "./../MainDashboard";
import { AppState } from "../../Redux/store";
import { WrapperDash } from './../../Redux/interfaces';





let mapStateToProps = (state: AppState) : WrapperDash => {
  console.log(state);
  return {
    mainDash: state.reducerDashBoard.mainDash,
  };
};
debugger
const DashBoardC = connect(mapStateToProps,{})(MainDashBoard);

export default DashBoardC;
