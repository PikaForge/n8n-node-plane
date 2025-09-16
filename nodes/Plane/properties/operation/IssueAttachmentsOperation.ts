import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const IssueAttachmentsOperation = ResourceOperationNodeProperties.create(
    Resource.ISSUE_ATTACHMENTS,
    {
        options: [
            {
                name: 'Create Issue Attachment',
                value: 'create',
                description: 'Create a new issue attachment',
                action: 'Create an issue attachment',
            },
            {
                name: 'List Issue Attachments',
                value: 'list',
                description: 'Get a list of issue attachments',
                action: 'List issue attachments',
            },
            {
                name: 'Get Issue Attachment',
                value: 'get',
                description: 'Get a specific issue attachment',
                action: 'Get an issue attachment',
            },
            {
                name: 'Update Issue Attachment',
                value: 'update',
                description: 'Update a specific issue attachment',
                action: 'Update an issue attachment',
            },
            {
                name: 'Delete Issue Attachment',
                value: 'delete',
                description: 'Delete a specific issue attachment',
                action: 'Delete an issue attachment',
            }
        ],
        default: 'create',
    }
)