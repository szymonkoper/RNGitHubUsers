import { combineReducers } from 'redux';
import ownersScreen from './owners/reducer';
import repositoriesScreen from './repositories/reducer';

export default combineReducers({
  ownersScreen, repositoriesScreen,
});
