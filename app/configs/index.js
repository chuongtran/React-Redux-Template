import DevelopmentConfigs from './development.config';
import ProductionConfigs from './production.config';
import TestingConfigs from './testing.config';
import StagingConfigs from './staging.config';
const SharedConfigs = {
    currency: 'AUD',
};

let environmentConfigs = {};

switch (process.env.NODE_ENV) {
case 'development':
    environmentConfigs = DevelopmentConfigs;
    break;
case 'testing':
    environmentConfigs = TestingConfigs;
    break;
case 'production':
    environmentConfigs = ProductionConfigs;
    break;
case 'staging':
    environmentConfigs = StagingConfigs;
    break;
default:
    environmentConfigs = DevelopmentConfigs;
    break;
}

export default {
    ...SharedConfigs,
    ...environmentConfigs,
};
