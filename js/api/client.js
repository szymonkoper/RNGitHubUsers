import {
  ApolloClient, ApolloLink, InMemoryCache, HttpLink,
} from 'apollo-boost';
import token from '../../token';

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

export default apolloClient;
