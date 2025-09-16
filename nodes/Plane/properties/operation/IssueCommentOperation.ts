import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const IssueCommentOperation = ResourceOperationNodeProperties.create(
    Resource.ISSUE_COMMENT,
    {
        options: [
            {
                name: 'Create Issue Comment',
                value: 'create',
                description: 'Create a new issue comment',
                action: 'Create an issue comment',
            },
            {
                name: 'List Issue Comments',
                value: 'list',
                description: 'Get a list of issue comments',
                action: 'List issue comments',
            },
            {
                name: 'Get Issue Comment',
                value: 'get',
                description: 'Get a specific issue comment',
                action: 'Get an issue comment',
            },
            {
                name: 'Update Issue Comment',
                value: 'update',
                description: 'Update a specific issue comment',
                action: 'Update an issue comment',
            },
            {
                name: 'Delete Issue Comment',
                value: 'delete',
                description: 'Delete a specific issue comment',
                action: 'Delete an issue comment',
            }
        ],
        default: 'create',
    }
)