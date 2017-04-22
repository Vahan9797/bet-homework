function equals(a, b) {
    if (a === b) {
        return true;
    };

    if (!(a instanceof Object) || !(b instanceof Object)) {
        return false;
    };

    if (a.constructor !== b.constructor) {
        return false;
    };

    for (var key in a) {
        if (!a.hasOwnProperty(key)) {
            continue; 
        };

        if (!b.hasOwnProperty(key)) {
            return false;
        };

        if (a[key] === b[key]) {
            continue;
        };

        if (typeof a[key] !== 'object') {
            return false;
        };

        if (!equals(a[key], b[key])) {
            return false;
        }
    };

    for (key in y) {
        if (b.hasOwnProperty(key) && !a.hasOwnProperty(key)) {
            return false;
        }
    };
    return true;
};