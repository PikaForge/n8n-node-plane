import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const IssuePropertyOptionsProperties = [
    ResourceOperationNodeProperties.create(
        Resource.ISSUE_PROPERTY_OPTIONS,
        {
            options: [
                {
                    name: 'Create Issue Property Option',
                    value: DefaultOperations.CREATE,
                    description: 'Create a new issue property option',
                    action: 'Create an issue property option',
                },
                {
                    name: 'List Issue Property Options',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of issue property options',
                    action: 'List issue property options',
                },
                {
                    name: 'Get Issue Property Option',
                    value: DefaultOperations.GET,
                    description: 'Get a specific issue property option',
                    action: 'Get an issue property option',
                },
                {
                    name: 'Update Issue Property Option',
                    value: DefaultOperations.UPDATE,
                    description: 'Update a specific issue property option',
                    action: 'Update an issue property option',
                },
                {
                    name: 'Delete Issue Property Option',
                    value: DefaultOperations.DELETE,
                    description: 'Delete a specific issue property option',
                    action: 'Delete an issue property option',
                }
            ],
            default: DefaultOperations.LIST,
        }
    ),
    OperationNodeProperties.create(Resource.ISSUE_PROPERTY_OPTIONS, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'Option ID',
        name: 'optionId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.ISSUE_PROPERTY_OPTIONS, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
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
];