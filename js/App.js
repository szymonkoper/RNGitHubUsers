import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';
import {
  ApolloClient, ApolloLink, InMemoryCache, HttpLink,
} from 'apollo-boost';
import HomeScreen from './screens/home/HomeScreen';
import UserDetailScreen from './screens/user_detail/UserDetailScreen';
import token from '../token';

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    fragmentMatcher: { match: ({ id }, typeCond, context) => !!context.store.get(id) },
    dataIdFromObject: obj => obj.id,
    addTypename: false,
  }),
});


const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'GitHub Users',
    }),
  },
  UserDetail: {
    screen: UserDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.login}'s repositories`,
    }),
  },
}, {
  initialRouteName: 'Home',
});

const App = () => (
  <ApolloProvider client={apolloClient}>
    <StackNavigator />
  </ApolloProvider>
);

export default App;
