
import { formatPattern } from 'react-router';
import axios from 'axios';


const defaults = {
    cancellable: false,
    actions: {
        get: {
            method: 'GET',
        },
        create: {
            method: 'POST',
        },
        update: {
            method: 'PUT',
        },
        query: {
            method: 'GET',
        },
        remove: {
            method: 'DELETE',
        },
        delete: {
            method: 'DELETE',
        },
    },
};

export const inProgress = {};

export function createService(url, customActions) {
    const actions = { ...defaults.actions, ...customActions };

    function Resource() {}
    const keys = Object.keys(actions);
    keys.forEach((key) => {
        const action = actions[key];

        const CancelToken = axios.CancelToken;
        let cancel;

        Resource[key] = (params, data) => {
            const urlWithParams = formatPattern(action.url || url, params).replace(':/', '://');

            if (!action.parallel && cancel !== undefined) {
                cancel('cancelled');
            }

            const promise = axios({
                url: urlWithParams,
                method: action.method,
                params,
                data,
                withCredentials: true,
                ...action.config,

                cancelToken: new CancelToken((c) => {
                    cancel = c;
                    if (!action.cannotBeCancelled) {
                        inProgress[key] = c;
                    }
                }),
            }).then((response) => {
                delete inProgress[key];
                return response;
            }).catch((response) => {
                if (typeof response === 'object' && response.message === 'cancelled') {
                    return {
                        status: 'cancelled',
                    };
                }
                return { error: response.response.data };
            });
            return promise;
        };
    });
    return Resource;
}

export function createURLSearchParams(data) {
    const params = new URLSearchParams();
    Object.keys(data).forEach((key) => {
        params.append(key, data[key]);
    });
    return params;
}
