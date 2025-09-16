import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const IssueActivityOperation = ResourceOperationNodeProperties.create(
    Resource.ISSUE_ACTIVITY,
    {
        options: [
            {
                name: 'List Issue Activities',
                value: 'list',
                description: 'Get a list of issue activities',
                action: 'List issue activities',
            },
            {
                name: 'Get Issue Activity',
                value: 'get',
                description: 'Get a specific issue activity',
                action: 'Get an issue activity',
            },
        ],
        default: 'create',
    }
)