import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/home/HomeScreen';
import OwnerDetailScreen from './screens/owner_detail/OwnerDetailScreen';

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'GitHub Owners',
    }),
  },
  OwnerDetail: {
    screen: OwnerDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.ownerLogin}'s repositories`,
    }),
  },
}, {
  initialRouteName: 'Home',
});
