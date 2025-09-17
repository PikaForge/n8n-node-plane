import { INodeProperties } from "n8n-workflow";
import { Resource } from "../types/resource";

// eslint-disable-next-line n8n-nodes-base/node-param-default-missing
export const ResourceOperationDefaults: Pick<INodeProperties, 'displayName' | 'name' | 'type' | 'noDataExpression'> = {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
}

export class ResourceOperationNodeProperties {
    static create(resource: Resource, config: Omit<INodeProperties, 'displayName' | 'name' | 'type'>): INodeProperties {
        return {
            ...ResourceOperationDefaults,
            ...config,
            displayOptions: {
                ...config.displayOptions,
                show: {
                    ...config.displayOptions?.show,
                    resource: [
                        ...config.displayOptions?.show?.resource ?? [],
                        resource,
                    ]
                }
            },
        }
    }
}