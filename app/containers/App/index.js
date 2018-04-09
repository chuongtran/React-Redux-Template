// global assets
import 'bootstrap/dist/css/bootstrap.min.css';

// font-awesome
import 'font-awesome/css/font-awesome.min.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { query } from './actions';
import { selectTestMessage, selectTestLoading } from './selectors';


import React from 'react';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.query();
  }

  componentWillReceiveProps() { }

  render() {
    const { testLoading, testMessage } = this.props;
    if (testLoading) return <h1>LOADING...</h1>;
    return <h1>{testMessage}</h1>

    // return (
    //   <div>{React.Children.toArray(this.props.children)}</div>
    // );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    query() {
      dispatch(query());
    }
  };
}

const mapStateToProps = createStructuredSelector({
  testMessage: selectTestMessage(),
  testLoading: selectTestLoading()
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

