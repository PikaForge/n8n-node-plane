import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const IssueTypeOperation = ResourceOperationNodeProperties.create(
    Resource.ISSUE_TYPE,
    {
        options: [
            {
                name: 'Create Issue Type',
                value: 'create',
                description: 'Create a new issue type',
                action: 'Create an issue type',
            },
            {
                name: 'List Issue Types',
                value: 'list',
                description: 'Get a list of issue types',
                action: 'List issue types',
            },
            {
                name: 'Get Issue Type',
                value: 'get',
                description: 'Get a specific issue type',
                action: 'Get an issue type',
            },
            {
                name: 'Update Issue Type',
                value: 'update',
                description: 'Update a specific issue type',
                action: 'Update an issue type',
            },
            {
                name: 'Delete Issue Type',
                value: 'delete',
                description: 'Delete a specific issue type',
                action: 'Delete an issue type',
            }
        ],
        default: 'create',
    }
)