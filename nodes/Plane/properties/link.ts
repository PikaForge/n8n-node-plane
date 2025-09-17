import { OperationNodeProperties } from "../common/operation-node-properties";
import { ResourceOperationNodeProperties } from "../common/resource-operation-node-properties";
import { DefaultOperations } from "../types/operation";
import { Resource } from "../types/resource";

export const LinkProperties = [
    ResourceOperationNodeProperties.create(
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
    ),
    OperationNodeProperties.create(Resource.LINK, [DefaultOperations.GET, DefaultOperations.UPDATE, DefaultOperations.DELETE], {
        displayName: 'Link ID',
        name: 'linkId',
        type: 'string',
        required: true,
        default: '',
    }),
    OperationNodeProperties.create(Resource.LINK, [DefaultOperations.CREATE, DefaultOperations.UPDATE], {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        options: [],
    }),
]