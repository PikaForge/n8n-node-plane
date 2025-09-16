import { INodeProperties } from "n8n-workflow";
import { Resource } from "../types/resource";

export const ResourceOperationDefaults: Pick<INodeProperties, 'displayName' | 'name' | 'type'> = {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
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