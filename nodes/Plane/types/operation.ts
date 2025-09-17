export enum DefaultOperations {
    CREATE = 'create',
    LIST = 'list',
    GET = 'get',
    UPDATE = 'update',
    DELETE = 'delete',
}

export enum IssueOperations {
    GET_BY_UUID = 'getByUuid',
    GET_BY_SEQUENCE_ID = 'getBySequenceId',
}

export enum MembersOperations {
    LIST_WORKSPACE = 'listWorkspace',
    LIST_PROJECT = 'listProject',
}

export enum WorklogsOperations {
    GET_TOTAL = 'getTotal',
}

export const AllOperations = {
    ...DefaultOperations,
    ...IssueOperations,
    ...MembersOperations,
    ...WorklogsOperations,
} as const;

export type AnyOperation = typeof AllOperations[keyof typeof AllOperations];