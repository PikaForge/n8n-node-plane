import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const WorklogsOperation = ResourceOperationNodeProperties.create(
    Resource.WORKLOGS,
    {
        options: [
            {
                name: 'Create Worklog',
                value: 'create',
                description: 'Create a new worklog',
                action: 'Create a worklog',
            },
            {
                name: 'List Worklogs',
                value: 'list',
                description: 'Get a list of worklogs',
                action: 'List worklogs',
            },
            {
                name: 'Get Worklog',
                value: 'get',
                description: 'Get a worklog',
                action: 'Get a worklog',
            },
            {
                name: 'Update Worklog',
                value: 'update',
                description: 'Update a worklog',
                action: 'Update a worklog',
            },
            {
                name: 'Delete Worklog',
                value: 'delete',
                description: 'Delete a worklog',
                action: 'Delete a worklog',
            }
        ],
        default: 'create',
    }
)