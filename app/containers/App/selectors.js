import { createSelector } from 'reselect';

// DON'T TOUCH
// this is from default boilerplate project
// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;
  return (state) => {
    const routingState = state.get('route'); // or state.route
    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

// Select global state
const selectGlobal = () => state => state.get('global');

const selectTestLoading = () => createSelector(
    selectGlobal(),
    globalState => (globalState ? globalState.get('querying') : false),
);

const selectTestMessage = () => createSelector(
    selectGlobal(),
    globalState => (globalState ? globalState.get('message') : false),
);


export {
  makeSelectLocationState,
  selectGlobal,
  selectTestLoading,
  selectTestMessage
};
