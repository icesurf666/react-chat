import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signup, login } from '../actions';
import StartPage from '../components/StartPage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,

});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login,

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartPage);
