import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/home/HomeScreen';
import UserDetailScreen from './screens/user_detail/UserDetailScreen';

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'GitHub Users',
    }),
  },
  UserDetail: {
    screen: UserDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.ownerLogin}'s repositories`,
    }),
  },
}, {
  initialRouteName: 'Home',
});
