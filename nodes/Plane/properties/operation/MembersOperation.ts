import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const WorklogsOperation = ResourceOperationNodeProperties.create(
    Resource.WORKLOGS,
    {
        options: [
            {
                name: 'List Workspace Members',
                value: 'listWorkspace',
                description: 'Get a list of workspace members',
                action: 'List workspace members',
            },
            {
                name: 'List Project Members',
                value: 'listProject',
                description: 'Get a list of project members',
                action: 'List project members',
            }
        ],
        default: 'listWorkspace',
    }
)