import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const IssuePropertiesOperation = ResourceOperationNodeProperties.create(
    Resource.ISSUE_PROPERTIES,
    {
        options: [
            {
                name: 'Create Issue Properties',
                value: 'create',
                description: 'Create a new issue properties',
                action: 'Create an issue properties',
            },
            {
                name: 'List Issue Properties',
                value: 'list',
                description: 'Get a list of issue properties',
                action: 'List issue properties',
            },
            {
                name: 'Get Issue Property',
                value: 'get',
                description: 'Get a specific issue property',
                action: 'Get an issue property',
            },
            {
                name: 'Update Issue Property',
                value: 'update',
                description: 'Update a specific issue property',
                action: 'Update an issue property',
            },
            {
                name: 'Delete Issue Property',
                value: 'delete',
                description: 'Delete a specific issue property',
                action: 'Delete an issue property',
            }
        ],
        default: 'create',
    }
)