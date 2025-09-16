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
    OperationNodeProperties.create(Resource.PROJECT, Object.values(DefaultOperations), {
        displayName: 'Workspace Slug',
        name: 'workspaceSlug',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.PROJECT, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'Project ID',
        name: 'projectId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.PROJECT, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
    }),
]