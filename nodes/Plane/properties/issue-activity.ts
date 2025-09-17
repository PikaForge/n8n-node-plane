import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const IssueActivityProperties = [
    ResourceOperationNodeProperties.create(
        Resource.ISSUE_ACTIVITY,
        {
            options: [
                {
                    name: 'List Issue Activities',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of issue activities',
                    action: 'List issue activities',
                },
                {
                    name: 'Get Issue Activity',
                    value: DefaultOperations.GET,
                    description: 'Get a specific issue activity',
                    action: 'Get an issue activity',
                },
            ],
            default: DefaultOperations.LIST,
        }
    ),
    OperationNodeProperties.create(Resource.ISSUE_ACTIVITY, [DefaultOperations.GET], {
        displayName: 'Activity ID',
        name: 'activityId',
        type: 'string',
        required: true,
        default: '',
    }),
]