import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';
import {
  ApolloClient, ApolloLink, InMemoryCache, HttpLink,
} from 'apollo-boost';
import HomeScreen from './screens/Home/HomeScreen';
import UserDetailScreen from './screens/UserDetail/UserDetailScreen';
import { token } from '../config';

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
    navigationOptions: ({ navigation }) => ({
      title: 'GitHub Users',
    }),
  },
  UserDetail: {
    screen: UserDetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: "User's repositories", // TODO: Use something like `${navigation.state.params.name}'s Profile'`
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
