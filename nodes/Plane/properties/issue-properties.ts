import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const IssuePropertiesProperties = [
    ResourceOperationNodeProperties.create(
        Resource.ISSUE_PROPERTIES,
        {
            options: [
                {
                    name: 'Create Issue Properties',
                    value: DefaultOperations.CREATE,
                    description: 'Create a new issue properties',
                    action: 'Create an issue properties',
                },
                {
                    name: 'List Issue Properties',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of issue properties',
                    action: 'List issue properties',
                },
                {
                    name: 'Get Issue Property',
                    value: DefaultOperations.GET,
                    description: 'Get a specific issue property',
                    action: 'Get an issue property',
                },
                {
                    name: 'Update Issue Property',
                    value: DefaultOperations.UPDATE,
                    description: 'Update a specific issue property',
                    action: 'Update an issue property',
                },
                {
                    name: 'Delete Issue Property',
                    value: DefaultOperations.DELETE,
                    description: 'Delete a specific issue property',
                    action: 'Delete an issue property',
                }
            ],
            default: DefaultOperations.LIST,
        }
    ),
    OperationNodeProperties.create(Resource.ISSUE_PROPERTIES, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'Issue Property ID',
        name: 'issuePropertyId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.ISSUE_PROPERTIES, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
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