import React from 'react';
import moment from 'moment';
import _ from 'lodash';

export function shortenNumber(value, zeroFill, unit) {
    if (value === null || isNaN(value)) return 'N/A';
    const zeroFillNumber = !zeroFill && zeroFill !== 0 ? 1 : zeroFill;
    let result = value % 1 === 0 ? value : Number(value).toFixed(zeroFillNumber);
    if (value > 999999) {
        result = `${(value / 1000000.0).toFixed(zeroFillNumber)}m`;
    }
    if (value > 999) {
        result = `${(value / 1000.0).toFixed(zeroFillNumber)}k`;
    }
    
    if (unit && unit !== '%') {
        return [<span className="currency">{unit}</span>,<span>&nbsp;{result}</span>];
    }
    return `${result}${unit}`;
}

export function shortenDuration(inputValue, minUnit, useShortcut) {
    inputValue = Math.abs(inputValue);
    if (!minUnit) minUnit = 'millisecond';
    const units = ['Week', 'Day', 'Hour', 'Minute', 'Second'];
    const unitShortcut = ['w', 'd', 'h', 'm', 's'];

    const foundIndex = _.findIndex(units, u => u.toLowerCase() === minUnit);
    if (minUnit && foundIndex === -1) return 'N/A';
    const value = moment.duration(inputValue, minUnit);
    const unitIndex = _.findIndex(units, ((u, uIndex) => Math.ceil(value[`as${u}s`]()) > 2 && uIndex <= foundIndex));
    const unit = units[unitIndex];
    if (unit === 'Hour' || unit === 'Minute') {
        const hours = Math.round(value.get('hours'));
        const unitHours = useShortcut ? 'h' : (hours > 1 ? 'hours' : 'hour');
        const minutes = Math.round(value.get('minutes'));
        const unitMinutes = useShortcut ? 'm' : (minutes > 1 ? 'minutes' : 'minute');
        return hours > 0 ? `${hours} ${unitHours} ${minutes} ${unitMinutes}` : `${minutes} ${unitMinutes}`;
    }
    const result = unit ? Math.round(value[`as${unit}s`]()) : inputValue;
    if (useShortcut) {
        return `${result} ${unitShortcut[unitIndex]}`;
    }
    const displayUnit = unit ? unit.toLowerCase() : minUnit.toLowerCase();
    if (result == 1) return `${result} ${displayUnit}`;
    return `${result} ${displayUnit}s`;
}