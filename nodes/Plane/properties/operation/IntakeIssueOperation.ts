import { Resource } from "../../types/resource";
import { ResourceOperationNodeProperties } from "../../common/resource-operation-node-properties";

export const IntakeIssueOperation = ResourceOperationNodeProperties.create(
    Resource.INTAKE_ISSUE,
    {
        options: [
            {
                name: 'Create Intake Issue',
                value: 'create',
                description: 'Create a new intake issue',
                action: 'Create an intake issue',
            },
            {
                name: 'List Intake Issues',
                value: 'list',
                description: 'Get a list of intake issues',
                action: 'List intake issues',
            },
            {
                name: 'Get Intake Issue',
                value: 'get',
                description: 'Get an intake issue',
                action: 'Get an intake issue',
            },
            {
                name: 'Update Intake Issue',
                value: 'update',
                description: 'Update an intake issue',
                action: 'Update an intake issue',
            },
            {
                name: 'Delete Intake Issue',
                value: 'delete',
                description: 'Delete an intake issue',
                action: 'Delete an intake issue',
            }
        ],
        default: 'create',
    }
)