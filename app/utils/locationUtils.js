import queryString from 'query-string';

export const queryParams = () => queryString.parse(location.search);
