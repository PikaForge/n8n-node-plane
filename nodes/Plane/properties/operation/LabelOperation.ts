import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const LabelOperation = ResourceOperationNodeProperties.create(
    Resource.LABEL,
    {
        options: [
            {
                name: 'Create Label',
                value: 'create',
                description: 'Create a new label',
                action: 'Create a label',
            },
            {
                name: 'List Labels',
                value: 'list',
                description: 'Get a list of labels',
                action: 'List labels',
            },
            {
                name: 'Get Label',
                value: 'get',
                description: 'Get a label',
                action: 'Get a label',
            },
            {
                name: 'Update Label',
                value: 'update',
                description: 'Update a label',
                action: 'Update a label',
            },
            {
                name: 'Delete Label',
                value: 'delete',
                description: 'Delete a label',
                action: 'Delete a label',
            }
        ],
        default: 'create',
    }
)