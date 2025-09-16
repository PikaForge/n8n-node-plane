export enum DefaultOperations {
    CREATE = 'create',
    LIST = 'list',
    GET = 'get',
    UPDATE = 'update',
    DELETE = 'delete',
}

export enum IssueOperations {
    CREATE = 'create',
    LIST = 'list',
    GET_BY_UUID = 'getByUuid',
    GET_BY_SEQUENCE_ID = 'getBySequenceId',
    UPDATE = 'update',
    DELETE = 'delete',
}

export enum MembersOperations {
    LIST_WORKSPACE = 'listWorkspace',
    LIST_PROJECT = 'listProject',
}

export type AnyOperation = DefaultOperations & IssueOperations & MembersOperations;