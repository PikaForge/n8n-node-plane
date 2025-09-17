import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const ProjectProperties = [
    ResourceOperationNodeProperties.create(
        Resource.PROJECT,
        {
            options: [
                {
                    name: 'Create Project',
                    value: DefaultOperations.CREATE,
                    description: 'Create a new project',
                    action: 'Create a project',
                },
                {
                    name: 'List Projects',
                    value: DefaultOperations.LIST,
                    description: 'Get a list of projects',
                    action: 'List projects',
                },
                {
                    name: 'Get Project',
                    value: DefaultOperations.GET,
                    description: 'Get a project',
                    action: 'Get a project',
                },
                {
                    name: 'Update Project',
                    value: DefaultOperations.UPDATE,
                    description: 'Update a project',
                    action: 'Update a project',
                },
                {
                    name: 'Delete Project',
                    value: DefaultOperations.DELETE,
                    description: 'Delete a project',
                    action: 'Delete a project',
                }
            ],
            default: DefaultOperations.CREATE,
        }
    ),
    OperationNodeProperties.create(Resource.PROJECT, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
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
    OperationNodeProperties.create(Resource.PROJECT, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
        displayName: 'Data',
        name: 'data',
        type: 'json',
        default: '',
    }),
]