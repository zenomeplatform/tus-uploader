export const ERRORS = {
    MISSING_OFFSET: {
        status_code: 403,
        body: 'Upload-Offset header required\n',
    },
    INVALID_CONTENT_TYPE: {
        status_code: 403,
        body: 'Content-Type header required\n',
    },
    FILE_NOT_FOUND: {
        status_code: 404,
        body: 'The file for this url was not found\n',
    },
    INVALID_OFFSET: {
        status_code: 409,
        body: 'Upload-Offset conflict\n',
    },
    FILE_NO_LONGER_EXISTS: {
        status_code: 410,
        body: 'The file for this url no longer exists\n',
    },
    INVALID_LENGTH: {
        status_code: 412,
        body: 'Upload-Length or Upload-Defer-Length header required\n',
    },
    UNKNOWN_ERROR: {
        status_code: 500,
        body: 'Something went wrong with that request\n',
    },
    FILE_WRITE_ERROR: {
        status_code: 500,
        body: 'Something went wrong receiving the file\n',
    },
};

export const EVENTS = {
    EVENT_ENDPOINT_CREATED: 'EVENT_ENDPOINT_CREATED',
    EVENT_FILE_CREATED    : 'EVENT_FILE_CREATED'    ,
    EVENT_UPLOAD_COMPLETEL: 'EVENT_UPLOAD_COMPLETE' ,
};
