import React from 'react';
import { ScrollView } from 'react-native';
import { Query } from 'react-apollo';
import RepositoriesFlatList from './Components/RepositoriesFlatList';
import AdditionalInfoView from '../Components/AdditionalInfoView';
import Repository from '../../Models/Repository';
import { fetchRepositories } from '../../actions/repositories';

export default class UserDetailScreen extends React.PureComponent {
  render = () => {
    const { props } = this;
    const login = props.navigation.getParam('login', 'NO-LOGIN')

    return (
      <Query query={fetchRepositories} variables={{ login }} skip={!login.trim()}>
        {({ loading, error, data }) => {
          let repositories = [];

          if (!error && !loading && data && data.repositoryOwner && data.repositoryOwner.repositories && data.repositoryOwner.repositories.nodes) {
            repositories = data.repositoryOwner.repositories.nodes
              .map(it => new Repository(it.name, it.url, it.updatedAt, it.description));
          }

          return (
            <ScrollView>
              <AdditionalInfoView loading={loading} error={error} dataLength={repositories.length} />
              <RepositoriesFlatList data={repositories} />
            </ScrollView>
          );
        }}
      </Query>
    );
  }
}
