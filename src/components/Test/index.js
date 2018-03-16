import { connect } from 'react-redux';
import Test from './Test';
import {
  getName,
} from '../../selectors/user';
import {
  changeName,
} from '../../ducks/user';

export default connect(
  (state) => ({
    name: getName(state),
  }),
  (dispatch) => ({
    changeName: name => dispatch(changeName(name)),
  })
)(Test);
