import { getAsyncInjectors } from 'utils/asyncInjectors';

import createHomePageRoute from 'containers/PageHome/route';

export const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

export const loadModule = cb => (componentModule) => {
  cb(null, componentModule.default);
};


export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  const homePageRoute = createHomePageRoute(store);

  return [
    ...homePageRoute,
   //    {
   //        path: '*',
   //        name: 'Not Found Page',
   //        getComponent(nextState, cb) {
   //            import('containers/PageNotFound')
          // .then(loadModule(cb))
          // .catch(errorLoading);
   //        },
   //    },
  ];
}
