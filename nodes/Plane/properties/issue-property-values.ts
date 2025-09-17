import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const IssuePropertyValuesProperties = [
    ResourceOperationNodeProperties.create(
        Resource.ISSUE_PROPERTY_VALUES,
        {
            options: [
                {
                    name: 'Create Issue Property Value',
                    value: DefaultOperations.CREATE,
                    description: 'Create a new issue property value',
                    action: 'Create an issue property value',
                },
                {
                    name: 'List Issue Property Values',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of issue property values',
                    action: 'List issue property values',
                },
            ],
            default: DefaultOperations.LIST,
        }
    ),
    OperationNodeProperties.create(Resource.ISSUE_PROPERTY_VALUES, [DefaultOperations.CREATE], {
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