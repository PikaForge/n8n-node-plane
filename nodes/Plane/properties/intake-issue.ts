import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const IntakeIssueProperties = [
    ResourceOperationNodeProperties.create(
        Resource.INTAKE_ISSUE,
        {
            options: [
                {
                    name: 'Create Intake Issue',
                    value: DefaultOperations.CREATE,
                    description: 'Create a new intake issue',
                    action: 'Create an intake issue',
                },
                {
                    name: 'List Intake Issues',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of intake issues',
                    action: 'List intake issues',
                },
                {
                    name: 'Get Intake Issue',
                    value: DefaultOperations.GET,
                    description: 'Get an intake issue',
                    action: 'Get an intake issue',
                },
                {
                    name: 'Update Intake Issue',
                    value: DefaultOperations.UPDATE,
                    description: 'Update an intake issue',
                    action: 'Update an intake issue',
                },
                {
                    name: 'Delete Intake Issue',
                    value: DefaultOperations.DELETE,
                    description: 'Delete an intake issue',
                    action: 'Delete an intake issue',
                }
            ],
            default: DefaultOperations.LIST,
        }
    ),
    OperationNodeProperties.create(Resource.INTAKE_ISSUE, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'Issue ID',
        name: 'issueId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.INTAKE_ISSUE, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
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