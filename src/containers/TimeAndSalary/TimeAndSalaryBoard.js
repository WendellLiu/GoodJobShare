import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimeAndSalaryBoard from '../../components/TimeAndSalary/TimeAndSalaryBoard';
import { queryTimeAndSalary, switchPath, resetBoardExtremeData, queryExtremeTimeAndSalary } from '../../actions/timeAndSalaryBoard';

const mapStateToProps = state => ({
  data: state.timeAndSalaryBoard.get('data'),
  status: state.timeAndSalaryBoard.get('status'),
  extremeStatus: state.timeAndSalaryBoard.get('extremeStatus'),
  extremeData: state.timeAndSalaryBoard.get('extremeData'),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ queryTimeAndSalary, switchPath, resetBoardExtremeData, queryExtremeTimeAndSalary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimeAndSalaryBoard);
