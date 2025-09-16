import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const LinkOperation = ResourceOperationNodeProperties.create(
    Resource.LINK,
    {
        options: [
            {
                name: 'Create Link',
                value: 'create',
                description: 'Create a new link',
                action: 'Create a link',
            },
            {
                name: 'List Links',
                value: 'list',
                description: 'Get a list of links',
                action: 'List links',
            },
            {
                name: 'Get Link',
                value: 'get',
                description: 'Get a link',
                action: 'Get a link',
            },
            {
                name: 'Update Link',
                value: 'update',
                description: 'Update a link',
                action: 'Update a link',
            },
            {
                name: 'Delete Link',
                value: 'delete',
                description: 'Delete a link',
                action: 'Delete a link',
            }
        ],
        default: 'create',
    }
)