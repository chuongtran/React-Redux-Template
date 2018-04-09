const errorLoading = (err) => {
    console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = cb => (componentModule) => {
    cb(null, componentModule.default);
};


export default function createHomePageRoute(store) { // eslint-disable-line no-unused-vars
    return Array.from([
        {
            path: '/',
            name: 'Home Page',
            getComponent(nextState, cb) {
                const importModule = Promise.all([
                    import('containers/PageHome'),
                ]);
                const renderRoute = loadModule(cb);
                importModule.then(([component]) => {
                    renderRoute(component);
                });
                importModule.catch(errorLoading);
            },
        },
    ]);
}
