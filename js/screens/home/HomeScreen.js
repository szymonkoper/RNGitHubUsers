import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';
import _ from 'lodash';
import UsersFlatList from './components/UsersFlatList';
import AdditionalInfoView from '../components/AdditionalInfoView';
import { getOwners } from '../../redux/owners/actions';

class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  componentDidMount() {
    this.updateOwnersList();
  }

  onUserPressed = (ownerLogin) => {
    const { props } = this;
    props.navigation.navigate('UserDetail', { ownerLogin });
  }

  onSearchText = (searchText) => {
    this.setState({ searchText });
    this.updateOwnersList();
  }

  onSearchTextDebounced = _.debounce(this.onSearchText, 500);

  updateOwnersList = () => {
    const { state, props } = this;
    props.getOwners(state.searchText);
  }

  render = () => {
    const { props, state } = this;

    return (
      <ScrollView testID="UsersList">
        <SearchBar
          testID="SearchBar"
          text={state.searchText}
          onChangeText={this.onSearchTextDebounced}
          platform={Platform.OS}
          placeholder="Type Here..."
        />
        <AdditionalInfoView
          loading={!!props.loading}
          error={!!props.error}
          dataNotEmpty={!!props.owners.length}
        />
        <UsersFlatList data={props.owners} onUserPressed={this.onUserPressed} />
      </ScrollView>
    );
  };
}

const mapStateToProps = ({ ownersScreen }) => ({
  owners: ownersScreen.owners,
  loading: ownersScreen.loading,
  error: ownersScreen.error,
});

const mapDispatchToProps = { getOwners };

const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
export default HomeScreenContainer;
