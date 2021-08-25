import * as uuid from 'uuid';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function generateNewId(withPrefix = true): string {
    const newID = withPrefix ? 'addedItemPrefix' + uuid.v4() : uuid.v4();
    return newID;
}

export const isEmpty = (data: any) => {

    if (data === null) {
        return true;
    }
    if (Array.isArray(data)) {
        return data.length === 0;
    }
    else if (typeof data === 'object') {
        return Object.keys(data).length === 0;
    }
    else if (data === undefined) {
        return true;
    }
    else if (typeof data === 'string') {
        return data.length === 0;
    }
    else {
        return !!data;
    }
};
