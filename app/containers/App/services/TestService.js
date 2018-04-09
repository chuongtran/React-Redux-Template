import Apis from 'containers/App/apis';
import { createService } from 'utils/serviceFactory';

const TestService = createService(Apis.test, {
    test: {
        method: 'GET',
        url: `${Apis.test}/`,
    },
});

export default TestService;
