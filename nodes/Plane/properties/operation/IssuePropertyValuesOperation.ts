import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const IssuePropertyValuesOperation = ResourceOperationNodeProperties.create(
    Resource.ISSUE_PROPERTY_VALUES,
    {
        options: [
            {
                name: 'Create Issue Property Value',
                value: 'create',
                description: 'Create a new issue property value',
                action: 'Create an issue property value',
            },
            {
                name: 'List Issue Property Values',
                value: 'list',
                description: 'Get a list of issue property values',
                action: 'List issue property values',
            },
        ],
        default: 'create',
    }
)