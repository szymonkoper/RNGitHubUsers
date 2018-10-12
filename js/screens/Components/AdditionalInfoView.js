import React from 'react';
import FoundNothingView from './FoundNothingView';
import LoadingView from './LoadingView';
import ErrorView from './ErrorView';

const DEFAULT_PADDING = 25;

export default class AdditionalInfoView extends React.PureComponent {
  render = () => {
    const { props } = this;
    const { loading, error, dataLength } = props;

    if (loading) {
      return <LoadingView style={{ padding: DEFAULT_PADDING }}/>;
    } if (error) {
      return <ErrorView style={{ padding: DEFAULT_PADDING }}/>;
    } if (!dataLength) {
      return <FoundNothingView style={{ padding: DEFAULT_PADDING }}/>;
    }
    
    return null;
  }
}
