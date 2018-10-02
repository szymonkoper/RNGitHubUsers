import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home/HomeScreen';

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});
