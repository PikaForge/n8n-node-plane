import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { MembersOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const MembersProperties = [
    ResourceOperationNodeProperties.create(
        Resource.MEMBERS,
        {
            options: [
                {
                    name: 'List Workspace Members',
                    value: MembersOperations.LIST_WORKSPACE,
                    description: 'Get a list of workspace members',
                    action: 'List workspace members',
                },
                {
                    name: 'List Project Members',
                    value: MembersOperations.LIST_PROJECT,
                    description: 'Get a list of project members',
                    action: 'List project members',
                }
            ],
            default: MembersOperations.LIST_WORKSPACE,
        }
    ),
    OperationNodeProperties.create(Resource.MEMBERS, [MembersOperations.LIST_PROJECT], {
        displayName: 'Project Name or ID',
        name: 'projectId',
        required: true,
        type: 'options',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
        typeOptions: {
            loadOptionsDependsOn: ['workspaceSlug'],
            loadOptionsMethod: 'getProjects',
        },
        default: '',
    }),
]