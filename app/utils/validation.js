export function isLatLong(value) {
    const lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
    const long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
    if (!value.includes(',')) return false;
    const pair = value.split(',');
    return lat.test(pair[0]) && long.test(pair[1]);
}

export function isValidEmail(email) {
    return (email && typeof email === 'string' && email.trim().length > 0) && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}
