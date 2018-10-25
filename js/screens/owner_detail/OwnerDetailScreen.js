import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import RepositoriesFlatList from './components/RepositoriesFlatList';
import AdditionalInfoView from '../components/AdditionalInfoView';
import { getRepositories } from '../../redux/repositories/actions';

class OwnerDetailScreen extends React.PureComponent {
  componentDidMount() {
    const { props } = this;
    const ownerLogin = props.navigation.getParam('ownerLogin', '');
    this.updateRepositoriesList(ownerLogin);
  }

  updateRepositoriesList = (ownerLogin) => {
    const { props } = this;
    props.getRepositories(ownerLogin);
  }

  render = () => {
    const { props } = this;

    return (
      <ScrollView>
        <AdditionalInfoView
          loading={!!props.loading}
          error={!!props.error}
          dataNotEmpty={!!props.repositories.length}
        />
        <RepositoriesFlatList data={props.repositories} />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ repositoriesScreen }) => ({
  repositories: repositoriesScreen.repositories,
  loading: repositoriesScreen.loading,
  error: repositoriesScreen.error,
});

const mapDispatchToProps = { getRepositories };

const OwnerDetailScreenContainer = connect(mapStateToProps, mapDispatchToProps)(OwnerDetailScreen);
export default OwnerDetailScreenContainer;
