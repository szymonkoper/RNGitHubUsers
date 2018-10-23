import React from 'react';
import PropTypes from 'prop-types';
import FoundNothingView from './FoundNothingView';
import LoadingView from './LoadingView';
import ErrorView from './ErrorView';

const DEFAULT_PADDING = 25;

export default class AdditionalInfoView extends React.PureComponent {
  render = () => {
    const { props } = this;
    const { loading, error, dataNotEmpty } = props;

    if (loading) {
      return <LoadingView style={{ padding: DEFAULT_PADDING }} />;
    } if (error) {
      return <ErrorView style={{ padding: DEFAULT_PADDING }} />;
    } if (!dataNotEmpty) {
      return <FoundNothingView style={{ padding: DEFAULT_PADDING }} />;
    }

    return null;
  }
}

AdditionalInfoView.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  dataNotEmpty: PropTypes.bool.isRequired,
};
