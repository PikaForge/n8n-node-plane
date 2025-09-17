import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations, WorklogsOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const WorklogsProperties = [
    ResourceOperationNodeProperties.create(
        Resource.WORKLOGS,
        {
            options: [
                {
                    name: 'Create Worklog',
                    value: DefaultOperations.CREATE,
                    description: 'Create a new worklog',
                    action: 'Create a worklog',
                },
                {
                    name: 'List Worklogs',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of worklogs',
                    action: 'List worklogs',
                },
                {
                    name: 'Get Total Logged Time',
                    value: WorklogsOperations.GET_TOTAL,
                    description: 'Get the total logged time for a project',
                    action: 'Get total logged time',
                },
                {
                    name: 'Update Worklog',
                    value: DefaultOperations.UPDATE,
                    description: 'Update a worklog',
                    action: 'Update a worklog',
                },
                {
                    name: 'Delete Worklog',
                    value: DefaultOperations.DELETE,
                    description: 'Delete a worklog',
                    action: 'Delete a worklog',
                }
            ],
            default: DefaultOperations.LIST,
        }
    ),
    OperationNodeProperties.create(Resource.WORKLOGS, [DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'Worklog ID',
        name: 'worklogId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.WORKLOGS, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
        displayName: 'Payload',
        name: 'payload',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        placeholder: 'Add Parameter',
        default: {
            parameters: [
                {
                    name: '',
                    value: '',
                },
            ],
        },
        options: [
            {
                name: 'parameters',
                displayName: 'Parameter',
                values: [
                    {
                        displayName: 'Name',
                        name: 'name',
                        type: 'string',
                        default: '',
                        description:
                            'ID of the field to set. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                        description: 'Value of the field to set',
                    },
                ],
            },
        ],
    }),
]