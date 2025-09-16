import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const IssuePropertyOptionsOperation = ResourceOperationNodeProperties.create(
    Resource.ISSUE_PROPERTY_OPTIONS,
    {
        options: [
            {
                name: 'Create Issue Property Option',
                value: 'create',
                description: 'Create a new issue property option',
                action: 'Create an issue property option',
            },
            {
                name: 'List Issue Property Options',
                value: 'list',
                description: 'Get a list of issue property options',
                action: 'List issue property options',
            },
            {
                name: 'Get Issue Property Option',
                value: 'get',
                description: 'Get a specific issue property option',
                action: 'Get an issue property option',
            },
            {
                name: 'Update Issue Property Option',
                value: 'update',
                description: 'Update a specific issue property option',
                action: 'Update an issue property option',
            },
            {
                name: 'Delete Issue Property Option',
                value: 'delete',
                description: 'Delete a specific issue property option',
                action: 'Delete an issue property option',
            }
        ],
        default: 'create',
    }
)