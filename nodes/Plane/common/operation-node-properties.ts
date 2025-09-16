import { INodeProperties } from "n8n-workflow";
import { Resource } from "../types/resource";

export class OperationNodeProperties {
    static create(resource: Resource, operation: string | string[], config: INodeProperties): INodeProperties {
        return {
            ...config,
            displayOptions: {
                ...config.displayOptions,
                show: {
                    ...config.displayOptions?.show,
                    resource: [
                        ...config.displayOptions?.show?.resource ?? [],
                        resource,
                    ],
                    operation: [
                        ...config.displayOptions?.show?.operation ?? [],
                        ...(Array.isArray(operation) ? operation : [operation]),
                    ],
                }
            },
        }
    }
}